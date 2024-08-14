import "../../assets/styles/UserManagement.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/users");
                setUsers(response.data);
            } catch (error) {
                console.error("There was an error fetching the user data!", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="user-management-container">
            <h1>All Addresses</h1>
            <table className="user-management-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Postal Code</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.street}</td>
                            <td>{user.city}</td>
                            <td>{user.state}</td>
                            <td>{user.postalCode}</td>
                            <td>{user.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;