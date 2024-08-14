package com.example.mybackend.service;

import com.example.mybackend.model.Ewaste;
import com.example.mybackend.repository.EwasteRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EwasteService {

    private final EwasteRepository ewasteRepository;

    @Autowired
    public EwasteService(EwasteRepository ewasteRepository) {
        this.ewasteRepository = ewasteRepository;
    }

    /**
     * Save an Ewaste request to the database.
     *
     * @param ewaste The Ewaste object to be saved.
     * @return The saved Ewaste object.
     */
    public Ewaste saveEwaste(Ewaste ewaste) {
        return ewasteRepository.save(ewaste);
    }

    /**
     * Retrieve all Ewaste records from the database.
     *
     * @return A list of all Ewaste records.
     */
    public List<Ewaste> getAllEwaste() {
        return ewasteRepository.findAll();
    }

    // Additional business logic methods can be added here if needed
}