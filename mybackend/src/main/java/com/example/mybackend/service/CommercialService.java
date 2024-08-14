// CommercialService.java
package com.example.mybackend.service;

import com.example.mybackend.model.Commercial;
import com.example.mybackend.repository.CommercialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommercialService {

    @Autowired
    private CommercialRepository commercialRepository;

    public Commercial saveCommercial(Commercial commercial) {
        return commercialRepository.save(commercial);
    }

    public List<Commercial> getAllCommercials() {
        return commercialRepository.findAll();
    }

    public Commercial getCommercialById(Long id) {
        return commercialRepository.findById(id).orElse(null);
    }
}