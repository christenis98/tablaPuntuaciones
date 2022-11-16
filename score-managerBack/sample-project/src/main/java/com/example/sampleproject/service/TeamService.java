package com.example.sampleproject.service;

import java.util.List;

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
		JSONObject object = new JSONObject(team);
		String tName = "";
		JSONArray score = null;
		String activity;
		int points;

		// comprobar team
		if (object.isEmpty()) {

			throw new EmptyObjectException("No team data found");
		} else {
			tName = object.getString("name");
			score = object.getJSONArray("scores");

			if (tName.isBlank() && tName.length() < 3) {
				throw new StringSizeException("Name must have more than 3 characters!");
			}

			if (score.isEmpty()) {
				throw new EmptyObjectException("No score data found");
			}

			for (int i = 0; i < score.length(); i++) {

				JSONObject temp = score.getJSONObject(i);

				// nombre de la actividad
				activity = temp.getString("name");

				// comprobar nombre de la activity
				if (activity.isBlank() && activity.length() < 3) {
					throw new StringSizeException("Name must have more than 3 characters!");
				}
				try {// para que no se rompa al hacer el parse con JSON
					points = temp.getInt("points");
					System.out.println(points);
				} catch (Exception e) {
					throw new InvalidDataTypeException("Must be a number");
				}

				if (points <= 0 || points >= 10) {
					System.out.println(points + "siahafijsiahfuih");
					throw new OutOfRangeException("Number must be bigger or equal to 0 and lower or equal to 10");
				}
			}
		}
		return true;
	}

}