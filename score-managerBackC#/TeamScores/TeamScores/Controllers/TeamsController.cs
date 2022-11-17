using Microsoft.AspNetCore.Mvc;
using TeamScores.model;
using TeamScores.services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TeamScores.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController 
    {
        private readonly ITeamService _teamService;

        public TeamsController(ITeamService teamService)
        {
            _teamService = teamService;
        }

        // GET: api/<TeamsController>
        [HttpGet]
        public ActionResult<List<Team>> Get()
        {
            Console.WriteLine("controller");
            return _teamService.getTeams();
        }

        // GET api/<TeamsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TeamsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TeamsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TeamsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
