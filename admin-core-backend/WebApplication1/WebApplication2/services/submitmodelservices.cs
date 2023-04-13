using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.models;
using static WebApplication2.models.Class;

namespace WebApplication2.services
{
    public class submitmodelservices
    {
        private readonly IMongoCollection<submitmodel> _submissions;

        public submitmodelservices(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _submissions = database.GetCollection<submitmodel>("blogdata");
        }

        public submitmodel Create(submitmodel submission)
        {
            _submissions.InsertOne(submission);
            return submission;
        }

        public IList<submitmodel> Get() =>
            _submissions.Find(sub => true).ToList();

        public async Task<List<submitmodel>> GetAsync() => await _submissions.Find(_ => true).ToListAsync();

        //public submitmodel Find(string id) =>
        //    _submissions.Find(sub => sub.Id == id).SingleOrDefault();

        //public void Update(submitmodel submission) =>
        //    _submissions.ReplaceOne(sub => sub.Id == submission.Id, submission);

        //public void Delete(string id) =>
        //    _submissions.DeleteOne(sub => sub.Id == id);
    }
}
