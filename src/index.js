import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";

const ACCA = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    text: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setSuccessMessage("");
    setFormSubmitted(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., send data to server or perform validation
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      text: "",
    });
    // Display success message
    setSuccessMessage(
      "Your request has been submitted successfully. We will contact you shortly."
    );

    setFormSubmitted(true);
  };

  const cardData = [
    {
      icon: "bi bi-award",
      title: "Expert Tutors",
    },
    {
      icon: "bi bi-star-fill",
      title: "Flexible Learning",
    },
    {
      icon: "bi bi-book-half",
      title: "Interactive Learning",
    },
    {
      icon: "bi bi-patch-question-fill",
      title: "Career Support",
    },
  ];

  return (
    <div id="home" className="main-container">
      <div className="main-content">
        <h1>Become ACCA In 18 Months</h1>
        <p className="lead">
          Learn everything you need and pass the ACCA exam within 18 months.
        </p>
        <div className="card-container">
          {cardData.map(({ icon, title }, index) => (
            <ul key={index}>
              <li className="cards-list">
                <i className={icon}></i>
                <p>{title}</p>
              </li>
            </ul>
          ))}
        </div>
        <div className="main-buttons-container">
          <button className="main-buttons" type="button">
            Download
          </button>
          <button className="main-buttons" type="button">
            View More
          </button>
        </div>
      </div>
      <div className="request-call-section">
        <h2>Get in touch with us!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <input
            type="tel"
            placeholder="Enter your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            placeholder="Enter your address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />

          <div className="kick-off">
            <Button
              className="kick-off-button"
              variant="primary"
              onClick={handleShowModal}
            >
              Request Call Back
            </Button>
          </div>
        </form>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Request Call Back</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {successMessage ? (
              <p>{successMessage}</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required={!formSubmitted}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required={!formSubmitted}
                />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required={!formSubmitted}
                />
                {!formSubmitted && <button type="submit">Submit</button>}
              </form>
            )}
          </Modal.Body>
          {!successMessage && (
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default ACCA;
