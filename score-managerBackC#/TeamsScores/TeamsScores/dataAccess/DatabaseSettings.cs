﻿namespace TeamsScores.dataAccess
{
    public class DatabaseSettings : IDatabaseSettings
    {
        public string CollectionName { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;
        public string ConnectionString { get; set; } = string.Empty;
    }
}
