pragma solidity ^0.8.0;

   
contract Poll {
      struct PollData {
        string question;
        string[] options;
    }
   PollData[] public polls;

    function createPoll(string memory QUESTION, string[] memory OPTIONS) public {
        PollData storage newPoll = polls.push();
        newPoll.question = QUESTION;
        newPoll.options = OPTIONS;
    }


}