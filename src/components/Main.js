import React from 'react';
import Clock from './Clock';
import Timer from './Timer';
import CurrencyView from './CurrencyView';
import TodaysWeatherView from './TodaysWeatherView';
import PostIt from './PostIt';

function Container(props){
  return(
    <main>
      <Clock />
      <Timer />
      <CurrencyView />
      <TodaysWeatherView />
      <PostIt />
    </main>
  )
}

export default Container;
