"use strict"
let userscore=0;
let computerScore=0;
const userScore_span=document.getElementById("user_score");
const computerScore_span=document.getElementById("computer_score");
const scoreBoard_div=document.querySelector(".score_board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');

 rock_div.addEventListener ("click",function(){
   game("r";)

 })

function getComputerChoice["userchoice"]{
  const Choices=["r" "p" "s"];
  const randomNumber=Math.floor(math.random()*3);
  return Choices[randomNumber];o
}
function convertToWord(letter){
  if( letter==="r")return "Rock";
  if(letter==="p")return "paper";
  if(letter==="s")return "scisscors";
}
 function win(userChoice,computerChoice){
   userscore++;
   userscore_span.innerHTML=userscore;
   computerscore_span.innerHTML=computerscore;
result_p:innerHTML={`${convertToWord(userChoice)} ${user} beats ${ covertToWord(computerChoice)} ${comp}} you won`}
 }
  function loss (userChoice,computerChoice){
  userscore --;
  userscore_span.innerHTML=userscore;
  computerscore_span.innerHTML=computerscore;
result_p:innerHTML={`${convertToWord(userChoice)} ${user} beats ${ covertToWord(computerChoice)} ${comp}} you lose`}
  }
  function draw(userChoice,computerChoice){
  userscore_span.innerHTML=userscore;
  computerscore_span.innerHTML=computerscore;
result_p:innerHTML={`${convertToWord(userChoice)} ${user} beats ${ covertToWord(computerChoice)} ${comp}} draw match`}
  }

  function game(userChoice){
    const computerChoice=getComputerChoice();
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
