import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./RiskScenario.css";
import AddRiskModal from "./AddRiskModal";
import RiskCard from "./RiskCard";
import sampleData from "../../constants/data";

function RiskScenario() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState("riskID");
  const [sortOrder, setSortOrder] = useState("asc");
  const [statusFilter, setStatusFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (formData) => {
    console.log("Form data:", formData);
  };

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);

    setSortOrder(
      option === sortOption ? (sortOrder === "asc" ? "desc" : "asc") : "asc"
    );
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleIndustryFilterChange = (e) => {
    setIndustryFilter(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredData = sampleData.filter((item) => {
    if (statusFilter !== "All" && item.status !== statusFilter) {
      return false;
    }

    if (industryFilter !== "All" && item.tagValue !== industryFilter) {
      return false;
    }

    if (
      searchKeyword.trim() !== "" &&
      !item.riskDescription.toLowerCase().includes(searchKeyword.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const sortedData = filteredData.slice().sort((a, b) => {
    if (sortOption === "riskID") {
      return sortOrder === "asc"
        ? a.riskID.localeCompare(b.riskID)
        : b.riskID.localeCompare(a.riskID);
    } else if (sortOption === "lastUpdated") {
      return sortOrder === "asc"
        ? new Date(a.lastUpdated) - new Date(b.lastUpdated)
        : new Date(b.lastUpdated) - new Date(a.lastUpdated);
    }
    return 0;
  });

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = sortedData.slice(indexOfFirstCard, indexOfLastCard);

  const handleCardsPerPageChange = (e) => {
    setCardsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="risk-scenario-container">
      {/* Header */}
      <div className="header">
        <div className="back-button">
          <Link to="/library" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            <h3>Library/Risk Scenario</h3>
          </Link>
        </div>
        <button className="add-risk-button" onClick={openModal}>
          Add Risk Scenario
        </button>
      </div>

      {/* Add Risk Scenario Modal */}
      {isModalOpen && <AddRiskModal onClose={closeModal} onSave={handleSave} />}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by keywords"
          value={searchKeyword}
          onChange={handleSearch}
        />
        <div className="select-buttons">
          <select
            defaultValue="Sort: Risk ID (Ascending)"
            onChange={handleSortChange}
          >
            <option value="riskID">Sort: Risk ID (Ascending)</option>
            <option value="lastUpdated">Sort: Last Updated Time</option>
          </select>
          <select value={statusFilter} onChange={handleStatusFilterChange}>
            <option value="All">All</option>
            <option value="Draft">Draft</option>
            <option value="Publish">Publish</option>
          </select>
          <select value={industryFilter} onChange={handleIndustryFilterChange}>
            <option value="All">All Industries</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Banking">Banking</option>
            <option value="Technology">Technology</option>
          </select>
        </div>
      </div>
      {/* Cards */}
      <div className="cards-container">
        {currentCards.map((card, index) => (
          <RiskCard key={index} card={card} index={index} />
        ))}
      </div>
      <div className="bottom-navigation">
        <div className="view-users-per-page">
          <span>View users per page:</span>
          <select
            value={cardsPerPage}
            onChange={handleCardsPerPageChange}
            style={{
              backgroundColor: "#e4e4e4",
              padding: 10,
              marginLeft: 10,
              border: "1px solid #e4e4e4",
              borderRadius: 10,
            }}
          >
            <option>4</option>
            <option>6</option>
            <option>8</option>
          </select>
        </div>
        <div style={{ marginLeft: 20 }}>
          <span>
            {`${indexOfFirstCard + 1}-${Math.min(
              indexOfLastCard,
              sampleData.length
            )} out of ${sampleData.length}`}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage > 1 ? prevPage - 1 : prevPage
              )
            }
            style={{
              padding: 10,
              backgroundColor: "white",
              color: "#04139a",
              border: "1px solid #04139a",
              borderRadius: 10,
              margin: 10,
            }}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          <button
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage < Math.ceil(sampleData.length / cardsPerPage)
                  ? prevPage + 1
                  : prevPage
              )
            }
            style={{
              padding: 10,
              backgroundColor: "white",
              color: "#04139a",
              border: "1px solid #04139a",
              borderRadius: 10,
              margin: 10,
            }}
            disabled={
              currentPage === Math.ceil(sampleData.length / cardsPerPage)
            }
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RiskScenario;
