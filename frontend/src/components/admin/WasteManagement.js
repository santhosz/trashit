import "../../assets/styles/WasteManagement.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { faEnvelope, faMapMarkerAlt, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WasteManagement = () => {
  const [ewasteData, setEwasteData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    const fetchEwasteData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/ewaste');
        setEwasteData(response.data);
      } catch (error) {
        console.error('Error fetching e-waste data:', error);
      }
    };

    fetchEwasteData();
  }, []);

  return (
    <div className="waste-management-container">
      <h2>Waste Management</h2>
      <div className="waste-data">
        {ewasteData.length > 0 ? (
          ewasteData.map((request) => (
            <div className="waste-request" key={request.id}>
              <h3>{request.solutionType}</h3>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> <strong>Address:</strong> {request.address}
              </p>
              <p>
                <FontAwesomeIcon icon={faUser} className="icon" /> <strong>Name:</strong> {request.firstName} {request.lastName}
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="icon" /> <strong>Email:</strong> {request.email}
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="icon" /> <strong>Phone:</strong> {request.phone}
              </p>
            </div>
          ))
        ) : (
          <p>No e-waste requests found.</p>
        )}
      </div>
    </div>
  );
};

export default WasteManagement;