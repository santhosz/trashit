// CommercialController.java
package com.example.mybackend.controller;

import com.example.mybackend.model.Commercial;
import com.example.mybackend.service.CommercialService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CommercialController {

    @Autowired
    private CommercialService commercialService;

    @PostMapping("/commercials")
    public ResponseEntity<String> addCommercial(@RequestBody Commercial commercialDto) {
        try {
            commercialService.saveCommercial(commercialDto);
            return ResponseEntity.ok("Commercial service requested successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to request service");
        }
    }

    @GetMapping("/commercials/{id}")
    public ResponseEntity<Commercial> getCommercialById(@PathVariable Long id) {
        Commercial commercial = commercialService.getCommercialById(id);
        if (commercial == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(commercial);
    }

    @GetMapping("/commercials")
    public ResponseEntity<List<Commercial>> getAllCommercials() {
        return ResponseEntity.ok(commercialService.getAllCommercials());
    }
}