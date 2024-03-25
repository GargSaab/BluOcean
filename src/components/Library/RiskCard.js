import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faCheck } from "@fortawesome/free-solid-svg-icons";

const RiskCard = ({ card, index }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="card-risk" key={index}>
      <div className="blue-line">
        <div className="left-section">
          <span className="code-value">{card.riskID}</span>
          <div className="industry-box">Industry: {card.tagValue}</div>
        </div>
        <div className="right-section">
          <span style={{ color: "#acaeb5", marginInline: 8 }}>
            Last Updated:{" "}
          </span>
          <span className="time">{card.lastUpdated}</span>
          {card.status === "Draft" ? (
            <div className="draft-box">
              <FontAwesomeIcon icon={faCheck} />
              <div style={{ marginLeft: 10 }}>Draft</div>
            </div>
          ) : (
            <>
              <input
                type="checkbox"
                className="radio_input"
                name="fav_language"
                value=""
                onChange={handleCheckboxChange}
                checked={isChecked}
                id={`check_input${index}`}
              />
              <label
                htmlFor={`check_input${index}`}
                className="radio_label"
              ></label>
              <span className={isChecked ? "enabled-text" : "disabled-text"}>
                {isChecked ? "Enabled" : "Disabled"}
              </span>
            </>
          )}
          <FontAwesomeIcon icon={faEllipsisV} className="ellipsis-icon" />
        </div>
      </div>
      <div className="white-line">
        <div className="description">{card.riskDescription}</div>
      </div>
    </div>
  );
};

export default RiskCard;
