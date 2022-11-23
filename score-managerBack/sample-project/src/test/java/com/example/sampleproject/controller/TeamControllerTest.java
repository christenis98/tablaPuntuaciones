package com.example.sampleproject.controller;

import com.example.sampleproject.model.Team;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TeamControllerTest {

    private TestRestTemplate testRestTemplate;

    @Autowired
    private RestTemplateBuilder restTemplateBuilder;

    @LocalServerPort
    private int port;

    @BeforeEach
    void setUp() {
        restTemplateBuilder = restTemplateBuilder.rootUri("http://localhost:" + port);
        testRestTemplate = new TestRestTemplate(restTemplateBuilder);
    }

    @Test
    void fetchAllTeams() {
        ResponseEntity<Team[]> response  =
                testRestTemplate.getForEntity("/api/teams", Team[].class);
    }

    @Test
    void fetchTeam() {
        ResponseEntity<Team> response  =
                testRestTemplate.getForEntity("/api/teams/1", Team.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void saveTeam() {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

        String json = """
                
                    {
                        "name": "prrrrrruebas",
                        "scores": [
                            {
                                "name": "takuña",
                                "points": 8,
                                "id": "null"
                            }
                        ]
                    }
                
                """;


        HttpEntity<String> request = new HttpEntity<>(json,headers);

        ResponseEntity<Team> response = testRestTemplate.exchange("/api/teams", HttpMethod.POST, request, Team.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
    }

    @Test
    void updateTeam() {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

        String json = """
                
                    {
                        "id": "637e33abd81a0064ce1f0857",
                        "name": "prrrrrruebas",
                        "scores": [
                            {
                                "name": "Maria Antonieta",
                                "points": 8,
                                "id": "null"
                            },
                            {
                                "name": "la neurotica",
                                "points": 8,
                                "id": "null"
                            }
                        ]
                    }
                
                """;


        HttpEntity<String> request = new HttpEntity<>(json,headers);

        ResponseEntity<Team> response = testRestTemplate.exchange("/api/teams/637e33abd81a0064ce1f0857", HttpMethod.PUT, request, Team.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());

    }

    @Test
    void deleteTeam() {
        ResponseEntity<Void> response = testRestTemplate.exchange("/api/teams/637defaeb46d3c2761250e3c", HttpMethod.DELETE, HttpEntity.EMPTY, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}