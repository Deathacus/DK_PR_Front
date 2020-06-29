
using Neo4j.Driver;
using System;
using System.Collections.Generic;
using DK_PR_Front.Models;
using DK_PR_Front.Neo4jConfig;

namespace DK_PR_Front.Controllers
{
    public class Neo4jController
    {
        public void CreateUserController(string username, string password)
        {
            string query = "CREATE (a:User {Name: '" + username + "', Password: '" + password + "'})";
            using (var session = Neo4jConfigClass.driver.Session())
            {
                session.Run(query);
            }
        }

        public List<User> GetUserController()
        {
            List<User> users = new List<User>();
            using (var session = Neo4jConfigClass.driver.Session())
            {
                var result = session.Run("MATCH (n) RETURN n.Name AS name, n.Password AS password");
                foreach (var record in result)
                {
                    var username = $"{record["name"].As<String>()}";
                    var password = $"{record["password"].As<String>()}";
                    users.Add(new User(username, password));
                }
                return users;
            }
        }
    }
}
