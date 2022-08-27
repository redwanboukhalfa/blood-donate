import React, { useRef, useState } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Bvideo from "../../assets/videos/Bvideo.mp4";
import { FaPlay } from "react-icons/fa";

const Header = () => {
  const vidRef = useRef(null);
  const [toggleVideo, setToggleVideo] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const playVideo = () => {
    setToggleVideo(!toggleVideo);
    if (toggleVideo) {
      vidRef.current.play();

      setIsPlay(true);
    } else {
      vidRef.current.pause();
      setIsPlay(false);
    }
  };
  return (
    <div className="header flex flex-col section-p" id="header">
      <Navbar />
      <div className="container flex ">
        <div className="header-content">
          <h2 className="text-uppercase text-white   fw-5 ls-2">
            You Can Make a{" "}
            <span className="text-black fw-6 fs-28  ">Difference</span>
          </h2>
          <h1 className="text-white fw-6 header-title">
            Blood
            <span className="text-black"> Is not Just for</span>{" "}
            <span className="text-black">Scary</span> Movies It saves{" "}
            <span className="text-black"> Lives</span>
          </h1>
          <div className="btn-groups flex ">
            <a href="#Volunteer">
              <button
                type="button"
                className="btn-item bg-brown fw-4 ls-2"
                style={{}}
              >
                {" "}
                See Donaters{" "}
              </button>
            </a>
            <a href="#Contact">
              {" "}
              <button type="button" className="btn-item bg-dark fw-4 ls-2">
                Contact Us
              </button>{" "}
            </a>
          </div>
        </div>
        <div className="about-video video-containe">
          <video
            className="about-video responsive-video"
            ref={vidRef}
            onClick={playVideo}
          >
            <source src={Bvideo} type="video/mp4" />
          </video>
          <button
            type="button"
            className={isPlay ? "hide-btn" : "vidPlayBtn flex flex-c"}
            onClick={playVideo}
          >
            <FaPlay className="text-brown" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
