import React from "react";
import("./SeasonDisplay.css");

const configSeason = {
  inverno: {
    text: "Brr, esta gelado",
    iconName: "snowflake"
  },
  verao: {
    text: "Que calor desgracado",
    iconName: "sun"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "verao" : "inverno";
  } else {
    return lat < 0 ? "inverno" : "verao";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth);
  const { text, iconName } = configSeason[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
