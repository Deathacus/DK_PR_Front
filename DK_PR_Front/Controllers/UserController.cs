using DK_PR_Front.Models;
using DK_PR_Front.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DK_PR_Front.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly Neo4jService _neoService;

        public UserController(Neo4jService neoService)
        {
            _neoService = neoService;
        }

        [HttpGet]
        public ActionResult<List<User>> Get()
        {
            return _neoService.GetUsers();
        }

        [HttpPost]
        public ActionResult<User> Create(User user)
        {
            _neoService.CreateUser(user.Username, user.Password);
            return Ok();
        }

         [HttpPost]
        public void followsUser(User user1, User user2)
        {
            _neoService.FollowUser(user1, user2);
        }
        [HttpPost]
        public void unFollowsUser(User user1, User user2)
        {
            _neoService.UnfollowUser(user1, user2);
        }
        [HttpGet]
        public List<User> getFollows(User user)
        {
            return _neoService.GetFollows(user);
        }
    }
}
