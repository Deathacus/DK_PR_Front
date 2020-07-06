using System;
using System.Collections.Generic;
using DK_PR_Front.Models;
using DK_PR_Front.Neo4jConfig;
using DK_PR_Front.Neo4jControllers;

namespace DK_PR_Front.Services
{
    public class Neo4jService
    {
        Neo4jConfigClass neo4JConfig;
        Neo4jController neo4JController;

        public Neo4jService()
        {
            neo4JConfig = new Neo4jConfigClass("bolt://localhost:7687", "admin", "admin123");
            neo4JController = new Neo4jController();
        }
        public void CreateUser(string username, string password)
        {
            neo4JController.CreateUserController(username, password);
        }

        public List<User> GetUsers()
        {
            return neo4JController.GetUserController();
        }

        public void FollowUser(User[] user)
        {
            User follower = user[0];
            User wantToFollow = user[1];
            neo4JController.FollowersUser(follower, wantToFollow);
        }

        public void UnfollowUser(User[] user)
        {
            User follower = user[0];
            User wantToFollow = user[1];
            neo4JController.UnfollowersUser(follower, wantToFollow);
        }

        public List<User> GetFollowers(string userName)
        {
            return neo4JController.GetFollowers(userName);
        }
    }
}

