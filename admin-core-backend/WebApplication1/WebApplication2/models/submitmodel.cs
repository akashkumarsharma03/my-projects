using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApplication2.models
{
    public class submitmodel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public ObjectId _id{ get; set; }

        public string Blogid { get; set; }

        public string BlogCategory { get; set; }

        public List<string> tags { get; set; }

        public string BlogTitle { get; set; }

        public string BlogSummary { get; set; }

        public string BlogContent { get; set; }

        public string Blogdp { get; set; }

    }
}

