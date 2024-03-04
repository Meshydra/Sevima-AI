import React from "react";

export default function CarouselItem({ imgUrl, country, location }) {
    return (
        <div className="carousel-card">
            <img src={imgUrl} alt={country}></img>
            <span className="country">{location}, {country}</span>
        </div>
    );
}