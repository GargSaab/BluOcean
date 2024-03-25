import React from "react";
import { Link } from "react-router-dom";
import "./Library.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faTriangleExclamation,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import sampleData from "../../constants/data";

function Library() {
  const countPublish = () => {
    let count = 0;
    sampleData.map((data) => {
      data.status === "Publish" && count++;
      return null;
    });
    return count;
  };
  return (
    <div>
      <div>
        <h2>Library</h2>
      </div>
      <div className="library">
        <div className="card">
          <Link to="/library/risk-scenarios">
            <div className="header1">
              <div className="icon">
                <FontAwesomeIcon icon={faFileLines} />
              </div>
              <div className="title">Risk Scenarios</div>
            </div>
            <div className="description">
              Anticipate and address potential cybersecurity risks to business
            </div>
            <hr />
            <div className="description">
              <div className="des-box">
                <div className="des-key">All Scenarios:</div>
                <div className="des-value">{sampleData.length}</div>
              </div>
              <div className="des-box">
                <div className="des-key">Published:</div>
                <div className="des-value">{countPublish()}</div>
              </div>
              <div className="des-box">
                <div className="des-key">Disabled:</div>
                <div className="des-value">{countPublish() - 2}</div>
              </div>
              <div className="des-box">
                <div className="des-key">Draft:</div>
                <div className="des-value">
                  {sampleData.length - countPublish()}
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/reports">
            <div className="header1">
              <div className="icon">
                <FontAwesomeIcon icon={faTriangleExclamation} />
              </div>
              <div className="title">Reports</div>
            </div>
            <div className="description">
              Generate reports for the business and security leaders.
            </div>
            <hr />
          </Link>
        </div>
        <div className="card">
          <Link to="/assessment">
            <div className="header1">
              <div className="icon">
                <FontAwesomeIcon icon={faGem} />
              </div>
              <div className="title">Assessment</div>
            </div>
            <div className="description">
              Assess risk scenarios to identify net risk scores.
            </div>
            <hr />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Library;
