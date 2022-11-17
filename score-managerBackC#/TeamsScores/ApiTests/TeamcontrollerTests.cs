using AutoFixture;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestPlatform.CommunicationUtilities;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamsScores.Controllers;
using TeamsScores.Models;
using TeamsScores.Services;

namespace ApiTests
{
    [TestClass]
    public class TeamcontrollerTests
    {
        private Mock<ITeamService> _teamRepoMock;
        private Fixture _fixture;
        private TeamsController _controller;

        public TeamcontrollerTests()
        {
            _fixture = new Fixture();
            _teamRepoMock = new Mock<ITeamService>();

        }

        [TestMethod]
        public async Task Get_Team_ReturnOk()
        {
            var teamList= _fixture.CreateMany<Team>(3).ToList();
            _teamRepoMock.Setup(repo=> repo.Get()).Returns(teamList);
            _controller= new TeamsController(_teamRepoMock.Object); 

            var result= await _controller.Get();
            var obj = result as ObjectResult;

            Assert.AreEqual(200, obj.StatusCode);
        }

        [TestMethod]
        public async Task Get_Team_ThrowException()
        {
            _teamRepoMock.Setup(repo => repo.Get()).Throws(new Exception());
            _controller= new TeamsController(_teamRepoMock.Object);

            var result= await _controller.Get();
            var obj = result as ObjectResult;

            Assert.AreEqual(400, obj.StatusCode);
        }
        [TestMethod]
        public void GetByID_Team_ReturnOK()
        {
            var mockTeam= _fixture.Create<Team>();
            _teamRepoMock.Setup(repo=> repo.Get(It.IsAny<string>())).Returns(mockTeam);
            _controller = new TeamsController(_teamRepoMock.Object);

            var result =  _controller.Get(mockTeam.id);

            Assert.ReferenceEquals(mockTeam, result);
        }
        [TestMethod]
        public void GetById_Team_NotFound()
        {
           
            _controller = new TeamsController(_teamRepoMock.Object);
            var result = _controller.Get("dgfd");

            Assert.IsNull(result.Value);
        }

        [TestMethod]
        public void Post_Team_ReturnTeam()
        {
            var mockTeam = _fixture.Create<Team>();
            _teamRepoMock.Setup(repo=>repo.Create(mockTeam)).Returns(mockTeam);
            _controller = new TeamsController(_teamRepoMock.Object);

            var result = _controller.Post(mockTeam);
       
            Assert.IsInstanceOfType(result, typeof(ActionResult<Team>));
        }
    }
}
