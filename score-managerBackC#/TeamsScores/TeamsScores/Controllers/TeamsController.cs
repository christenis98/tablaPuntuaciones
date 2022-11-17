using Microsoft.AspNetCore.Mvc;
using TeamsScores.Models;
using TeamsScores.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TeamsScores.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {

        private readonly ITeamService _teamService;

        public TeamsController(ITeamService teamService)
        {
            _teamService = teamService;
        }
        // GET: api/<TeamsController>
        [HttpGet]
        //public ActionResult<List<Team>> Get()
        //{
            
        //    return _teamService.Get();
        //}

        public async Task<IActionResult> Get()
        {
            try
            {
                var result = _teamService.Get();
                return StatusCode(200,result);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        // GET api/<TeamsController>/5
        [HttpGet("{id}")]
        public ActionResult<Team> Get(string id)
        {
            var team = _teamService.Get(id);
            if (team == null)
            {
                return NotFound($"Team with ID={id} not found");
            }
            return team;
        }

        // POST api/<TeamsController>
        [HttpPost]
        public ActionResult<Team> Post([FromBody] Team team)
        {
            _teamService.Create(team);
            return CreatedAtAction(nameof(Get), new { id = team.id }, team);
        }

        // PUT api/<TeamsController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Team team)
        {
            var existingTeam = _teamService.Get(id);
            if (existingTeam == null)
            {
                return NotFound($"Team with ID={id} not found");
            }

            _teamService.Update(id, team);
            return NoContent();
        }

        // DELETE api/<TeamsController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var team = _teamService.Get(id);
            if (team == null)
            {
                return NotFound($"Team with ID={id} not found");
            }
            _teamService.Remove(id);

            return Ok($"Team with ID={id} deleted");

        }
    }
}
