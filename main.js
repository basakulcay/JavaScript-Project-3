const getUserChoice=userInput => {
 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) 
 {return userInput.toLowerCase();} 
  else {console.log('Error!');};
}
console.log(getUserChoice('paper'));

const getComputerChoice=() => {
randomNumber=Math.floor(Math.random()*3);
  if (randomNumber===0) {return 'rock';}
  else if (randomNumber===1) {return 'scissors';}
  else if (randomNumber===2) {return 'paper';}
  else {return 'not valid';}
};
console.log(getComputerChoice());

const determineWinner=(userChoice,computerChoice) => {
  if (userChoice===computerChoice) {return 'The game was a tie';}
  else if (userChoice==='rock') {
    if (computerChoice==='paper') {return 'The    computer won!';}
    else {return 'You won';}
  }
    else if (userChoice==='paper') {
    if (computerChoice==='scissors') {return 'The computer won!';}
    else {return 'You won';}
    }
    else if (userChoice==='scissors') {
    if (computerChoice==='rock') {return 'The    computer won!';}
    else {return 'You won';}
  }
  else {return 'Not Valid';}
};


const playGame= () => {
  const userChoice=getUserChoice('scissors');
  const computerChoice=getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);console.log(determineWinner(userChoice, computerChoice));
};

playGame();


