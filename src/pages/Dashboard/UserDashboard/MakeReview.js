import React, { useState , useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StarIcon } from "../../../utils/iconUtils";
import SimilarCard from "../../../components/Card/SimilarCard";
import UserSidebar from "../UserDashboard/UserSidebar";
export default function MakeReview() {
  const {serviceId, requestId}= useParams();
  const [serviceProviderData, setServiceProviderData] = useState({});
  const[similarServiceProvider, setsimilarServiceProivder]= useState([]);
  const [alreadyReviewedMessage, setAlreadyReviewedMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Construct the URL using the serviceId route parameter
        const apiUrlById = `http://localhost:5178/api/ServiceProvider/GetServiceProviderByServiceId?serviceId=${serviceId}`;
        // Make a GET request to the API
        const response = await axios.get(apiUrlById);
        console.log(response);
        // Set the fetched data to the state
        setServiceProviderData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [serviceId]);
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleSliderChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  async function toggle() {
    try {
      // Prepare the reservation data
      const ratingData = {
        ratingvalue: rating,
        servicelocation: serviceProviderData.location,
        serviceid: serviceProviderData.id,
        requestid: requestId
      };
  
      // Send the reservation data to the server
      const response = await fetch("http://localhost:5178/api/Ratings/PearsonSimilarityCalculation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ratingData),
      });
  
      if (response.ok) {
        console.log(response);
        const responseData= await response.json();
        console.log(responseData);
        setsimilarServiceProivder(responseData);
        console.log("Rating saved successfully");
        console.log(similarServiceProvider);
        // Optionally, you can handle success actions here
      } 
      else if(response.status === 500){
        const errorMessage = "Already Reviewed This Request"
            setAlreadyReviewedMessage(errorMessage);
      }
      else {
        console.error("Failed to Submit Rating ");
        // Optionally, you can handle failure actions here
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
      // Optionally, you can handle error actions here
    }
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }
  return (
    <>
      <div className="flex">
        <UserSidebar />
        <div className="pt-8 px-8  ">
        <h1 className="text-2xl font-semibold text-orange-600 pb-12">User Dashboard</h1>
          <div style={{ width: "600px" }}>
            <h1 className="text-xl font-semibold">
              Scroll to rate the service provider
            </h1>
            <div >
              <p className="py-2">Your Rating: {rating}</p>
              <div className=" flex flex-row">
                {[...Array(rating)].map((_, index) => (
                  <StarIcon
                    key={index}
                    fillColor="fill-current text-yellow-400"
                  />
                ))}
              </div>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={rating}
                onChange={handleSliderChange}
              />
            </div>
            
              <h1 className="text-2xl font-semibold">
                {serviceProviderData.businessName}
              </h1>
            
            <textarea
              className="textarea-description border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              style={{ height: "240px" }}
            />
            <button
              type="button"
              class="focus:outline-none mt-4 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-lg rounded-md text-sm px-4 py-2 me-2 mb-2"
              onClick={toggle}
            >
              Submit
            </button>
          </div>
          <div>
                    {alreadyReviewedMessage ? (
                        <p className="text-red-600">{alreadyReviewedMessage}</p>
                    ) : isOpen && (
                        <div>
                            {/* Your existing code */}
                            <h1 className="text-2xl pt-8 font-semibold text-orange-600">Most To Least Similar Services For Same Location</h1>
                            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 pt-6 ">
                            <SimilarCard provider={similarServiceProvider}/>
                            </div>
                        </div>
                    )}
                </div>
        </div>
      </div>
    </>
  );
}