import React from 'react';
 
function WeatherIcon({ src, alt }) {
  return (
    <img src={src} className="Icon" alt={alt} />
  );
}

export default WeatherIcon;