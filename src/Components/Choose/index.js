import React from "react";
import "./index.css";

const Choose = () => {
  const cardData = [
    {
      icon: "bi bi-water",
      title: "Levels",
      desc: "Three (13 pages)",
    },
    {
      icon: "bi bi-alarm",
      title: "Duration",
      desc: "8 hours",
    },
    {
      icon: "bi bi-laptop",
      title: "Exams",
      desc: "competative course",
    },
    {
      icon: "bi bi-calendar-event",
      title: "Exemptions",
      desc: "Upto 9 pages",
    },
  ];

  return (
    <div id="whyUS" className="why-us-container">
      <h1>
        Why<span>Choose </span>Us?
      </h1>
      <div className="why-us-cards">
        <div className="why-us-card">
          <i className="icon bi bi-lightbulb"></i>
          <h3>Expert Faclty</h3>
          <p>Description for reason 1</p>
        </div>
        <div className="why-us-card">
          <i className="icon bi bi-people-fill"></i>
          <h3>Packages</h3>
          <p>Description for reason 2</p>
        </div>
        <div className="why-us-card">
          <i class="icon bi bi-briefcase"></i>
          <h3>Placements</h3>
          <p>Description for reason 3</p>
        </div>
      </div>
      <div className="why-us-cards bottom">
        {cardData.map(({ icon, title, desc }, index) => (
          <ul className="cards" key={index}>
            <li className="list">
              <h3>{title}</h3>
              <div>
                <i className={icon}></i>
                <p>{desc}</p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Choose;
