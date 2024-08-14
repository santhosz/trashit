package com.example.mybackend.controller;

import com.example.mybackend.model.Resident;
import com.example.mybackend.service.ResidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ResidentController {

    @Autowired
    private ResidentService residentService;

    @PostMapping("/residents")
    public ResponseEntity<String> addResident(@RequestBody Resident resident) {
        try {
            residentService.saveResident(resident);
            return ResponseEntity.ok("Resident added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add resident");
        }
    }

    @GetMapping("/residents")
    public ResponseEntity<List<Resident>> getAllResidents() {
        List<Resident> residents = residentService.getAllResidents();
        return ResponseEntity.ok(residents);
    }

    @GetMapping("/residents/{id}")
    public ResponseEntity<Resident> getResidentById(@PathVariable Long id) {
        Optional<Resident> resident = residentService.getResidentById(id);
        return resident.map(ResponseEntity::ok)
                       .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));
    }
}