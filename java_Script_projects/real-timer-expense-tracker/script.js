const ctx = document.getElementById('myChart');
const buttondark=document.querySelector(".buttondark")
const innerbtn=document.querySelector(".innerbtn")
const Addtransactionbtn=document.querySelector(".Addtransactionbtn")
const transitiondiv=document.querySelector(".transitiondiv")
const ricloselargeline=document.querySelector(".ri-close-large-line")
// text content change
const profilename=document.querySelector(".profilename")
// /login logics
const gotoregister=document.querySelector(".gotoregister")
const logincard=document.querySelector(".logincard")
const regisetrcard=document.querySelector(".regisetrcard")
const gotologin=document.querySelector(".gotologin")
const login=document.querySelector(".login")
const usernmae=document.querySelector(".usernmae")
const password=document.querySelector(".password")

// register inputa
const usernmaeinter=document.querySelector(".usernmaeinter")
const passwordinter=document.querySelector(".passwordinter")
const register=document.querySelector(".register")
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Income vs Expenses'],
    datasets: [
      {
        label: 'Income',
        data: [1000000],
        backgroundColor: '#1f6b36',
        categoryPercentage: 0.7,
         barPercentage: 0.8,
          borderRadius: 5
      },
      {
        label: 'Expenses',
        data: [1100000],
        backgroundColor: '#a61d1d',
        categoryPercentage: 0.7,
         barPercentage: 0.8,
          borderRadius: 5
      }
    ]
  },
  options: {
    responsive: true,
  
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true
      }
    }
  }
});

buttondark.addEventListener("click",function(e){
  innerbtn.classList.toggle("innerbtnTogal")
  console.log(e)
})




Addtransactionbtn.addEventListener("click",function(){
  console.log("hay im working")
transitiondiv.style.display="flex"
})
ricloselargeline.addEventListener("click",function(){
transitiondiv.style.display="none"

})
// login logic
gotoregister.addEventListener("click",function(){
 logincard.style.display="none"
 regisetrcard.style.display="flex"

})
gotologin.addEventListener("click",function(){
   logincard.style.display="flex"
 regisetrcard.style.display="none"
})
// regisetr 
let registredUser=JSON.parse(localStorage.getItem("registeredUsers")) ||[]
let user;
register.addEventListener("click",function(){
  if(usernmaeinter.value.trim() =="" || passwordinter.value.trim() == "") return
  console.log(usernmaeinter.value,passwordinter.value)
  
  registredUser=JSON.parse(localStorage.getItem("registeredUsers")) || []
registredUser.push({
    username:usernmaeinter.value,
    password:passwordinter.value
  })
 localStorage.setItem("registeredUsers",JSON.stringify(registredUser)) 
  user={
    username:usernmaeinter.value,
  }
  profilename.textContent=usernmaeinter.value
 localStorage.setItem("user",JSON.stringify(user)) 
 document.querySelector(".logindiv").style.display="none"
 document.querySelector("main").style.display="flex"
})
// loginbtn click
login.addEventListener("click",function(){
 let result= registredUser.find((user)=> usernmae.value== user.username)
 if (result.password == password.value ) {
  document.querySelector(".logindiv").style.display="none"
 document.querySelector("main").style.display="flex"
 }
  console.log(result)
})
