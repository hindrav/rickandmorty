import React from "react";
import "./CardSkeleton.scss";

const CardSkeleton = () => {
  return (
    <div className="cardsk">
      <div className="cardsk-image">
        <div className="cardsk-char-status"></div>
      </div>
      <div className="cardsk-info">
        <div className="cardsk-info__header"></div>
        <div className="cardsk-info__footer">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export { CardSkeleton };
