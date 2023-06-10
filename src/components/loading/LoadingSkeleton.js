import React from "react";

const LoadingSkeleton = (props) => {
  return (
    <div
      className="skeleton"
      style={{
        height: props.heigth,
        width: props.width || "100%",
        borderRadius: props.radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
