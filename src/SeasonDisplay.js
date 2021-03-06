import "./SeasonDisplay.css";
import React from "react";

//config for the function
const seasonConfig = {
  summer: {
    text: "Lets hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is chilly",
    iconName: "snowflake",
  },
};

//helper function
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

// the real functional component
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left  massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
      <div className={`container`}></div>
    </div>
  );
};

export default SeasonDisplay;

//<i class="sun icon"></i> || <i class="snowflake icon"></i>
