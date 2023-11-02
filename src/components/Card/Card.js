import React from "react";
import cardData from "../../map/data.js";
import { StarIcon } from "../../utils/iconUtils.js";
export default function Card() {
  return (
    <>
      {cardData.map((data) => {
        return (
          <div className="">
            <div
              className="p-6 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow "
            >
              <div className="">
                <h3 className="font-semibold text-lg">{data.title}</h3>
                <a href="#">
                  <img
                    className="py-3 rounded-t-lg"
                    src="/Images/homeImg1.jpg"
                    alt=" image"
                  />
                </a>
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
                <a href="#">
                  <p className="text-sm text-orange-700">Continue reading</p>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
