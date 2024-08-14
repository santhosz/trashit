// Feedback.java
package com.example.mybackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "feedbacks")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String feedback;
    private int rating;
    private int emojiRating;

    // Default constructor
    public Feedback() {}

    // Parameterized constructor
    public Feedback(String name, String email, String feedback, int rating, int emojiRating) {
        this.name = name;
        this.email = email;
        this.feedback = feedback;
        this.rating = rating;
        this.emojiRating = emojiRating;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public int getEmojiRating() {
        return emojiRating;
    }

    public void setEmojiRating(int emojiRating) {
        this.emojiRating = emojiRating;
    }
}