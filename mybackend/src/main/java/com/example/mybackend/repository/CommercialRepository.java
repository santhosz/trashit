// CommercialRepository.java
package com.example.mybackend.repository;

import com.example.mybackend.model.Commercial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommercialRepository extends JpaRepository<Commercial, Long> {
}