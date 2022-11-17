using MongoDB.Driver;
using scoreManager.dataAccess;
using scoreManager.models;

namespace scoreManager.services
{
    public class TeamServiceImpl : ITeamService
    {

        private readonly IMongoCollection<Team> _teams;

        public TeamServiceImpl(IScoreManagerDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database= mongoClient.GetDatabase(settings.DatabaseName);
            _teams = database.GetCollection<Team>(settings.CollectionName);
        }

        public Team createTeam(Team team)
        {
           _teams.InsertOne(team);
            return team;
        }

        public void deleteTeam(string id)
        {
             _teams.DeleteOne(team => team.id.Equals(id));
        }

        public Team getTeamById(string id)
        {
            return _teams.Find(team => team.id.Equals(id)).FirstOrDefault();
        }

        public List<Team> getTeams()
        {
            return _teams.Find(team=>true).ToList();
        }

        public void updateTeam(string id ,Team team)
        {
            _teams.ReplaceOne(team => team.id.Equals(id), team);
        }
    }
}
