import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faClipboardCheck,
  faChartBar,
  faComments,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">
        <div className="nav-item">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </div>
      </Link>
      <Link to="/library">
        <div className="nav-item">
          <FontAwesomeIcon icon={faBook} />
          <span>Library</span>
        </div>
      </Link>
      <Link to="/assessment">
        <div className="nav-item">
          <FontAwesomeIcon icon={faClipboardCheck} />
          <span>Assessment</span>
        </div>
      </Link>
      <Link to="/reports">
        <div className="nav-item">
          <FontAwesomeIcon icon={faChartBar} />
          <span>Reports</span>
        </div>
      </Link>
      <Link to="/chats">
        <div className="nav-item">
          <FontAwesomeIcon icon={faComments} />
          <span>Chats</span>
        </div>
      </Link>
      <Link to="/user-management">
        <div className="nav-item">
          <FontAwesomeIcon icon={faUsers} />
          <span style={{ textAlign: "center" }}>User Management</span>
        </div>
      </Link>
    </div>
  );
}

export default Navigation;
