import "../../assets/styles/Feed.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Feed.js

const Feed = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/feedback");
                setFeedbacks(response.data);
            } catch (error) {
                console.error("There was an error fetching the feedback data!", error);
            }
        };

        fetchFeedbacks();
    }, []);

    const getEmoji = (rating) => {
        const emojis = ["😃", "🙂", "😐", "😞", "😡"];
        const labels = ["Excellent", "Good", "Average", "Poor", "Very Poor"];
        return {
            emoji: emojis[rating] || "N/A",
            label: labels[rating] || "N/A"
        };
    };

    return (
        <div className="feed-container">
            <h1>All Feedback</h1>
            <table className="feed-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Feedback</th>
                        <th>Rating</th>
                        <th>Emoji Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map(feedback => {
                        const { emoji, label } = getEmoji(feedback.emojiRating);
                        return (
                            <tr key={feedback.id}>
                                <td>{feedback.id}</td>
                                <td>{feedback.name}</td>
                                <td>{feedback.email}</td>
                                <td>{feedback.feedback}</td>
                                <td>{feedback.rating}</td>
                                <td>{emoji} ({label})</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Feed;