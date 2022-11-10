package com.example.sampleproject;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/groups")
@AllArgsConstructor
public class GroupController {
    private final GroupService groupService;

    @GetMapping
    public List<Group> fetchAllGroups() {
        return groupService.getAllGroups();
    }

    @PostMapping
    public void saveGroup(@RequestBody Group group){
        groupService.save(group);
    }
}
