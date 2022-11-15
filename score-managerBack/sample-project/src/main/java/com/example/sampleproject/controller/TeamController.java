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
    public ResponseEntity<Team> saveTeam(@RequestBody Team team) {

        String  message="Wrong data!";
        if(team != null){
            service.save(team);
            message="Team Created";

        }
        return new ResponseEntity<>(team,HttpStatus.CREATED);
    }
    
    //-----[Update and Delete methods, Claudia can you fix them PLEASE]-----
    @PutMapping(path = "/{id}")
    public ResponseEntity<Team> updateTeam(@RequestBody Team newTeam, @PathVariable String id) {
        Team oldTeam = service.getTeams(id);
        if(oldTeam.getId() != newTeam.getId()) {
            String message = "Error: the IDs do NOT match.";
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        oldTeam.setId(newTeam.setId());
        oldTeam.setName(newTeam.getName());
        oldTeam.setScores(newTeam.getScores());
        service.save(oldTeam);
        return new ResponseEntity<>(newTeam, HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity deleteTeam(@PathVariable String id) {
        Team team = service.getTeams(id);
        service.deleteById(id);
        return ResponseEntity.ok().build();
    }
    //----------

}
