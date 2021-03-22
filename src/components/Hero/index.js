import React from "react";

const Hero = ({ title }) => {
  return (
    <header className="hero text-center">
        <h1>{title}</h1>
    </header>
  );
}

Hero.defaultProps = {
    title: "Employee Records Search",
}

export default Hero;