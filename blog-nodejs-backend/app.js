const express = require("express")
const cors = require('cors');

const dbo = require('./dbConnection');
const recordRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(recordRoutes);

app.use(function (err, _req, res ,next) {
    console.error(err.stack);
    res.header('Access-Control-Allow-Origin', '*');
    res.status(500).send('Something broke!');
    next();
}); 


dbo.connectToServer(function (err) {
    if (err) {
        console.error(err);
        process.exit();
    }

    // start the Express server
    app.listen(5000, () => {
        console.log(`Server is running on port: 5000`);
    });
});



