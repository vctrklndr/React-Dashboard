import React from 'react';
import Clock from './Clock';
import Timer from './Timer';
import CurrencyView from './CurrencyView';
import TodaysWeatherView from './TodaysWeatherView';
import PostIt2 from './PostIt2';

function Container(props){
  return(
    <main>
      <Clock />
      <Timer />
      <CurrencyView />
      <TodaysWeatherView />
      <PostIt2 />
    </main>
  )
}

export default Container;
