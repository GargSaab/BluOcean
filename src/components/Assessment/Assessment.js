import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Assessment.css";
import AssessmentCard from "./AssessmentCard";
import sampleData from "../../constants/data";

const Assessment = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [selectedLikelihood, setSelectedLikelihood] = useState(null);
  const [selectedBusinessImpact, setSelectedBusinessImpact] = useState(null);
  const [isLikelihood, setIslikelihood] = useState(true);
  const [answeredCards, setAnsweredCards] = useState(
    Array(sampleData.length).fill([false, false])
  );

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  const handleLikelihoodSelect = (likelihood) => {
    setSelectedLikelihood(likelihood);
  };

  const handleBusinessImpactSelect = (impact) => {
    setSelectedBusinessImpact(impact);
  };

  const handleSaveAndContinue = () => {
    console.log("Selected likelihood:", selectedLikelihood);
    console.log(selectedBusinessImpact);

    const updatedAnsweredCards = [...answeredCards];
    updatedAnsweredCards[selectedCard] = [
      selectedLikelihood !== null,
      selectedBusinessImpact !== null,
    ];
    setAnsweredCards(updatedAnsweredCards);

    setSelectedCard((s) => s + 1);
    setSelectedLikelihood(null);
    setSelectedBusinessImpact(null);
    setIslikelihood(true);
  };

  return (
    <div className="assessment-container">
      {/* Header */}
      <div className="header">
        <div className="back-button">
          <Link to="/" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            <h3>Assessment</h3>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* First Section */}
        <div className="first-section">
          <div className="risk-description">
            <h2>Risk Scenario (1/7)</h2>
          </div>
          <div className="search-box">
            <div className="search-bar1">
              <input type="text" placeholder="Search" />
            </div>
            <div className="likelihood-score">Likelihood Score</div>
            <div className="business-impact">Business Impact</div>
          </div>
          <div className="cards-assessment">
            {sampleData.map((data, index) => (
              <AssessmentCard
                key={index}
                data={data}
                index={index}
                onSelect={handleCardSelect}
                selected={selectedCard === index}
                answeredCards={answeredCards[index]}
              />
            ))}
          </div>
        </div>

        {/* Second Section */}
        <div className="second-section">
          {selectedCard !== null && (
            <div className="risk-description">
              <h3>Risk Scenario -</h3>
              <div style={{ color: "#aaa", fontWeight: "bold" }}>
                {sampleData[selectedCard].riskDescription}
              </div>
            </div>
          )}

          <div className="tab-navigation">
            <div
              className="tab"
              onClick={() => {
                setIslikelihood(true);
              }}
              style={
                isLikelihood
                  ? { color: "#04139a", borderBottom: "4px solid #04139a" }
                  : { color: "#333" }
              }
            >
              Likelihood Score
            </div>
            <div
              className="tab"
              onClick={() => {
                setIslikelihood(false);
              }}
              style={
                !isLikelihood
                  ? { color: "#04139a", borderBottom: "4px solid #04139a" }
                  : { color: "#333" }
              }
            >
              Business Impact
            </div>
          </div>
          <div className="likelihood-score-content">
            {isLikelihood ? (
              <>
                <div>Select likelihood score:</div>
                <div className="options">
                  <div
                    className={`option ${
                      selectedLikelihood === "Rare" ? "selected" : ""
                    }`}
                    onClick={() => handleLikelihoodSelect("Rare")}
                  >
                    Rare
                  </div>
                  <div
                    className={`option ${
                      selectedLikelihood === "Periodic" ? "selected" : ""
                    }`}
                    onClick={() => handleLikelihoodSelect("Periodic")}
                  >
                    Periodic
                  </div>
                  <div
                    className={`option ${
                      selectedLikelihood === "Frequent" ? "selected" : ""
                    }`}
                    onClick={() => handleLikelihoodSelect("Frequent")}
                  >
                    Frequent
                  </div>
                  <div
                    className={`option ${
                      selectedLikelihood === "Often" ? "selected" : ""
                    }`}
                    onClick={() => handleLikelihoodSelect("Often")}
                  >
                    Often
                  </div>
                  <div
                    className={`option ${
                      selectedLikelihood === "Always" ? "selected" : ""
                    }`}
                    onClick={() => handleLikelihoodSelect("Always")}
                  >
                    Always
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>Select business impact:</div>
                <div className="options">
                  <div
                    className={`option ${
                      selectedBusinessImpact === "Very Low" ? "selected" : ""
                    }`}
                    onClick={() => handleBusinessImpactSelect("Very Low")}
                  >
                    Very Low
                  </div>
                  <div
                    className={`option ${
                      selectedBusinessImpact === "Low" ? "selected" : ""
                    }`}
                    onClick={() => handleBusinessImpactSelect("Low")}
                  >
                    Low
                  </div>
                  <div
                    className={`option ${
                      selectedBusinessImpact === "Medium" ? "selected" : ""
                    }`}
                    onClick={() => handleBusinessImpactSelect("Medium")}
                  >
                    Medium
                  </div>
                  <div
                    className={`option ${
                      selectedBusinessImpact === "High" ? "selected" : ""
                    }`}
                    onClick={() => handleBusinessImpactSelect("High")}
                  >
                    High
                  </div>
                  <div
                    className={`option ${
                      selectedBusinessImpact === "Critical" ? "selected" : ""
                    }`}
                    onClick={() => handleBusinessImpactSelect("Critical")}
                  >
                    Critical
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="buttons">
        <button>Cancel</button>
        <button onClick={handleSaveAndContinue}>Save & Continue</button>
      </div>
    </div>
  );
};

export default Assessment;
