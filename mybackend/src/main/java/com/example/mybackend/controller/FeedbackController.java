// FeedbackController.java
	package com.example.mybackend.controller;
	
	import com.example.mybackend.model.Feedback;
	import com.example.mybackend.service.FeedbackService;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.HttpStatus;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.*;
	
	import java.util.List;
	
	@RestController
	@RequestMapping("/api/feedback")
	@CrossOrigin(origins = "http://localhost:3000")
	public class FeedbackController {
	
	    @Autowired
	    private FeedbackService feedbackService;
	
	    @PostMapping
	    public ResponseEntity<String> submitFeedback(@RequestBody Feedback feedback) {
	        feedbackService.saveFeedback(feedback);
	        return ResponseEntity.status(HttpStatus.CREATED).body("Feedback submitted successfully");
	    }
	
	    @GetMapping
	    public ResponseEntity<List<Feedback>> getAllFeedback() {
	        List<Feedback> feedbackList = feedbackService.getAllFeedback();
	        return ResponseEntity.ok(feedbackList);
	    }
	
	    @GetMapping("/{id}")
	    public ResponseEntity<Feedback> getFeedbackById(@PathVariable Long id) {
	        Feedback feedback = feedbackService.getFeedbackById(id);
	        if (feedback != null) {
	            return ResponseEntity.ok(feedback);
	        } else {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
	        }
	    }
	
	    @DeleteMapping("/{id}")
	    public ResponseEntity<String> deleteFeedback(@PathVariable Long id) {
	        feedbackService.deleteFeedback(id);
	        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Feedback deleted successfully");
	    }
	}