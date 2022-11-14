package com.example.sampleproject.service;

import com.example.sampleproject.model.Score;
import com.example.sampleproject.repo.IScoreRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoreService {

    @Autowired
    IScoreRepo repo;

    public List<Score> getAllScores(){
        List listOfScores= repo.findAll();
        return listOfScores;
    }
    public Score getScoreById(String id){
        return  repo.findById(id).orElse(null);
    }

    public void saveScore(Score score){
        repo.save(score);
    }
}
