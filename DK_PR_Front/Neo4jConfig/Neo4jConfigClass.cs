using Neo4j.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace DK_PR_Front.Neo4jConfig
{
    public class Neo4jConfigClass : IDisposable
    {
        public static IDriver driver { get; set; }

        public Neo4jConfigClass(string uri, string username, string password)
        {
            var connection = GraphDatabase.Driver(uri, AuthTokens.Basic(username, password));
            driver = connection;
        }

        public void Dispose()
        {
            driver.Dispose();
        }
    }
}
