package com.example.sampleproject.service;

import java.util.List;

import com.example.sampleproject.model.Score;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sampleproject.exception.EmptyObjectException;
import com.example.sampleproject.exception.InvalidDataTypeException;
import com.example.sampleproject.exception.OutOfRangeException;
import com.example.sampleproject.exception.StringSizeException;
import com.example.sampleproject.model.Team;
import com.example.sampleproject.repo.TeamRepository;

@Service
public class TeamService {

	@Autowired
	TeamRepository teamRepository;

	public List<Team> getAllTeams() throws Exception {
		return teamRepository.findAll();
	}

	public Team getTeams(String id) throws Exception {
		return teamRepository.findById(id).orElse(null);
	}

	public Team save(Team team) throws Exception {
		teamRepository.save(team);
		return team;
	}
	
	public void delete(String id) throws Exception {
		teamRepository.deleteById(id);
	}

	public boolean checkData(Team team) {
		if (team == null) {
			throw new EmptyObjectException("Team is null");
		}

		String id = team.getId();

		if (!(id == null)) {
			throw new EmptyObjectException("Id must be null");
		}

		String name = team.getName();

		if (name == null || name.length() < 3) {
			throw new StringSizeException("Name must have more than 3 characters!");
		}

		List<Score> score = team.getScores();


		if (!(score == null) && !checkScore(score)) {
			throw new InvalidDataTypeException("Team score has incorrect data");
		}

		return true;
	}

	private boolean checkScore(List<Score> score) {

		String activity = "";
		int points = 0;

		for (int i = 0; i < score.size(); i++) {

			Score temp = score.get(i);

			// nombre de la actividad
			activity = temp.getName();

			// comprobar nombre de la activity
			if (activity == null || activity.trim().length() < 3) {
				throw new StringSizeException("Name must have more than 3 characters!");
			}
			try {// para que no se rompa al hacer el parse con JSON
				points = temp.getPoints();
				System.out.println(points);
			} catch (Exception e) {
				throw new InvalidDataTypeException("Must be a number");
			}

			if (points <= 0 || points >= 10) {
				throw new OutOfRangeException("Number must be bigger or equal to 0 and lower or equal to 10");
			}
		}
		return true;
	}

}