import React from "react";
import "../CSS/Image.css";
import imageList from "../utils/imagesComponentList";

function Images() {
  return (
    <div className="flex flex-row h-[29vh] width image-con ">
      {imageList.map((images, index) => {
        return (
          <img
            src={require(`../Assets/${images.imageName}`)}
            alt=""
            className= {
              index === 0
                ? // Added transition, margin, cursor also added the hover effect into the card image
                  "width pl-2 m-2 cursor-pointer hover:filter hover:brightness-77 ransition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300 ..."
                : "width m-2 cursor-pointer hover:filter hover:brightness-77 ransition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 duration-300 ..."
            }
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Images;
