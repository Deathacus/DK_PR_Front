using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DK_PR_Front.Models
{
    [BsonIgnoreExtraElements]

    public class Post
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public ObjectId Id { get; set; }

        [BsonElement("PostId")]
        public int PostId { get; set; }

        [BsonElement("UserName")]
        public string UserName { get; set; }

        [BsonElement("Date")]
        public DateTime Date { get; set; }

        [BsonElement("EmojiName")]
        public string EmojiName { get; set; }

        [BsonElement("PostText")]
        public string PostText { get; set; }


    }
}
