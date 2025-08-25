package com.movies.repository;

import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.movies.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    // Find user by name
    Users findByName(String name);

    // Delete user by id
    void deleteById(Long id);

    // Count users
    long count();
}
