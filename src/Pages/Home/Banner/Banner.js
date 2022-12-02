import React from "react";
import "./Bannner.css";

const Banner = () => {
  const image =
    "https://img.freepik.com/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg?w=1380&t=st=1669989565~exp=1669990165~hmac=c844abd53f1b8f9e976850807de7495921ec1ddcf9c1305b9822ee8b957a0b4f";
  return (
    <div
      className="hero rounded-lg"
      style={{ backgroundImage: `url("${image}")`, height: "60vh" }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">FIND YOUR LAPTOP</h1>
          <p className="mb-5">
          Computer zone is offering the best 2nd hand laptop. Are you want to know 2nd hand and used laptop prices in Bangladesh? You land in the right place.
          </p>
          <button className="btn glass text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
