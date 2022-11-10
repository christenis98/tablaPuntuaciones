package com.example.sampleproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("api/hello-world")
@RestController
public class HelloWorldController {
    @GetMapping
    public List<String> getHelloWorld() {
        return List.of("Hello", "world");
    }
}
