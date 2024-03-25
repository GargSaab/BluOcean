import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Reports.css";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

const Reports = () => {
  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);

  useEffect(() => {
    if (chartContainerRef.current) {
      console.log(chartContainerRef.current.offsetWidth);
      setChartWidth(chartContainerRef.current.offsetWidth);
      setChartHeight(chartContainerRef.current.offsetHeight);
    }
  }, [chartContainerRef]);
  return (
    <div className="reports-container">
      {/* Header */}
      <div className="header">
        <div className="back-button">
          <Link to="/" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            <h3>Report</h3>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-row">
          <div className="report-box">
            <div className="box-header">
              <h3>Top 10 Risk Scenarios </h3>
            </div>
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: [
                    "RS1",
                    "RS2",
                    "RS3",
                    "RS4",
                    "RS5",
                    "RS6",
                    "RS7",
                    "RS8",
                    "RS9",
                    "RS10",
                  ],
                  label: "Risk Scenario",
                  axisLabel: {
                    text: "Risk Scenario",
                    style: { fill: "grey" },
                  },
                },
              ]}
              yAxis={[
                {
                  scaleType: "linear",
                  label: "Net Risk",
                  axisLabel: {
                    text: "Net Risk",
                    style: { fill: "grey" },
                  },
                },
              ]}
              series={[
                {
                  data: [4, 3, 5, 1, 2, 3, 4, 5, 2, 1],
                  color: "orange",
                },
              ]}
              width={chartWidth}
              height={chartHeight}
            />
          </div>
          <div className="report-box">
            <div className="box-header">
              <h3>Risk Scenarios by Likelihood </h3>
            </div>
            <div
              ref={chartContainerRef}
              style={{ width: "100%", height: "80%" }}
            >
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 3, label: "Rare" },
                      { id: 1, value: 5, label: "Periodic" },
                      { id: 2, value: 7, label: "Frequent" },
                      { id: 3, value: 8, label: "Often" },
                      { id: 4, value: 10, label: "Always" },
                    ],
                  },
                ]}
                width={chartWidth}
                height={chartHeight}
              />
            </div>
          </div>
          <div className="report-box">
            <div className="box-header">
              <h3>Risk Scenarios by Business Impact </h3>
            </div>
            <PieChart
              colors={["#2C3E50", "#8E44AD", "#E74C3C", "#27AE60", "#F39C12"]}
              series={[
                {
                  data: [
                    { id: 0, value: 2, label: "Very Low" },
                    { id: 1, value: 4, label: "Low" },
                    { id: 2, value: 6, label: "Medium" },
                    { id: 3, value: 8, label: "High" },
                    { id: 4, value: 10, label: "Critical" },
                  ],
                },
              ]}
              width={chartWidth}
              height={chartHeight}
            />
          </div>
        </div>
        <div className="content-row">
          <div className="report-box">
            <div className="box-header">
              <h3>Summary </h3>
            </div>
            <div style={{ padding: 10, height: "45%" }}>
              <textarea
                placeholder="Enter summary"
                style={{
                  fontSize: 20,
                  padding: 15,
                  backgroundColor: "#e8e8e8",
                  width: "100%",
                  height: "200%",
                  borderRadius: 10,
                }}
              />
            </div>
          </div>
          <div className="report-box">
            <div className="box-header">
              <h3>Summary </h3>
            </div>
            <div style={{ padding: 10, height: "45%" }}>
              <textarea
                placeholder="Enter summary"
                style={{
                  fontSize: 20,
                  padding: 15,
                  backgroundColor: "#e8e8e8",
                  width: "100%",
                  height: "200%",
                  borderRadius: 10,
                }}
              />
            </div>
          </div>
          <div className="report-box">
            <div className="box-header">
              <h3>Summary </h3>
            </div>
            <div style={{ padding: 10, height: "45%" }}>
              <textarea
                placeholder="Enter summary"
                style={{
                  fontSize: 20,
                  padding: 15,
                  backgroundColor: "#e8e8e8",
                  width: "100%",
                  height: "200%",
                  borderRadius: 10,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
