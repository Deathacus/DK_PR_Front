    using System;
    using System.Collections.Generic;
    using System.Text;

namespace DK_PR_Front.Models
{
    public class User
    {
        public User() { }
        public User(string username, string password)
        {
            Username = username;
            Password = password;
        }

        //public User(string username, string password, string[] follower)
        //{
        //    Username = username;
        //    Password = password;
        //    Follower = follower;
        //}
        public string Username { get; set; }
        public string Password { get; set; }     

        //public int Id { get; set; }
        //public int eMail { get; set; }
    }
}