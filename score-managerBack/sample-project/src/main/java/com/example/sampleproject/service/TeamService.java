package com.example.sampleproject.service;

import com.example.sampleproject.model.Team;
import com.example.sampleproject.repo.TeamRepository;
import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class TeamService {
	
	@Autowired
     TeamRepository teamRepository;

    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    public Team getTeams(String id) {
        return teamRepository.findById(id).orElse(null);
    }

    public Team save(Team team) {
        teamRepository.save(team);
        return team;
    }

}