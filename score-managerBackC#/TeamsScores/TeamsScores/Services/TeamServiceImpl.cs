using MongoDB.Driver;
using TeamsScores.dataAccess;
using TeamsScores.Models;

namespace TeamsScores.Services
{
    public class TeamServiceImpl : ITeamService
    {
        private readonly IMongoCollection<Team> _teams;

        public TeamServiceImpl(IDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _teams = database.GetCollection<Team>(settings.CollectionName);
        }
        Team ITeamService.Create(Team team)
        {
            _teams.InsertOne(team);
            return team;
        }

        List<Team> ITeamService.Get()
        {
            return _teams.Find(team => true).ToList();
        }

        Team ITeamService.Get(string id)
        {
            return _teams.Find(team => team.id.Equals(id)).FirstOrDefault();
        }

        void ITeamService.Remove(string id)
        {
            _teams.DeleteOne(team => team.id.Equals(id));
        }

        void ITeamService.Update(string id, Team team)
        {
            _teams.ReplaceOne(team => team.id.Equals(id), team);
        }
    }
}
