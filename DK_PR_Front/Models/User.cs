    using System;
    using System.Collections.Generic;
    using System.Text;

namespace DK_PR_Front.Models
{
    public class User
    {
        public User(string username, string password)
        {
            Username = username;
            Password = password;
        }
        public string Username { get; set; }
        public string Password { get; set; }

        //public int Id { get; set; }
        //public int eMail { get; set; }
    }
}