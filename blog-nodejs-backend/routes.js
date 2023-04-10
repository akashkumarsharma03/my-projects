const express = require('express');
const recordRoutes = express.Router();
const dbo = require('./dbConnection');
const mongoose = require('mongoose')


recordRoutes.route("/blogdata").get(async function (req, res) {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection("blogdata")
        .find({}).limit(50)
        .toArray(function (err, result) {
            if (err) {
                res.status(400).send("Error fetching listings!");
            } else {
                res.json(result);
            }
        });
});



recordRoutes.route("/:id").get(async function (req, res) {
    const dbConnect = dbo.getDb();
    let collection = await dbConnect.collection("blogdata");
    let query = { _id: mongoose.Types.ObjectId(req.params.id) };
    let result = await collection.findOne(query);
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);

});

recordRoutes.route("/blogcomments").get(async function (req, res) {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection("blogcomments")
        .find({}).limit(50)
        .toArray(function (err, result) {
            if (err) {
                res.status(400).send("Error fetching listings!");
            } else {
                res.json(result);
            }
        });
});

recordRoutes.route("/adminpassword").get(async function (req, res) {
    const adminpassword = "akash0326"

    res(adminpassword)
});

// create post
recordRoutes.route("/").post(async (req, res) => {
    let collection = await db.collection("blogdata");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

//update post
recordRoutes.route("/comment/:id").patch( async (req, res) => {
    const query = { _id: ObjectId(req.params.id) };
    const updates = {
        $push: { comments: req.body }
    };

    let collection = await db.collection("posts");
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
});


// Delete post
recordRoutes.route("/:id").delete( async (req, res) => {
    const query = { _id: ObjectId(req.params.id) };

    const collection = db.collection("posts");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
});

//user google authentication
recordRoutes.route("/googlelogin").post(async (req, res, next) => {
    // let collection = await db.collection("blogdata");
    // let newDocument = req.body;
    // newDocument.date = new Date();
    // let result = await collection.insertOne(newDocument);
    // res.send(result).status(204);

   User.findone({username:req.body.username},(err,user)=>{
    if(err){
        next(err);
    }
    if(!user){
        var user = new User(req.body);
        newUser.save((err, save)=>{
            if(err){ 
                next(err);
            }else{
                req.json({success:true, status:'user added sucessfully'})
            }
        })
    }else{
        req.json({success:true, status:'user retrived sucessfully'})
    }
   })
});

module.exports = recordRoutes;
