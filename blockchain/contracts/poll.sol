pragma solidity ^0.8.0;

   
contract Poll {
    struct polldata {
        string question;
        string[] options;
        uint256 pollid;
        uint256[] votes;
    }
    polldata[] public polls;
    uint256 newpollid;


  mapping(uint256 => mapping(uint256 => uint256)) public voteCounts;




    function createPoll(string memory QUESTION, string[] memory OPTIONS) public {
        pollid=newpollid;
        newpollid++;

         polldata storage newpoll = polls.push();
        newpoll.question = QUESTION;
        newpoll.options = OPTIONS;
        newpoll.pollid=newpollid
    }
   
    function vote(uint256 pollId, uint256 optionIndex) public {
    
        voteCounts[pollId][optionIndex]++;
    }


}