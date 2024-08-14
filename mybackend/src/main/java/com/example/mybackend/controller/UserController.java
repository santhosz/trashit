// UserController.java
package com.example.mybackend.controller;

import com.example.mybackend.model.User;
import com.example.mybackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User loginDto) {
        User user = userService.findByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword());
        if (user != null) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User registrationDto) {
        try {
            userService.saveUser(registrationDto);
            return ResponseEntity.ok("Registration successful");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Registration failed");
        }
    }

    @PostMapping("/users/{userId}/address")
    public ResponseEntity<String> addUserAddress(@PathVariable Long userId, @RequestBody User addressDto) {
        User user = userService.getUserById(userId);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        user.setFirstName(addressDto.getFirstName());
        user.setLastName(addressDto.getLastName());
        user.setPhoneNumber(addressDto.getPhoneNumber());
        user.setStreet(addressDto.getStreet());
        user.setCity(addressDto.getCity());
        user.setState(addressDto.getState());
        user.setPostalCode(addressDto.getPostalCode());
        user.setCountry(addressDto.getCountry());
        userService.saveUser(user);
        return ResponseEntity.ok("Address added successfully");
    }

    @GetMapping("/users/{userId}/address")
    public ResponseEntity<User> getUserAddress(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(user);
    }
}
