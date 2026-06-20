const input=document.querySelector('input');
const button=document.querySelector('.addbtn');
const taskcontainer=document.querySelector('#tasks');


function addTask(){
  if(input.value.trim()==="") return;
  const li= document.createElement('li');
  const span=document.createElement('span');
  span.classList.add('close');
  li.textContent=input.value;
  span.innerHTML='<i class="ri-close-line"></i>';
  li.prepend(span);
  taskcontainer.prepend(li);
   input.value="";
   saveTasks()

}

taskcontainer.addEventListener('click', function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle('checked');
    saveTasks();
  }
  else if(e.target.tagName==="I"){
    e.stopPropagation();
    e.target.parentElement.parentElement.remove();
    saveTasks();
  }
})

button.addEventListener('click', addTask);
document.addEventListener('keydown', function(e){
  if(e.key==="Enter"){
    addTask();
  }
})

function saveTasks(){
  localStorage.setItem("tasks",taskcontainer.innerHTML) 
}

function loadTasks(){
  taskcontainer.innerHTML=localStorage.getItem("tasks") || "";
}
loadTasks();
