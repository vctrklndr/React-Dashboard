import React from 'react';
 
function WeatherIcon({ src, alt }) {
  return (
    <img src={src} className="weatherIcons" alt={alt} />
  );
}

export default WeatherIcon;