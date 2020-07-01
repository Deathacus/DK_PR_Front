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
    }
}

