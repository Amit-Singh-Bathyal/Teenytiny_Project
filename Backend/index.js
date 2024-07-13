const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const { connectMongoDB } = require("./connect");
const Poll = require('./models/pollschema');

connectMongoDB(process.env.MONGODB ?? "mongodb://localhost:27017/teenytiny").then(() =>
    console.log("Mongodb connected")
);






//routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/createpolls', async (req, res) => {
    const { question, options, creator } = req.body;

    try {
        const newPoll = await Poll.create({ question, options, creator });
        res.status(200).json({ message: 'Poll created successfully', poll: newPoll });
    } catch (error) {
        console.error('Error creating poll:', error);
        res.status(500).json({ message: 'Failed to create poll' });
    }
});



app.post('/vote', async (req, res) => {
 
  const pollId = req.session.pollId;
  const { option } = req.body;

  if (!pollId) {
    return res.status(400).json({ message: "No poll selected" });
  }

  try {
    const poll = await Poll.findById(pollId);
    if (!poll) {
      return res.status(404).json({ message: "Poll not found" });
    }

   
    poll.votes.set(option, (poll.votes.get(option) || 0) + 1);

    await poll.save();
    res.status(200).json({ message: 'Vote recorded', poll });
  } catch (error) {
    console.error('Error recording vote:', error);
    res.status(500).json({ message: 'Failed to record vote' });
  }
});


app.delete('/poll/Id',async(req,res)=>{
const {id}=req.params;
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