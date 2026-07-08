const goalinputcover=document.querySelector(".goalinputcover")
const goalinput=document.querySelector(".goalinput")
const addgoalsbtn=document.querySelector(".addgoalsbtn") 
const goalitemaddgoal=document.querySelector(".add-goal")
const goalsgrid=document.querySelector(".goals-grid")
const progressbarfill=document.querySelector(".progress-bar-fill")
const completedGoals=document.querySelector(".completedGoals")
const totalGoals=document.querySelector(".totalGoals")

let completedgoal=0
let goals=JSON.parse(localStorage.getItem("goals"))||[]
    goals.forEach(element => {
    if(element.done){
        completedgoal=completedgoal+1
    }
    return
});




function fisrtrenders(){
 goals.forEach((elem)=>{
     if (elem ===[]) return

    // goalinputcover.style.display = "none"
    // alert("Goal Added Successfully")

    const goalText = elem.goal

    const div = document.createElement("div")
    div.classList.add("goal-item")


    const i = document.createElement("i")
      if(elem.done){
                completedgoal=completedgoal+1
                i.classList.add("ri-checkbox-circle-fill")
                div.classList.add("done")
            }else {
                div.classList.remove("done")
                i.classList.add("ri-checkbox-blank-circle-line")
            }

    const span = document.createElement("span")
    span.textContent = goalText

    div.append(i, span)
    goalsgrid.prepend(div)

    // goals.push({
    //     goal: goalText,
    //     done: false
    // })
    // localStorage.setItem("goals", JSON.stringify(goals))
    totalGoals.textContent=goals.length

      
  
    // localStorage.setItem("goals", JSON.stringify(goals))

    div.addEventListener("click", function(){
        const goalObj = goals.find((el) => el.goal === goalText)
        goalObj.done = !goalObj.done
        if(goalObj.done){
            div.classList.add("done")
            i.classList.remove("ri-checkbox-blank-circle-line")
            i.classList.add("ri-checkbox-circle-fill")
        }else {
            i.classList.remove("ri-checkbox-circle-fill")
            i.classList.add("ri-checkbox-blank-circle-line")
             div.classList.remove("done")}


        localStorage.setItem("goals", JSON.stringify(goals))
        updateProgress()
        
    })

 })

updateProgress()
}


fisrtrenders()
totalGoals.textContent=goals.length
completedGoals.textContent=completedgoal

function updateProgress(){
 const totalGoals = goals.length
 const completedGoals = goals.filter(g => g.done).length
 console.log("this is total gole:",totalGoals,"and this is completedgoals:",completedGoals)
 console.log((completedGoals / totalGoals) * 100)
 const percentage = totalGoals === 0 ? 0 : (completedGoals / totalGoals) * 100
 progressbarfill.style.width = `${percentage}%`
 document.querySelector(".progress-text").textContent = `${completedGoals} of ${totalGoals} completed`
}



goalinputcover.addEventListener("click",function(e){
 if (e.target.classList.contains("goalinputcover")) {
     goalinputcover.style.display="none"
 } 
 return
})
goalitemaddgoal.addEventListener("click",function(){
    goalinputcover.style.display="flex"
    goalinput.focus()
})

function goalAdd(){
    if (goalinput.value.trim() == "") return

    goalinputcover.style.display = "none"
    alert("Goal Added Successfully")

    const goalText = goalinput.value

    const div = document.createElement("div")
    div.classList.add("goal-item")

    const i = document.createElement("i")
    i.classList.add("ri-checkbox-blank-circle-line")

    const span = document.createElement("span")
    span.textContent = goalText

    div.append(i, span)
    goalsgrid.prepend(div)

    goals.push({
        goal: goalText,
        done: false
    })
    localStorage.setItem("goals", JSON.stringify(goals))
    totalGoals.textContent=goals.length
     goals.forEach(element => {
            if(element.done){
                completedgoal=completedgoal+1
            }
         return
     });
    
    div.addEventListener("click", function(){
        const goalObj = goals.find((el) => el.goal === goalText)
        goalObj.done = !goalObj.done
        i.classList.toggle("ri-checkbox-blank-circle-line")
        i.classList.toggle("ri-checkbox-circle-fill")

    
        div.classList.toggle("done")
        localStorage.setItem("goals", JSON.stringify(goals))
        updateProgress()
        
    })
      updateProgress()
    goalinput.value = ""
}


goalinputcover.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
       goalAdd()
    }
})
addgoalsbtn.addEventListener("click",goalAdd)



// dark mode 
const nav=document.querySelector("nav")
// const detailtile=document.querySelectorAll(".detail-tile")
const goalitem=document.querySelectorAll(".goal-item")
let mode= localStorage.getItem("mode")||"Dark"

function togalmode(){
if (mode === "Light") {
  document.querySelector("section").style.backgroundColor="white";
  document.querySelector("main").style.backgroundColor="white"
  nav.style.color="black"
  nav.style.borderBottom="1px solid black"
  document.querySelector('.progress-card').classList.add("activeprogress-card")

  goalitem.forEach((cd)=>{
    cd.classList.add("goalitemlight")
  })
 
}
}
togalmode()
