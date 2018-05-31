import React from 'react';
import Clock from './Clock';
import Timer from './Timer';
import CurrencyView from './CurrencyView';
import TodaysWeatherView from './TodaysWeatherView';
import PostIt from './PostIt';

function Main(){
  return(
    <main>
      <div className="wrapper">
        <Clock />
        <TodaysWeatherView />
      </div>
      <div className="wrapper">
        <Timer />
        <CurrencyView />
      </div>
      <PostIt />
    </main>
  )
}

export default Main;
