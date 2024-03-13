import React from "react";
import { StarIcon } from "../../utils/iconUtils.js";
import {Link} from 'react-router-dom';
export default function Card(props) {

  return (
    <>
      {props.provider?.map((data) => {
        return (
          <div key= {data.id}className="">
            <div
              className="p-2.5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow "
            >
              <div className="">
                <Link to={"/reservation/"+data.id}>
                <h3 className="font-semibold text-lg" >{data.businessName}</h3>
                </Link>
                
                <Link to={"/reservation/"+data.id}>
                  <img
                    className="py-3 rounded-t-lg"
                    src="/Images/homeImg1.jpg"
                    alt=""
                  />
                </Link>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, ind) => (
                      <div key={ind}>
                        {StarIcon("fill-yellow-400")}
                      </div>
                    ))}
                    {data.count5}
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: 4 }, (_, ind) => (
                      <div key={ind}>
                        {StarIcon("fill-yellow-400")}
                      </div>
                    ))}
                    {data.count4}
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: 3 }, (_, ind) => (
                      <div key={ind}>
                        {StarIcon("fill-yellow-400")}
                      </div>
                    ))}
                    {data.count3}
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: 2 }, (_, ind) => (
                      <div key={ind}>
                        {StarIcon( "fill-yellow-400")}
                      </div>
                    ))}
                    {data.count2}
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: 1 }, (_, ind) => (
                      <div key={ind}>
                        {StarIcon("fill-yellow-400")}
                      </div>
                    ))}
                    {data.count1}
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
