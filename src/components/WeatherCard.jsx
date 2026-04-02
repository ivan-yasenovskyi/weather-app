import React from "react";

const today = new Date();

const WeatherCard = ({ city, temp, description, iconCode }) => {
  const imageUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <>
      <div className="flex flex-col items-center rounded-md w-90 h-90 sm:px-12 dark:bg-gray-50 dark:text-gray-800">
        <div className="text-center mt-16">
          <h2 className="text-xl font-semibold">{city}</h2>
          <p className="text-sm dark:text-gray-600">
            {today.toLocaleDateString("en-US")}
          </p>

          <img
            src={imageUrl}
            alt={description}
            className="w-32 h-32 p-2 mx-auto"
          />

          <div className="mb-2 text-3xl font-semibold">{temp}</div>
          <p className="dark:text-gray-600 capitalize">{description}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
