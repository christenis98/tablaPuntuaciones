using TeamsScores.Models;

namespace TeamsScores.Services
{
    public interface ITeamService
    {
        List<Team> Get();
        Team Get(string id);
        Team Create(Team team);
        void Remove(string id);
        void Update(string id, Team team);
    }
}
