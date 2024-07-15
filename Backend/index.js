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