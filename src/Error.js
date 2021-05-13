import React from "react";

const Error = (props) => {
  return <div className={`error-display`}>{props.message}</div>;
};

//alternative props used when we don't declare a message propsin the father component
Error.defaultProps = {
  message: "Error 404",
};

export default Error;
