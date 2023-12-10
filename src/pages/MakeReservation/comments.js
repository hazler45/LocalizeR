import React from 'react'
import {userData} from "../../map/data.js";
import { StarIcon } from "../../utils/iconUtils.js";
export default function comments() {
  return (
    <>
    
    <div>
  <h1 className="font-bold text-2xl pb-2 pt-12">Check Reviews:</h1>
      <div className="py-3">
      {userData.map((data, index) => (
        <div key={index} className=" mb-4">
          <h3 className="text-lg font-semibold" >{data.userName}</h3>
          <div className="flex items-center">
            {Array.from({ length: data.rating }, (_, starIndex) => (
              <div key={starIndex}>
                {StarIcon(starIndex < data.rating ? 'fill-yellow-400' : '')}
              </div>
            ))}
          </div>
          <h5 className="py-2 tracking-tight text-gray-700">{data.description}</h5>
        </div>
      ))}
      </div>
    </div>
    
    </>
  )
}
