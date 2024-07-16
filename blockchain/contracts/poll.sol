pragma solidity ^0.8.0;

   
contract Poll {
      struct polldata {
        string question;
        string[] options;
        uint256 pollid
    }
   polldata[] public polls;

    function createPoll(string memory QUESTION, string[] memory OPTIONS) public {
        PollData storage newpoll = polls.push();
        newpoll.question = QUESTION;
        newpoll.options = OPTIONS;
    }
    function vote(uint pollid)


} 
