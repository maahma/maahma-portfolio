"use client"
import React from "react"
import Image from "next/image"


export default function profileImgBlock(){

    return (
        <div className="profile-pic-container">
            <Image className="profile-img" src="images/profile-pic-2.jpg" alt="profile-img" width={1000} height={1000}/>

            <Image className="planet element" src="images/elements/planet.png" width={100} />
            <Image className="heart element" src="images/elements/heart-outline.png" width={100} />
            <Image className="star1 element" src="images/elements/star-outline.png" width={100} />
            <Image className="star2 element" src="images/elements/star.png" width={100} />
            <Image className="cloud element" src="images/elements/cloud.png" width={100} />
        
        </div>
    );
}