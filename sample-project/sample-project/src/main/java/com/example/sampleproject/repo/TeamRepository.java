package com.example.sampleproject.repo;

import com.example.sampleproject.model.Team;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TeamRepository
        extends MongoRepository<Team, String> {
}
