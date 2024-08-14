package com.example.mybackend.controller;

import com.example.mybackend.model.Ewaste;
import com.example.mybackend.service.EwasteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ewaste")
@CrossOrigin(origins = "http://localhost:3000")
public class EwasteController {

    @Autowired
    private EwasteService ewasteService;

    @PostMapping("/submit")
    public ResponseEntity<String> submitEwaste(@RequestBody Ewaste ewaste) {
        try {
            ewasteService.saveEwaste(ewaste);
            return ResponseEntity.ok("Request submitted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to submit request");
        }
    }

    @GetMapping
    public ResponseEntity<List<Ewaste>> getAllEwaste() {
        try {
            List<Ewaste> ewasteList = ewasteService.getAllEwaste();
            return ResponseEntity.ok(ewasteList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}