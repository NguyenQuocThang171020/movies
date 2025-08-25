package com.movies.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movies/home")
public class HomeController {
    @GetMapping
    public String home() {
        return "Welcome to the Movies App Backend!";
    }
}
