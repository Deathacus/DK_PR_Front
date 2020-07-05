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
            neo4JConfig = new Neo4jConfigClass("bolt://localhost:11003", "admin", "admin123");
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
            User user1 = user[0];
            User user2 = user[1];
            neo4JController.FollowsUser(user1, user2);
        }

        public void UnfollowUser(User[] user)
        {
            User user1 = user[0];
            User user2 = user[1];
            neo4JController.UnfollowsUser(user1, user2);
        }

        public List<User> GetFollows(User user)
        {
            return neo4JController.GetFollows(user);
        }
    }
}

