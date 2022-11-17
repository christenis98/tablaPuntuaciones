﻿namespace TeamScores.dataAccess
{
    public interface IDatabaseSettings
    {
        public string CollectionName { get; set; }
        public string DatabaseName { get; set; }
        public string ConnectionString { get; set; }
    }
}
