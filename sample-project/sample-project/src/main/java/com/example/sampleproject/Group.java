package com.example.sampleproject;

import java.util.List;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Group {
    @Id
    private String id;
    private String name;
    private List<String> members;
    private int points;

    public Group(String name, List<String> members, int points) {
        this.name = name;
        this.members = members;
        this.points = points;
    }
}
