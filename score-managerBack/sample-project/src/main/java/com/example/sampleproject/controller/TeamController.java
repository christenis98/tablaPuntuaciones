package com.example.sampleproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sampleproject.exception.NotFoundException;
import com.example.sampleproject.model.Team;
import com.example.sampleproject.service.TeamService;

@RestController
@RequestMapping("api/teams")
@CrossOrigin
public class TeamController {

	@Autowired
	TeamService service;

	// HTTP methods:
	@GetMapping()
	public ResponseEntity<List<Team>> fetchAllTeams() throws Exception {

		List<Team> listOfTeams = service.getAllTeams();

		return new ResponseEntity<>(listOfTeams, HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<Team> fetchTeam(@PathVariable String id) throws Exception {
		Team team = service.getTeams(id);
		if (team == null) {
			throw new NotFoundException("ID not found: " + id);
		}
		return new ResponseEntity<>(team, HttpStatus.OK);
	}

	@PostMapping()
	public ResponseEntity<Team> saveTeam(@RequestBody Team team) throws Exception {

//		Checking if all data passed is valid
		if (service.checkData(team)) {
			service.save(team);
		}

		return new ResponseEntity<>(team, HttpStatus.CREATED);
	}

	@PutMapping(path = "/{id}")
	public ResponseEntity<Team> updateTeam(@RequestBody Team newTeam, @PathVariable String id) throws Exception {
		Team oldTeam = null;
		try {
			oldTeam = service.getTeams(id);
			if (!oldTeam.getId().equals(newTeam.getId())) {
				throw new NotFoundException("The IDs do NOT match.");
			}
		} catch (Exception e) {
			throw new NotFoundException("The IDs do NOT match.");
		}
		oldTeam.setId(newTeam.getId());
		oldTeam.setName(newTeam.getName());
		oldTeam.setScores(newTeam.getScores());
		service.save(oldTeam);
		return new ResponseEntity<>(newTeam, HttpStatus.OK);
	}

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<String> deleteTeam(@PathVariable String id) throws Exception {
		Team team = null;
		try {
			team = service.getTeams(id);
			if (!team.getId().equals(id)) {
				throw new NotFoundException("The object does NOT exist.");
			}
			service.delete(id);
		} catch (Exception e) {
			throw new NotFoundException("The object does NOT exist.");
		}
		return new ResponseEntity<>("Object deleted successfully.", HttpStatus.OK);
	}

}
