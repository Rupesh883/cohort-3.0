const start=document.querySelector(".start")
const hour=document.querySelector(".hours")
const munite=document.querySelector(".munite")
const second=document.querySelector(".second")
const milisecond=document.querySelector(".milisecond")
const stop=document.querySelector(".stop")
const reset=document.querySelector(".reset")


let hours=0
let munites=0
let seconds=0
let miliseconds=0
let startTime;
let int;
let psedTime=0
start.addEventListener("click",function(){
 start.disabled=true
     
    // if(!startTime)startTime = Date.now();
    startTime = Date.now() - psedTime;
// 170000 - 10000 = 160000

  int=setInterval(() => {
     psedTime = Date.now() - startTime;
     //170000-160000=10000

    //  = Date.now() - startTime; // milliseconds
    // console.log("curently - value:",elapsed)

     seconds = Math.floor(psedTime / 1000);
    minutes = Math.floor(seconds / 60);
     hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;


    let ms =psedTime % 1000
       second.textContent=String(seconds).padStart(2, "0")
       munite.textContent=String(minutes).padStart(2, "0")
       milisecond.textContent=String(Math.floor(ms/10)).padStart(2,"0")
       hour.textContent=String(hours).padStart(2, "0")

}, 10);
})
stop.addEventListener("click",function(){
 start.disabled=false

clearInterval(int)
})
reset.addEventListener("click",function(){
    hour.textContent="00"
    munite.textContent="00"
    second.textContent="00"
    milisecond.textContent="00"
    clearInterval(int)
    psedTime=0
})