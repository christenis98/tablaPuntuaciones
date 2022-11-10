package com.example.sampleproject;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class GroupService {
    private final GroupRepository groupRepository;
    public List<Group> getAllGroups() {
        return groupRepository.findAll();
    }

    public Group save(Group group){
        return  groupRepository.save(group);
    }


}
