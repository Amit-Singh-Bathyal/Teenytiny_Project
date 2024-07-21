const express = require('express');
const mongoose = require('mongoose');

const { connectMongoDB } = require("./connect");
const Poll = require('./models/pollschema');



connectMongoDB(process.env.MONGODB ?? "mongodb://localhost:27017/teenytiny").then(() =>
    console.log("Mongodb connected")
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get('/polls', async (req, res) => {
  try {
    const polls = await Poll.find();
    res.json(polls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});






//routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.post('/createpolls', async (req, res) => {
//    const { question, options, creator } = req.body;
//
 //   try {
   //     const newPoll = await Poll.create({ question, options, creator });
    //    res.status(200).json({ message: 'Poll created successfully', poll: newPoll });
 //   } catch (error) {
 //       console.error('Error creating poll:', error);
//        res.status(500).json({ message: 'Failed to create poll' });
//    }
//});

app.get('.poll/:Id',async(req,res)=>{
  const {Id}=req.params.Id;
  try {
    const poll = await Poll.findById(Id);
    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' });
  }
  res.status(200).json(poll);

    
  } catch (error) {
    console.error('Error in fetching:', error);
    res.status(500).json({ message: 'error in fetching poll' });
     
    
  }
  
  
  })






app.delete('/poll/:Id/delete',async(req,res)=>{
const {Id}=req.params.Id;
try {
  const poll = await Poll.findByIdAndDelete(Id);
  if (!poll) {
    return res.status(404).json({ message: 'Poll not found' });
}
  
} catch (error) {
  console.error('Error in deleting:', error);
  res.status(500).json({ message: 'error in deleting poll' });
   
  
}


})




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const express = require("express");
const path = require("path");
const collection = require("./connect");
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(express.static("views"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});
app.post("/signup", async (req, res) => {

    const data = {
        name: req.body.username,
        password: req.body.password
    }
    const existingUser = await collection.findOne({ name: data.name });

    if (existingUser) {
        res.send('User already exists. Try a different username.');
    } else {
        const saltRounds = 10; 
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword;
        const userdata = await collection.insertMany(data);
    console.log(userdata);
    }
});

app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            res.send("Username cannot found");
        }
        
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
            res.send("Incorrect Password");
        }
        else {
            res.render("home");
        }
    }
    catch {
        res.send("wrong Details");
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});