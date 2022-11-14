package com.example.sampleproject.repo;

import com.example.sampleproject.model.Score;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IScoreRepo extends MongoRepository<Score, String> {
}
