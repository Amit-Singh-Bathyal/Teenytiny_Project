pragma solidity ^0.8.0;
contract PollCreator {
    struct PollStruct {
        string question;
        string[] options;
        string creator;
        uint256 votecount;
    }
    
event PollCreated(uint256 pollId, string question, string[] options, string creator);
 function createPoll(string memory _question, string[] memory _options) public
}
