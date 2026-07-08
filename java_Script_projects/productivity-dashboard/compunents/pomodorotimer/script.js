const munites=document.querySelector(".munites")
const seconds=document.querySelector(".second")
const start=document.querySelector(".start")
const stopit=document.querySelector(".stop")
const reset=document.querySelector(".reset")
const toglebtn=document.querySelector(".toglebtn")

let interval
let munite=25
let second=0
toglebtn.addEventListener("click",function(){
    console.log(toglebtn.textContent=="Break Time")
    if (toglebtn.textContent=="Break Time") {
        toglebtn.textContent="Pomodoro Timer"
        munite=25
        toglebtn.style.backgroundColor="white"
        munites.textContent=munite
        return
    }
munite=5
toglebtn.style.backgroundColor="red"
toglebtn.textContent="Break Time"
 munites.textContent=munite
})

start.addEventListener("click",function(){
    start.disabled=true
    interval=setInterval(function(){
     if (second ==0 ) {
         munite=munite-1
        //  console.log(munite)
         munites.textContent=munite
         seconds.textContent=second
        second=60
     }else if(munite === 0  && second ===0){
        return "timer over"
        clearInterval(interval)
     } 
      second=second-1  
     seconds.textContent=second
     console.log(second)

   },1000)

})

stopit.addEventListener("click",function(){
clearInterval(interval)
    start.disabled=false

})
reset.addEventListener("click", function(){
    start.disabled=false
 munite=25
 second=0;
  munites.textContent=munite
  seconds.textContent="00"
})

// dark mode 
const nav=document.querySelector("nav")
const timer=document.querySelector(".timer")
// const card=document.querySelectorAll(".card")
let mode= localStorage.getItem("mode")||"Dark"

function togalmode(){
if (mode === "Light") {
  document.querySelector("section").style.backgroundColor="white";
  document.querySelector("main").style.backgroundColor="white"
  nav.style.borderBottom="1px solid black"
  nav.style.color="black"
  timer.style.color="black"

//   card.forEach((cd)=>{
//     cd.classList.add("cardlight")
//   })
  // laptoptimenav
//   darkbtn.classList.add("active")
}
}
togalmode()
