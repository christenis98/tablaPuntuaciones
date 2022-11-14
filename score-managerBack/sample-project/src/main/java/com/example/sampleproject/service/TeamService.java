package com.example.sampleproject.service;

import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sampleproject.model.Team;
import com.example.sampleproject.repo.TeamRepository;

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

	public boolean checkData(Team team) {
		boolean pass = true;
		JSONObject object = new JSONObject(team);
		String tName = "";
		JSONArray score = null;
		String activity;
		int points;

		if (object.isEmpty()) {
			pass = false;
		} else {
			tName = object.getString("name");
			score = object.getJSONArray("scores");

			for (int i = 0; i < score.length(); i++) {

				JSONObject temp = score.getJSONObject(i);

				activity = temp.getString("name");
				try {
					points = temp.getInt("points");

					if (activity.isEmpty() && activity.length() < 3 && pass) {
						pass = false;
					}
					if (points >= 0 && points <= 10 && pass) {
						pass = false;
					}
				} catch (Exception e) {
					pass = false;
				}

			}
		}

		if (pass && tName.isEmpty() && tName.length() < 3) {
			pass = false;
		}
		if (pass && score.isEmpty()) {
			pass = false;

		}

		return pass;
	}

}