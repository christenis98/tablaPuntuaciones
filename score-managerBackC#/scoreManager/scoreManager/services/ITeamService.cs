using scoreManager.models;

namespace scoreManager.services
{
    public interface ITeamService
    {
        List<Team> getTeams();
        Team getTeamById(string id);
        Team createTeam(Team team);
        void deleteTeam(string id);
        void updateTeam(string id, Team team);
       

    }
}
