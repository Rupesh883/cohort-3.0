const munites=document.querySelector(".munites")
const seconds=document.querySelector(".second")
const start=document.querySelector(".start")
const stopit=document.querySelector(".stop")
const reset=document.querySelector(".reset")

let interval
let munite=25
let second=0
start.addEventListener("click",function(){
    start.disabled=true
    interval=setInterval(function(){
     if (second ==0 ) {
         munite=munite-1
        //  console.log(munite)
         munites.textContent=munite
         seconds.textContent=second
        second=60
     }else if(munite === 0 ){
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