using Microsoft.AspNetCore.Mvc;
using TeamScore.model;
using TeamScore.services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TeamScore.controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly ITeamService _teamService;

        public TeamController(ITeamService teamService)
        {
           _teamService = teamService;
        }


        // GET: api/<ValuesController>
        [HttpGet]
        public ActionResult<List<Team>> Get()
        {
            Console.WriteLine("controller");
            return _teamService.getTeams();
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public ActionResult<Team> Get(string id)
        {
            var team= _teamService.getTeamById(id);
            if (team == null)
            {
                return NotFound($"Team with ID={id} not found");
            }
            return team;
        }

        // POST api/<ValuesController>
        [HttpPost]
        public ActionResult<Team> Post([FromBody] Team team)
        {
            _teamService.createTeam(team);
            return CreatedAtAction(nameof(Get), new { id = team.id }, team);
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Team team)
        {
            var existingTeam= _teamService.getTeamById(id);
            if(existingTeam == null)
            {
                return NotFound($"Team with ID={id} not found");
            }

            _teamService.updateTeam(id, team);
            return NoContent();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var team= _teamService.getTeamById(id);
            if(team == null)
            {
                return NotFound($"Team with ID={id} not found");
            }
            _teamService.deleteTeam(id);

            return Ok($"Team with ID={id} deleted");

        }
    }
}
