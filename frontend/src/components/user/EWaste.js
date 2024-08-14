import "../../assets/styles/EWaste.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ewaste from "../../assets/images/ewaste.jpg";
import { faEnvelope, faMapMarkerAlt, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

// EWaste.js

const EWaste = () => {
  const [showForm, setShowForm] = useState(false);
  const [ewasteRequests, setEwasteRequests] = useState([]);
  const formRef = useRef(null); // Ref to the form section
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    // Fetch data from the backend
    const fetchEwasteData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/ewaste');
        setEwasteRequests(response.data);
      } catch (error) {
        console.error('Error fetching e-waste data:', error);
      }
    };

    fetchEwasteData();
  }, []);

  const handleStartServiceClick = () => {
    setShowForm(true);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Gather form data
    const formData = {
      solutionType: e.target.solutionType.value,
      address: e.target.address.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    try {
      // Send POST request to backend
      const response = await axios.post('http://localhost:8080/api/ewaste/submit', formData);

      if (response.status === 200) {
        // Navigate to the success page
        navigate('/success');
      } else {
        console.error('Failed to submit request:', response.statusText);
        // Handle the error as needed
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle the error as needed
    }
  };

  return (
    <div className="ewaste-container">
      <div className="ewaste-content">
        <div className="text-and-image">
          <div className="ewaste-text">
            <h2>E-Waste Disposal</h2>
            <p>
              Safely dispose of your electronic waste with our eco-friendly service. We ensure that your e-waste is recycled responsibly, minimizing environmental impact. Schedule pickups at your convenience and contribute to a cleaner, greener community by disposing of your electronic waste properly.
            </p>
            <button className="start-service-button" onClick={handleStartServiceClick}>Start Service</button>
            <button className="contact-service-button"><FontAwesomeIcon icon={faPhone} /> 123456789</button>
          </div>
          <div className="ewaste-image">
            <img src={ewaste} alt="E-Waste Disposal" />
          </div>
        </div>
        <div className="additional-info-container">
          <h3>Why Choose Our Service?</h3>
          <p>
            Our service offers a reliable and efficient solution for your electronic waste management. By choosing us, you contribute to a cleaner environment and ensure your e-waste is handled responsibly. Join us in making a positive impact on our community and the planet.
          </p>
          <h4>Responsible Recycling</h4>
          <p>
            <img src={ewaste} alt="Responsible Recycling" className="info-image" />
            We employ eco-friendly practices to ensure that your e-waste is managed sustainably. From reducing carbon emissions to recycling materials, we are committed to protecting the environment.
          </p>
          <h4>Convenient Scheduling</h4>
          <p>
            <img src={ewaste} alt="Convenient Scheduling" className="info-image" />
            Our flexible scheduling options allow you to arrange pickups at your convenience. Whether you need a regular service or a one-time collection, we are here to accommodate your needs.
          </p>
          <h4>Reward System</h4>
          <p>
            <img src={ewaste} alt="Reward System" className="info-image" />
            Earn rewards for every pickup and recycling effort you make. Our reward system is designed to encourage and recognize your commitment to a cleaner community.
          </p>
          <h4>Community Impact</h4>
          <p>
            <img src={ewaste} alt="Community Impact" className="info-image" />
            By using our service, you are contributing to the well-being of your community. Together, we can reduce waste, promote recycling, and create a healthier environment for everyone.
          </p>
        </div>
        <div className="form-container-wrapper">
          <div className="form-container" ref={formRef}>
            <h3>Choose Your Waste Solution</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="solutionType">Select Service Type:</label>
                <select id="solutionType" name="solutionType" required>
                  <option value="">Select...</option>
                  <option value="E-Waste">E-Waste</option>
                  <option value="Resident">Resident</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
                <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
              </div>
              <div className="form-group-half">
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" required />
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" required />
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                </div>
              </div>
              <div className="form-group-half">
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" required />
                  <FontAwesomeIcon icon={faPhone} className="input-icon" />
                </div>
              </div>
              <div className='sb'>
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="ewaste-requests">
          <h1>.</h1>
          <ul>
            {ewasteRequests.map(request => (
              <li key={request.id}>
                <h4>{request.solutionType}</h4>
                <p><strong>Address:</strong> {request.address}</p>
                <p><strong>Name:</strong> {request.firstName} {request.lastName}</p>
                <p><strong>Email:</strong> {request.email}</p>
                <p><strong>Phone:</strong> {request.phone}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EWaste;