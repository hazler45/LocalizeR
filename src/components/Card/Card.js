import React from "react";
import {cardData} from "../../map/data.js";
import { StarIcon } from "../../utils/iconUtils.js";
import {Link, useNavigate} from 'react-router-dom';
export default function Card() {
  const navigate = useNavigate();

  const navigateToMakeReservation = () => {
    navigate('/reservation');
  };
  return (
    <>
      {cardData.map((data) => {
        return (
          <div className="">
            <div
              className="p-2.5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow "
            >
              <div className="">
                <Link to="">
                <h3 onClick={navigateToMakeReservation } className="font-semibold text-lg" >{data.title}</h3>
                </Link>
                
                <Link to="">
                  <img
                  onClick={navigateToMakeReservation }
                    className="py-3 rounded-t-lg"
                    src="/Images/homeImg1.jpg"
                    alt=" image"
                    
                  />
                </Link>
                <div className="flex items-center">
                  {Array.from({ length: data.rating }, (_, index) => (
                    <div key={index}>
                      {StarIcon(index < data.rating ? "fill-yellow-400" : "")}
                    </div>
                  ))}
                </div>
          
                <h5 className="  py-2 tracking-tight text-gray-700 ">
                  {data.description}
                </h5>
             
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
