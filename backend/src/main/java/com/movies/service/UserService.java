package com.movies.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movies.config.SecurityConfig;
import com.movies.model.Users;
import com.movies.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SecurityConfig hashPassword;
    
    public Users getUsers(String name, String password) {
        Users foundUser = userRepository.findByName(name);
        if (foundUser != null && hashPassword.passwordEncoder().matches(password, foundUser.getPassword())) {
            return foundUser;
        } else {
            throw new IllegalArgumentException("Invalid username or password");
        }
    }

    public Users createUser(Users user) {
        if (userExists(user.getName())) {
            throw new IllegalArgumentException("User already exists");
        }

        if (checkPassword(user.getPassword())) {
            throw new IllegalArgumentException("Password must be at least 8 characters long");
        }

        if (!checkEmail(user.getEmail())) {
            throw new IllegalArgumentException("Invalid email format");
        }

        Users newUser = new Users();
        newUser.setName(user.getName()); 
        newUser.setPassword(hashPassword(user.getPassword()));
        newUser.setEmail(user.getEmail());
        return userRepository.save(newUser);
    }

    public Users updateUser(Users user) {
        Users updateUser = userRepository.findById(user.getId()).orElse(null);
        if (!checkEmail(user.getEmail())) {
            throw new IllegalArgumentException("Invalid email format");
        }

        if (checkPassword(user.getPassword())) {
            throw new IllegalArgumentException("Password must be at least 8 characters long");
        }
        updateUser.setEmail(user.getEmail());
        updateUser.setPassword(hashPassword(user.getPassword()));
        return userRepository.save(updateUser);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public long countUsers() {
        return userRepository.count();
    }

    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteAllUsers() {
        userRepository.deleteAll();
    }

    public boolean userExists(String name) {
        return userRepository.findByName(name) != null;
    }

    public boolean checkPassword(String password) {
        return password.length() < 8;
    }

    public boolean checkEmail(String email) {
        return email.contains("@") && email.contains(".com");
    }

    public String hashPassword (String password) {
        return hashPassword.passwordEncoder().encode(password);
    }
}
