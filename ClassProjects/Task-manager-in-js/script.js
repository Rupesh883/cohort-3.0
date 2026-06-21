const taskform = document.querySelector(".taskform")
const addbtn =document.querySelector(".addbtn")
const crosForm=document.querySelector(".cros-form")
const taskaddform=document.querySelector(".taskaddform")
const taskcontainer=document.querySelector(".taskcontainer")
const singletask=document.querySelector("#task")
const singletextarea=document.querySelector("#textarea")
const singledate=document.querySelector(".dateinput")
const singlept=document.querySelector(".pt")
const totaltask=document.querySelector(".totaltask")
const completedtask=document.querySelector(".completedtask")
const pandingtask=document.querySelector(".pandingtask")
const livesearchbox=document.querySelector(".livesearchbox")
const filterwithprioty=document.querySelector("#filterwithprioty")
const darkbtn=document.querySelector(".darbtn")
const darkinnerbtn=document.querySelector(".innerbtn")
// tasks display function
let editindex;
let filtercards=[]
const tasks= JSON.parse(localStorage.getItem("tasks"))|| []
function displayTask(){
taskcontainer.innerHTML=""
totaltask.textContent=tasks.length
let completedtaskcount=0
tasks.forEach((task,index)=>{

       // Main task card
    const taskcard = document.createElement("div");
    taskcard.className = "taskcard";
    taskcard.setAttribute("key",index)
    // Text Content
    const textcontent = document.createElement("div");
    textcontent.className = "textcontent";

    // h2
    const h2 = document.createElement("h2");

  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "Completed";
    if(task.completed === true){
      checkbox.checked = true
      completedtaskcount++
    }

   
    h2.appendChild(checkbox);
    h2.append(task.task);

   
    const p = document.createElement("p");
    p.textContent = task.description;

    // Date and Priority
    const taskdateandprority = document.createElement("div");
    taskdateandprority.className = "taskdateandprority";

    const calendarIcon = document.createElement("i");
    calendarIcon.className = "ri-calendar-todo-fill";

    const flashIcon = document.createElement("i");
    flashIcon.className = "ri-flashlight-fill";

    const prioritySpan = document.createElement("span");
    prioritySpan.className = "proritydisplay";
    prioritySpan.textContent =task.priority;
    if(task.priority=="Low"){
      prioritySpan.style.backgroundColor="#2B3C36"
      prioritySpan.style.color="#22B484"
       taskcard.style.borderLeft="4px solid #22B484"
    }else if(task.priority=="Medium"){
       prioritySpan.style.backgroundColor="#413C2E";
       prioritySpan.style.color= "#C9B23C";
       taskcard.style.borderLeft="4px solid #C9B23C"
    }else if(task.priority=="High"){
      prioritySpan.style.backgroundColor="#40302E";
       prioritySpan.style.color= "#D64334";
        taskcard.style.borderLeft="4px solid #D64334"
    }

    taskdateandprority.append(
        calendarIcon,
          task.date,
        flashIcon,
        " ",
        prioritySpan
    );

    // Append to textcontent
    textcontent.append(h2, p, taskdateandprority);

    // Buttons
    const btns = document.createElement("div");
    btns.className = "btns";

    const star = document.createElement("i");
    star.className = "ri-star-fill";

    const edit = document.createElement("i");
    edit.className = "ri-edit-box-line";

    const del = document.createElement("i");
    del.className = "ri-delete-bin-7-fill";

    btns.append(star, edit, del);

    // Append to taskcard
    taskcard.append(textcontent, btns);

    // Add to body 
    filtercards.push(taskcard)
    taskcontainer.prepend(taskcard);

      // delet btn listerner
    del.addEventListener("click",function(){
         tasks.splice(index,1)
         localStorage.setItem("tasks",JSON.stringify(tasks))
         displayTask()
       })
      //  edit btn listerner
       edit.addEventListener("click",function(){
          taskform.style.display="flex"
          singletask.value=task.task
          singletextarea.value=task.description
          singledate.value=task.date
          singlept.value=task.priority
          editindex=index
       })
      
       //completed checkbox listener
      checkbox.addEventListener('change', (e) => {
          if (e.target.checked) {
                 task.completed=true
                localStorage.setItem("tasks",JSON.stringify(tasks))
                displayTask()
          } else {
            task.completed=false
          
                localStorage.setItem("tasks",JSON.stringify(tasks))
                displayTask()
          }
       });
      //  darkmode 


       completedtask.textContent=completedtaskcount
       pandingtask.textContent=tasks.length - completedtaskcount

     })

}

addbtn.addEventListener("click", function(){
    taskform.style.display="flex"
})
crosForm.addEventListener("click", function(){
    taskform.style.display="none"   
})

taskform.addEventListener("click", function (event) {
    if (event.target === taskform) {
        taskform.style.display = "none";
    }
});
taskaddform.addEventListener("submit",function(e){

  e.preventDefault()
    let obj={
    task:e.target[0].value,
    description:e.target[1].value,
    date:e.target[2].value,
    priority:e.target[3].value,
    completed:false
  }
  if(editindex){
    tasks[editindex]=obj
    localStorage.setItem("tasks",JSON.stringify(tasks))
    displayTask()
  }else{
        tasks.push(obj)
        localStorage.setItem("tasks",JSON.stringify(tasks))
    displayTask()
  }

  
  obj={}
  e.target[0].value="",
  e.target[1].value="",
  e.target[2].value="",
  e.target[3].value=""
})


function filterfun(e){
  filtercards.filter((elem)=>{
    if (e.target.value == "All")
      {elem.classList.remove("hide")
        return
       }else elem.innerText.toLowerCase().includes(e.target.value.toLowerCase())?elem.classList.remove("hide"):elem.classList.add("hide")
   
  })
}

filterwithprioty.addEventListener("change",function(e){
filterfun(e)
})
// live search code 

livesearchbox.addEventListener("input",function(e){
filterfun(e)
})

     darkbtn.addEventListener("click",function(e){
        darkinnerbtn.classList.toggle("togaldarkbtn")
    })
displayTask()

 