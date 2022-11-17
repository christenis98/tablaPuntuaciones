using MongoDB.Bson.Serialization.Attributes;

namespace TeamScores.model
{
    public class Team
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string id { get; set; }
        [BsonElement("name")]
        public string name { get; set; }
        [BsonElement("scores")]
        public List<Score> scores { get; set; }
    }
}
