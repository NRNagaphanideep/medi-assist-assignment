import React from "react";
import "./index.css";

const Learn = () => {
  return (
    <div id="learn" className="learn-container">
      <h1 className="learn-heading">What will you learn In ACCA?</h1>
      <div className="learn-cards">
        <div className="learn-card">
          <div>
            <h3>Knowledge Level</h3>
          </div>
          <ul>
            <li>Financial Accounting</li>
            <li>Management Accounting</li>
            <li>Performance Management</li>
          </ul>
          <div>
            <p>3 papers</p>
          </div>
        </div>
        <div className="learn-card">
          <div>
            <h3>SKills Level</h3>
          </div>
          <ul>
            <li>Financial Analysis</li>
            <li>Strategic Thinking</li>
            <li>Problem-Solving</li>
            <li>Decision-Makings</li>
            <li>Communication</li>
            <li>Leadership</li>
          </ul>
          <div>
            <p>6 papers</p>
          </div>
        </div>
        <div className="learn-card">
          <div>
            <h3>Professional Leval</h3>
          </div>
          <ul>
            <li>Advanced Financial Management</li>
            <li>Strategic Business Leadership</li>
            <li>Risk Managemen</li>
            <li>Financial Reporting and Analysis:</li>
            <li>Corporate Governance</li>
            <li>Audit and Assurance</li>
          </ul>
          <div>
            <p>4 papers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
