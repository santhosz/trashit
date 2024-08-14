// FeedbackRepository.java
package com.example.mybackend.repository;

import com.example.mybackend.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}