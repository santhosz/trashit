import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/AdminDashboard.css";

const AdminDashboard = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-heading">Admin Panel</h2>
            <ul className="sidebar-menu">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/user-management">Address Details</Link></li>
                <li><Link to="/feed">Feedback</Link></li>
                <li><Link to="/waste-management">Waste Management</Link></li>
                <li><Link to="/personal-details">Personal Details</Link></li>
            </ul>
            <Link to="/logout" className="logout-button">Logout</Link>
        </div>
    );
}

export default AdminDashboard;
