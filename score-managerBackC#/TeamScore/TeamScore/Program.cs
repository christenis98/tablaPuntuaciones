using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Data.Common;
using TeamScore.dataAccess;
using TeamScore.services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<DbConnection>(
    builder.Configuration.GetSection(nameof(DbConnection)));

builder.Services.AddSingleton<IScoreManagerDatabaseSettings>(sp =>
sp.GetRequiredService<IOptions<ScoreManagerDatabaseSettings>>().Value);

builder.Services.AddSingleton<IMongoClient>(s =>
new MongoClient(builder.Configuration.GetValue<string>("DbConnection:ConnectionString")));

builder.Services.AddSingleton<ITeamService>(sp =>
sp.GetRequiredService<IOptions<TeamServiceImpl>>().Value);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
