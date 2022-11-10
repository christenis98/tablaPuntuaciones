package data;

import java.util.LinkedList;

public class Team {

    String teamName;

    LinkedList<Member> members = new LinkedList<Member>();

    public Team(String teamName) {
        super();
        setTeamName(teamName);
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public LinkedList<Member> getMembers() {
        return members;
    }

    public void setMembers(LinkedList<Member> members) {
        this.members = members;
    }



}