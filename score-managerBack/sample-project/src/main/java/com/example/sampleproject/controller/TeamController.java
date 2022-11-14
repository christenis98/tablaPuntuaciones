package com.example.sampleproject.controller;

import com.example.sampleproject.model.Team;
import com.example.sampleproject.service.TeamService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/teams")
@AllArgsConstructor
@CrossOrigin
public class TeamController {

    @Autowired
    TeamService service;

    // HTTP methods:
    @GetMapping()
    public ResponseEntity<List<Team>> fetchAllTeams() {

        List<Team> listOfTeams= service.getAllTeams();

        return new ResponseEntity<>(listOfTeams, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Team> fetchTeam(@PathVariable String id) {
        Team team= service.getTeams(id);
        return new ResponseEntity<>(team,HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<String> saveTeam(@RequestBody Team team) {

        String  message="Wrong data!";
        if(team != null){
            service.save(team);
            message="Team Created";

        }
        return new ResponseEntity<>(message,HttpStatus.CREATED);
    }


}
