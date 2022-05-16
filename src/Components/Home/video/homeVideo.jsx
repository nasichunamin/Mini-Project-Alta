import React, { useState } from "react";
import './style.css'
import video from "../../../assets/video/Cinematic.mp4"

const Cinematic = () => {

    return(
        <div>
             <video src={video} controls className="videoHome"></video>
        </div>
    )
}
export default Cinematic;