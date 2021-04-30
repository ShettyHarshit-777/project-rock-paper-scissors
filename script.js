let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user_score");
const computerScore_span=document.getElementById("computer_score");
const scoreBoard_div=document.querySelector(".score_board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');

function getComputerChoice () {
  const Choices=['r','p','s'];
  const randomNumber=Math.floor(math.random() *3);
  return Choices[randomNumber];
}
console.log
function convertToWord(letter){
  if( letter==="r")return "Rock";
  if(letter==="p")return "paper";
  return "scissors";
}
 function win(userChoice,computerChoice)
 {
   userScore++;
   userScore_span.innerHTML=userScore;
   computerScore_span.innerHTML=computerScore;
   result_p.innerHTML=`${convertToWord(userChoice)} (user) beats ${ convertToWord(computerChoice)} (comp). you won`};
 
  function loss (userChoice,computerChoice){
  userScore --;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
result_p.innerHTML=`${convertToWord(userChoice)} (user) beats ${ convertToWord(computerChoice)} (comp). you lose`}
  
  function draw(userChoice,computerChoice){
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
result_p.innerHTML=`${convertToWord(userChoice)}(user)  beats ${ convertToWord(computerChoice)} (comp). draw match`}
  

  function game(userChoice) {
let computerChoice=getComputerChoice();
switch(userChoice=computerChoice){
case "rs":
case "pr":
case "sp":
win (userChoice,computerChoice);
break;
case "rp":
case "ps":
case "sr":
loss (userChoice,computerChoice);
break;
case "rr":
case "pp":
case "ss":
draw (userChoice,computerChoice);
break; 
} 
  }
 function main() 
 {rock_div.addEventListener('click',function(){
     game("r");
   })
   paper_div.addEventListener('click',function(){
    game("p");
  })
  scissors_div.addEventListener('click',function(){
    game("s");
  })
}

