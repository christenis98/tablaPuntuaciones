package com.example.sampleproject.controller;

import com.example.sampleproject.model.Score;
import com.example.sampleproject.model.Team;
import com.example.sampleproject.service.ScoreService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/scores")
@AllArgsConstructor
@CrossOrigin
public class ScoreController {


    @Autowired
    ScoreService service;

    @GetMapping()
    public ResponseEntity<List<Score>> fetchAllScores() {

        List<Score> listOfScores= service.getAllScores();

        return new ResponseEntity<>(listOfScores, HttpStatus.OK);
    }
    @GetMapping(path = "/{id}")
    public ResponseEntity<Score> fetchTeam(@PathVariable String id) {
        Score score= service.getScoreById(id);
        return new ResponseEntity<>(score,HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<String> saveScore(@RequestBody Score score) {

        String message="Wrong data!";
        if(score != null){
            service.saveScore(score);
            message="Score Created";
        }
        return new ResponseEntity<>(message,HttpStatus.CREATED);
    }

}
