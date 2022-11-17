namespace scoreManager.dataAccess
{
    public interface IScoreManagerDatabaseSettings
    {
        public string CollectionName { get; set; }
        public string DatabaseName { get; set; }
        public string ConnectionString { get; set; }
    }
}
