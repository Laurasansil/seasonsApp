import React from "react";

const Loading = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui medium text loader">{props.message}</div>
    </div>
  );
};

//alternative props used when we don't declare a message props in the father component
Loading.defaultProps = {
  message: "Loading...",
};

export default Loading;
