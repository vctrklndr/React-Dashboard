import React from "react";
import Clock from "./Clock";
import Timer from "./Timer";
import CurrencyView from "./CurrencyView";
import TodaysWeatherView from "./TodaysWeatherView";
import PostIt from "./PostIt";

function Main() {
  return (
    <main className="Page-container">
      <div className="Grid">
        <div className="Grid-cell">
          <Clock />
          <TodaysWeatherView />
        </div>
        <div className="Grid-cell">
          <Timer />
          <CurrencyView />
        </div>
        <div className="Grid-cell">
          <PostIt />
        </div>
      </div>
    </main>
  );
}

export default Main;
