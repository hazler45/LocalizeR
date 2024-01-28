import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
export default function ServiceProviderPage() {
  const { serviceId } = useParams();
  const serviceIdNumber = parseInt(serviceId);
  const serviceLocation= sessionStorage.getItem('location');
  const [serviceProviderData, setServiceProviderData] = useState([]);
  const [serviceProviderDataByLocation, setServiceProviderDataByLocation]= useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log(serviceIdNumber);
      console.log(serviceLocation);
      try {
        // Construct the URL using the serviceId route parameter
        const apiUrlById = `http://localhost:5178/api/ServiceProvider/GetServiceProviderByServiceIdType?serviceId=${serviceIdNumber}`;
        // Make a GET request to the API
        const response = await axios.get(apiUrlById);
        console.log(response);
        setServiceProviderData(response.data);
        const apiUrlBylocation= `http://localhost:5178/api/ServiceProvider/GetServiceProvidersByLocation?location=${serviceLocation}&serviceId=${serviceIdNumber}`
        const response2 = await axios.get(apiUrlBylocation);
        console.log(response2);
        // Set the fetched data to the state
        setServiceProviderDataByLocation(response2.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [serviceIdNumber, serviceLocation]);

  return (
    <>
    <div>
      <div>
        <h1 className="text-2xl pt-8 font-semibold text-orange-600">Available on This Platform</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 pt-6 ">
        {serviceProviderData && (
          <Card provider={serviceProviderData} />
        )}
        </div>
      </div>
      <div>
        <h1 className="text-2xl pt-8 font-semibold text-orange-600">Inside Your Location</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 pt-6 ">
        {serviceProviderDataByLocation && (
          <Card provider={serviceProviderDataByLocation} />
        )}
        </div>
      </div>
    </div>
  </>
  
  );
}
