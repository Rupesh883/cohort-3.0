const rollbutton=document.querySelector(".rollbutton")
const dicecover=document.querySelector(".dicecover")
const diceimage=document.querySelector(".diceimage")
const diceScore=document.querySelector(".diceScore")

  let rollCount=0;
rollbutton.addEventListener("click",function(){
    // clearInterval(interval)
    // clearTimeout(setTime)
let imgurl
const sound=new Audio("./dicesound.mp3")
const dice=Math.floor(Math.random()*6)+1
dicecover.style.top="-25px"
dicecover.classList.toggle('animatedice')

let setTime=setTimeout(()=>{
 dicecover.style.top="-220px"
dicecover.classList.toggle('animatedice')
diceimage.src=imgurl
rollCount=rollCount+1
console.log(rollCount)
addResults(rollCount,imgurl)

},2000)

switch(dice){
   case 1:imgurl="inverted-dice-1.png"
    break;
     case 2:imgurl="inverted-dice-2.png"
    break;
     case 3: imgurl="inverted-dice-3.png"
    break;
     case 4: imgurl="inverted-dice-4.png"
    break;
     case 5: imgurl="inverted-dice-5.png"
    break;
     case 6: imgurl="inverted-dice-6.png"
    break;
    default : return
 }
sound.play()

})

function addResults(Rollnumber,imge){
    const div=document.createElement("div")
    div.classList.add("result")
    const h3=document.createElement("h3")
    h3.textContent="Roll "+Rollnumber
    div.append(h3)
    const image=document.createElement("img")
    image.src=imge;
    div.append(image)
    diceScore.append(div)
}