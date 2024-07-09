const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const { connectMongoDB } = require("./connect");
const Poll = require('./models/Poll');

connectMongoDB(process.env.MONGODB ?? "mongodb://localhost:27017/teenytiny").then(() =>
    console.log("Mongodb connected")
);

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

app.post('/vote',async()=>{
  const{ pollId,option}=req.body;
 try {
  const poll=await Poll.findById(pollId);
  if (!poll) {return res.status(404).json({message:"poll not find"}); }
if (!poll.options.includes(option)){
  return res.status(400).json({message:'invalid option'});}
  if(poll.votes.has(option)){
    poll.votes.seet(option,poll.votes.get(option) +1);

  }else{
poll.votes.set(option,1);
}
  await poll.save();

  res.status(200).json({messsage:'vote recorded',poll});
 } 
 catch (error) {
  console.error('Error recording vote :',error);
  res.status(500).json({message:'failed to record vote'});
   
 } 
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});