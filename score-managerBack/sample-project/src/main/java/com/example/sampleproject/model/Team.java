package com.example.sampleproject.model;

import java.util.List;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Team {
    @Id
    private String id;
    private String name;
    private List<Score> scores;

}
