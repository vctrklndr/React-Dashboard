import React from 'react';
import Clock from './Clock';
import Timer from './Timer';
import CurrencyView from './CurrencyView';
import TodaysWeatherView from './TodaysWeatherView';
import PostIt from './PostIt';

function Main(){
  return(
    <main>
      <div>
        <Clock />
        <TodaysWeatherView />
      </div>
      <div>
        <Timer />
        <CurrencyView />
      </div>
      <PostIt />
    </main>
  )
}

export default Main;
