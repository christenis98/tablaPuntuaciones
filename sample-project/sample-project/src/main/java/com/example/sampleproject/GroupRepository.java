package com.example.sampleproject;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface GroupRepository
        extends MongoRepository<Group, String> {
}
