import React from "react";
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {
  return (
    <div className="carousel-container">
        <div className="carousel-track">
            {Object.keys(cardDetails).map((detailKey) => {
                return (
                    <CarouselItem
                        key={detailKey} // Add a unique "key" prop
                        imgUrl={cardDetails[detailKey].imgUrl}
                        country={cardDetails[detailKey].country}                           
                        location={cardDetails[detailKey].location}                        
                    ></CarouselItem>,
                    <CarouselItem
                        key={detailKey} // Add a unique "key" prop
                        imgUrl={cardDetails[detailKey].imgUrl}
                        country={cardDetails[detailKey].country}                           
                        location={cardDetails[detailKey].location}                        
                    ></CarouselItem>
                );
            })}
        </div>
    </div>
  );
}