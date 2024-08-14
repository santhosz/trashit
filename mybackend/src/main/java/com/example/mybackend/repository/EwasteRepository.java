package com.example.mybackend.repository;

import com.example.mybackend.model.Ewaste;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EwasteRepository extends JpaRepository<Ewaste, Long> {
    // Custom query methods can be added here if needed
}