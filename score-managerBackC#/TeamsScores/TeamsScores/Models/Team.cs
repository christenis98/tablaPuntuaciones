using MongoDB.Bson.Serialization.Attributes;

namespace TeamsScores.Models
{
    [BsonIgnoreExtraElements]
    public class Team
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string id { get; set; }
        [BsonElement("name")]
        public string name { get; set; }
        [BsonElement("scores")]
        public List<Score> scores { get; set; }
        [BsonElement("_class")]
        public string java { get; set; }
    }
}
