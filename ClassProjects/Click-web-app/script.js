const startbtn=document.querySelector(".Start-btn")
const gamebox=document.querySelector(".gamebox")
const time=document.querySelector('.time')
const score=document.querySelector('.score')
const scorebord=document.querySelector(".scorebord")
const scoredisplay=document.querySelector('.scoredisplay')

let interval;


 const div=document.createElement("div")
  div.classList.add("div")
  gamebox.append(div)
   const aud=new Audio("./click.mp3")
   const aud2=new Audio("./click2.mp3")
   const aud3=new Audio("./error.mp3")
   const popup=new Audio('./popup.mp3')
  //click function 
  function click(){
      aud.play()
      clearInterval(interval)
      time.innerText=0
      score.innerText=0
      startbtn.disabled = true;
      startbtn.style.color="rgba(186, 183, 183, 0.553)"
      const divwidth=div.offsetWidth
      const divheight=div.offsetHeight
      const gamewidth=gamebox.clientWidth -divwidth
      const gameheight=gamebox.clientHeight- divheight

    
    // console.log("clicked",px,py)
    let timer=1
    interval =setInterval(function(){
        popup.play()
        let r=Math.random()*255
        let g=Math.random()*255
        let b=Math.random()*255

        const px=Math.floor(Math.random()*gamewidth)
        const py=Math.floor(Math.random()*gameheight)
        div.style.backgroundColor=`rgb(${r},${g},${b})`
        div.style.top=`${py}px`
        div.style.left=`${px}px`
        time.innerText= timer

       timer=timer+1
    },1000)

    setTimeout(function(){
        clearInterval(interval)
        startbtn.disabled = false;
        startbtn.style.color="white"
        scorebord.style.display="flex"
        scoredisplay.innerText=score.innerText
        setTimeout(function(){
                scorebord.style.display="none"
               clearInterval(interval)
                time.innerText=0
                score.innerText=0
        },3000)
    },10000)
}
startbtn.addEventListener("click",click)

div.addEventListener("click",function(){
    
    if (score.innerText == 10) {
        aud3.play()
        return}
    score.innerText=Number(score.innerText)+1
    aud2.play()
})