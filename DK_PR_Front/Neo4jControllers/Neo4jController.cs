
using Neo4j.Driver;
using System;
using System.Collections.Generic;
using DK_PR_Front.Models;
using DK_PR_Front.Neo4jConfig;

namespace DK_PR_Front.Neo4jControllers
{
    public class Neo4jController
    {
        public void CreateUserController(string username, string password)
        {
            string query = "CREATE (a:User {Username: '" + username + "', Password: '" + password + "'})";


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
                var result = session.Run("MATCH (n) RETURN n.Username AS username, n.Password AS password");
                foreach (var record in result)
                {
                    var username = $"{record["username"].As<String>()}";
                    var password = $"{record["password"].As<String>()}";
                    users.Add(new User(username, password));
                }
                return users;
            }
        }

        public void FollowsUser(User user1, User user2)
        {
            List<User> users = new List<User>();
            using (var session = Neo4jConfigClass.driver.Session())
            {
                string query = "MATCH (n:User {Name: '" + user1.Username + "'}), (m:User {Name: '" + user2.Username + "'})  CREATE (n) -[r:Follows]-> (m) RETURN n,m,r";
                var result = session.Run(query);
            }
        }

        public void UnfollowsUser(User user1, User user2)
        {
            List<User> users = new List<User>();
            using (var session = Neo4jConfigClass.driver.Session())
            {
                var result = session.Run("MATCH (n:User {Name: '" + user1.Username + "'}) -[r:Follows]-> (m:User {Name: '" + user2.Username + "'})  DELETE r RETURN n,m,r");
            }
        }

        public List<User> GetFollows(User user)
        {
            List<User> users = new List<User>();
            using (var session = Neo4jConfigClass.driver.Session())
            {

                string query = "MATCH(p { Name: '" + user.Username + "'}) -[r: Follows]->(k) RETURN k.Name AS name, k.Password AS password";
                var result = session.Run(query);
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
