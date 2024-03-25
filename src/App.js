import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
import Library from "./components/Library/Library";
import Assessment from "./components/Assessment/Assessment";
import Reports from "./components/Reports/Reports";
import Chats from "./components/Chats/Chats";
import UserManagement from "./components/UserManagement/UserManagement";
import RiskScenario from "./components/Library/RiskScenario";
import Login from "./components/Login/Login";

function App() {
  const [logIn, setLogin] = useState(false);
  return (
    <div className="container">
      {logIn ? (
        <Router>
          <div className="app">
            {/* Blue vertical slab */}
            <div className="sidebar">
              <Navigation />
            </div>
            {/* White slab with Notification and User icon */}
            <div className="sidebox">
              <div className="topbar">
                <div className="notification-icon">
                  <FontAwesomeIcon icon={faBell} style={{ color: "#111" }} />
                </div>
                <div className="user-icon">
                  <FontAwesomeIcon icon={faUser} style={{ color: "#111" }} />
                </div>
              </div>
              {/* Content area */}
              <div className="content">
                <Routes>
                  {" "}
                  {/* Using Routes instead of Switch for v6 */}
                  <Route path="/" element={<Home />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/assessment" element={<Assessment />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/chats" element={<Chats />} />
                  <Route path="/user-management" element={<UserManagement />} />
                  <Route
                    path="/library/risk-scenarios"
                    element={<RiskScenario />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      ) : (
        <Login setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
