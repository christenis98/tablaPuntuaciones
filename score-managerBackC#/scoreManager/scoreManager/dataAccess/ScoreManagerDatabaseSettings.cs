namespace scoreManager.dataAccess
{
    public class ScoreManagerDatabaseSettings : IScoreManagerDatabaseSettings
    {
        public string CollectionName { get; set; } = String.Empty;
        public string DatabaseName { get ; set ; } = String.Empty;
        public string ConnectionString { get; set; } = String.Empty;
    }



}
