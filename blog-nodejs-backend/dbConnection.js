const { MongoClient } = require("mongodb");
const fs = require('fs');

let mongo = fs.readFileSync('private.json');
let db = JSON.parse(mongo);
const connectionString = db.connectionstring

const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db('blogapp');
            console.log('Successfully connected to MongoDB.');

            return callback();
        });
    },

    getDb: function () {
        return dbConnection;
    },
}; 