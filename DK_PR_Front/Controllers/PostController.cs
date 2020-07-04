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
    public class PostController : ControllerBase
    {
        private readonly PostService _postService;

        public PostController(PostService postService)
        {
            _postService = postService;
        }

        [HttpGet]
        public ActionResult<List<Post>> Get()
        {
            return _postService.Get();
        }

        [HttpGet]
        [Route("{userName}")]
        public ActionResult<Models.Post> GetByUserName(string userName)
        {
            var post = _postService.Get(userName);
            if (post == null) return NotFound();
            else return Ok(post);
        }

        [HttpPost]
        public ActionResult<Post> Create(Post post)
        {
            _postService.Create(post);
            return Ok();
        }
    }
}
