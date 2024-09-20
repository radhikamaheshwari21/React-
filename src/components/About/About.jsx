import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-6">
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          We are a team of passionate developers who love creating beautiful
          and functional websites. Our goal is to provide the best user
          experience possible and to continuously improve our skills to stay
          ahead of the latest trends in web development.
        </p>
      </div>
      <div className="md:w-1/2 p-4 mx-8">
        <img
          src="https://cdn-icons-png.freepik.com/256/11584/11584454.png?ga=GA1.1.800299237.1723205838&semt=ais_hybrid"
          alt="About us"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
