package com.example.sampleproject.service;

import com.example.sampleproject.model.Team;
import com.example.sampleproject.repo.TeamRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class TeamService {
    private final TeamRepository teamRepository;

    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    public Team getTeams(String id) {
        return teamRepository.findById(id).orElse(null);
    }

    public void save(Team team) {
        teamRepository.save(team);
    }

}