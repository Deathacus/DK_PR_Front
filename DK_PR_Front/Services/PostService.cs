using MongoDB.Driver;
using DK_PR_Front.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DK_PR_Front.Services
{
    public class PostService
    {
        private readonly IMongoCollection<Post> _post;

        public PostService(IPostDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _post = database.GetCollection<Post>(settings.PostCollectionName);
        }

        public List<Post> Get() => _post.Find(post => true).ToList();

        public Post Get(string userName) => _post.Find<Post>(post => post.UserName == userName).FirstOrDefault();

        //public Recipe Get(int nr)
        //{
        //    return _recipes.Find<Recipe>(recipe => recipe.Nr == nr).FirstOrDefault();
        //}
        //Test Kommentar
    }
}

