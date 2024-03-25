// AssessmentCard.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Assessment.css";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function AssessmentCard({
  data,
  index,
  onSelect,
  selected,
  answeredCards,
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const [ans1, ans2] = answeredCards;

  return (
    <>
      <div
        className={`card-box ${selected ? "selected" : ""}`}
        key={index}
        onClick={() => onSelect(index)}
      >
        <div className="card-description">
          {data.riskDescription.length > 22 && !showFullDescription ? (
            <>{`${data.riskDescription.slice(0, 22)}...`}</>
          ) : (
            <>{data.riskDescription}</>
          )}
          {data.riskDescription.length > 22 && (
            <span className="view-more" onClick={toggleDescription}>
              {showFullDescription ? "View less" : "View more"}
            </span>
          )}
        </div>
        <div className="likelihood-score">
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={ans1 ? { color: "green" } : { color: "grey" }}
          />
        </div>
        <div className="business-impact">
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={ans2 ? { color: "green" } : { color: "grey" }}
          />
        </div>
      </div>
    </>
  );
}
