const rock=document.querySelector(".rock")
const paper=document.querySelector(".paper")
const scissors=document.querySelector(".scissors")
const gamebtns=document.querySelector(".gamebtns")
const gamechoices=document.querySelector(".gamechoices")
const opunentchoice=document.querySelector(".opunentchoice")
const reset=document.querySelector(".reset")
const scorenumber=document.querySelector(".scorenumber")

let score=0
function game(userin){
    const choice= Math.floor(Math.random()*3)
    let computerResult;
    let uri;
    switch(choice){
          case 0:computerResult="rock",uri="./rock.png"
        break;
          case 1:computerResult="paper",uri="./paper.png"
        break;
          case 2:computerResult="scissors",uri="./scissor.png"
        break;
        default: return
         break;
    }
    // console.log(computerResult,uri)

 const userdiv=document.createElement("div")
 const userimage=document.createElement("img")
 let userurl;
    // div.classList.add("scissors comonbtn opunentchoice")
    userin=="scissors"
  ? (userdiv.classList.add("scissorschoice","comonbtn") ,userurl="./scissor.png")
  : userin=="paper"
  ? (userdiv.classList.add("paperchoice","comonbtn"),userurl="./paper.png")
  : (userdiv.classList.add("rockchoice","comonbtn"),userurl="./rock.png")
//   console.log(userurl)
    userimage.src=userurl
    userdiv.append(userimage)
    gamechoices.append(userdiv)

    // win lose logic
    let result;
if (userin === computerResult) {
    result = "TIE";
} else if (
    (userin === "rock" && computerResult === "scissors") ||
    (userin === "paper" && computerResult === "rock") ||
    (userin === "scissors" && computerResult === "paper")
) {
    result = "YOU WIN";
    score=score+1
} else {
    result = "COMPUTER WIN";
    score=score-1
}

    // middle btns
const playAgainDiv = document.createElement("div");
playAgainDiv.classList.add("playaggain");

const span = document.createElement("span");

span.textContent = result;

const button = document.createElement("button");
button.textContent = "Play Again";
// button listener for play aggain
button.addEventListener("click",function(){
   gamebtns.style.display="flex"
   gamechoices.style.display="none"
   gamechoices.innerHTML=""
})

playAgainDiv.appendChild(span);
playAgainDiv.appendChild(button);

gamechoices.append(playAgainDiv)

// computer 
    const div=document.createElement("div")
    const image=document.createElement("img")
    // div.classList.add("scissors comonbtn opunentchoice")
    computerResult=="scissors"
  ? div.classList.add("scissorschoice" ,"comonbtn")
  : computerResult=="paper"
  ? div.classList.add("paperchoice", "comonbtn")
  : div.classList.add("rockchoice" ,"comonbtn")
    image.src=uri
    div.append(image)
    gamechoices.append(div)


   gamebtns.style.display="none"
   gamechoices.style.display="flex"
   scorenumber.textContent=score

}

reset.addEventListener("click",function(){
     gamebtns.style.display="flex"
   gamechoices.style.display="none"
   gamechoices.innerHTML=""
   score=0
   scorenumber.textContent=score
})





rock.addEventListener("click",function(){game('rock')})
paper.addEventListener("click",function(){game("paper")})
scissors.addEventListener("click",function(){game('scissors')})





// rock paper 
// scissor rock
// paper scissor