// const gameNumber=document.querySelector(".gamenum")
// const targetval = document.querySelector(".targetval")
// const scoreval=document.querySelector(".scoreval")
// const timer=document.querySelector(".timer")
// const gameover=document.querySelector("#gameover")
// const playbtn=document.querySelector(".playbtn")
// const gameoverdisplay=document.querySelector('.gameoverdisplay')
// const gmoverscoreval=document.querySelector(".gmoverscoreval")
// const gamestartdisplay= document.querySelector('.gamestartdisplay')

// const parenth=gameNumber.clientHeight 
// const parentw=gameNumber.clientWidth 

// const colum=Math.floor(parenth/60)
// const row=Math.floor(parentw/60)

// let boxcount=Math.floor(colum*row)

// // rendom target generating
// // global veribales
// let prevHi=0
// let gameovertime;
// let gametimeout;
// let total_target=0
// let Target;


// function createboxs(){
//   total_target = 0;
//   Target=Math.floor(Math.random()*11)
//   targetval.textContent=Target
// const frag=document.createDocumentFragment()

// for(let i=0 ;i < boxcount; i++){
// const box =document.createElement("button")
// box.classList.add("btndiv")
// let boxmumber=Math.floor(Math.random()*11)
// box.textContent=boxmumber
// frag.append(box)

// if(boxmumber == Target){
//   total_target+=1
// }}
// gameNumber.append(frag)

// }

// function scorecount(e){
//   if(!e.target.classList.contains("btndiv")) return;
//   console.log("total target count",total_target,"scorevalur",scoreval.innerText)
//   if(scoreval.innerText == total_target -1){
//     scoreval.innerText=Number(scoreval.innerText)+1
//     console.log(total_target)
//     gameNumber.innerHTML=""
//     createboxs()
//     return
//   }else if(e.target.innerText == Target){
//     scoreval.innerText=Number(scoreval.innerText)+1
//     e.target.disabled = true;
//    }
   
// }



// let totalSeconds=30;
// function updateTime() {
//     totalSeconds--;

//     // Calculate hours, minutes, and seconds
 
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     // Format with leading zeros using padStart
 
//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(seconds).padStart(2, '0');

//     // Render the layout string to the UI
//      timer.innerText = `${formattedMinutes}:${formattedSeconds}`;
// }

// function startGameTimer(){

//     clearInterval(gameovertime);
//     clearTimeout(gametimeout);


//     gameovertime = setInterval(updateTime,1000);

//     gametimeout = setTimeout(()=>{
//         clearInterval(gameovertime);
//         gameoverdisplay.style.display="flex";
//         gmoverscoreval.innerText = scoreval.innerText;
//         if ( scoreval.innerText > prevHi ) {
//              prevHi=scoreval.innerText
//         }
//     },30000);
// }


// gameover.addEventListener("click",function(){
// gameoverdisplay.style.display="none"
// gameNumber.innerHTML=""
// scoreval.innerText=0
// timer.innerText="00:00"
// console.log(timer)
// total_target=0
// totalSeconds=0
// createboxs();
// startGameTimer();

// })

// playbtn.addEventListener("click",function(){
//   gamestartdisplay.style.display="none"
//   createboxs()
//   startGameTimer()
// })

// gameNumber.addEventListener("click",scorecount)


function list(w) {

  if (w.length === 0) {
    return '';
  }

  if (w.length === 1) {
    return words[0];
  }

  let wordsExLast = w.slice(0, w.length - 1);
  let lastWord = w[w.length - 1];
  return wordsExLast.join(', ') + ' and ' + lastWord;
}


console.log(list(['Sex', 'Drugs', 'Rock', 'Roll']))