namespace TeamScores.dataAccess
{
    public class DatabaseSettings : IDatabaseSettings
    {
        //public string CollectionName { get => throw new NotImplementedException(); set => throw new NotImplementedException(); } 
        //public string DatabaseName { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        //public string ConnectionString { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public string CollectionName { get; set; } = String.Empty;
        public string DatabaseName { get; set; } = String.Empty;
        public string ConnectionString { get; set; } = String.Empty;
    }


}
