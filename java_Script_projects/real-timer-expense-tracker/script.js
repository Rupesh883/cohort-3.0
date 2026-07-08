const ctx = document.getElementById('myChart');
const buttondark=document.querySelector(".buttondark")
const innerbtn=document.querySelector(".innerbtn")
const Addtransactionbtn=document.querySelector(".Addtransactionbtn")
const transitiondiv=document.querySelector(".transitiondiv")
const ricloselargeline=document.querySelector(".ri-close-large-line")
const main= document.querySelector("main")
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

// Transaction
const saveTransaction=document.querySelector(".saveTransaction")
const Transactiontype=document.querySelector("#Transaction-type")
const Description=document.querySelector(".Description")
const amountinput=document.querySelector("#amountinput")
const transactiondate=document.querySelector("#transactiondate")
const Transactioncategory=document.querySelector("#Transactioncategory")
// 
const tbody=document.querySelector("tbody")
const currentbalance=document.querySelector(".currentbalance")
const totalincom=document.querySelector(".totalincom")
const TotalExpense=document.querySelector(".Total-Expense")
const TotalTransactions=document.querySelector(".TotalTransactions")


// type filter
const selecttransactiontype=document.querySelector(".selecttransactiontype")
const searchinput=document.querySelector(".searchinput")
// settings
const Settings=document.querySelector(".Settings")
const Dashbord=document.querySelector(".Dashbord")
const mainsontent=document.querySelector(".mainsontent")
const settingdiv=document.querySelector(".settingdiv")

const usernamesetting=document.querySelector(".usernamesetting")
const currencyinput=document.querySelector(".currencyinput")
const submitChanges=document.querySelector(".submitChanges")
// global variable
let changedid;
let deleteid;
// let user=JSON.parse(localStorage.getItem("user")) ||{}
let data=JSON.parse(localStorage.getItem("transaction")) || []
let totalIncome=0
let totalExpence=0
let user=JSON.parse(localStorage.getItem("user")) ||{}


// setting save
submitChanges.addEventListener("click",function(){
 user.username=usernamesetting.value
  localStorage.setItem("user",JSON.stringify(user)) 
  profilename.textContent=user.username
  Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
})


Settings.addEventListener("click",function(){
  if(localStorage.getItem("darkmode")=="true"){
    
    Settings.classList.add("darkactive")
    Dashbord.classList.remove("darkactive")
    Dashbord.classList.remove("lightactive")

    
    Dashbord.classList.add("darknotactive")
    mainsontent.style.display="none"
      settingdiv.style.display="flex"
      usernamesetting.value=user.username
      currencyinput.value="$"
    return
  }
Settings.classList.add("lightactive")
Dashbord.classList.remove("lightactive")
Dashbord.classList.remove("lightDashbord")

mainsontent.style.display="none"
settingdiv.style.display="flex"
usernamesetting.value=user.username
currencyinput.value="$"

})
Dashbord.addEventListener("click",function(){
  console.log(localStorage.getItem("darkmode"))

  if(localStorage.getItem("darkmode")=="true"){
    Settings.classList.remove("darkactive")
    Dashbord.classList.add("darkactive")
      mainsontent.style.display="flex"
      settingdiv.style.display="none"
      usernamesetting.value=user.username
      currencyinput.value="$"
    return
  }
Settings.classList.remove("lightactive")
Settings.classList.add("lightSettings")
Dashbord.classList.add("lightactive")
mainsontent.style.display="flex"
settingdiv.style.display="none"
usernamesetting.value=user.username
currencyinput.value="$"

})

selecttransactiontype.addEventListener("change",function(){
  printData(selecttransactiontype.value)
})
searchinput.addEventListener("input", function () {
  printData(selecttransactiontype.value, searchinput.value);
});




let myChart;


function chartdisply(ctx,totalIncome,totalExpence){
  totalincom.textContent=totalIncome
TotalExpense.textContent=totalExpence
currentbalance.textContent=totalIncome-totalExpence
TotalTransactions.textContent=data.length
      if (myChart) {
        myChart.data.datasets[0].data = [totalIncome];
        myChart.data.datasets[1].data = [totalExpence];
        myChart.update();
        return;
    }
myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Income vs Expenses'],
        datasets: [
      {
        label: 'Income',
        data: [totalIncome],
        backgroundColor: '#1f6b36',
        categoryPercentage: 0.7,
         barPercentage: 0.8,
          borderRadius: 5
      },
      {
        label: 'Expenses',
        data: [totalExpence],
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
}

// chartdisply(ctx,totalIncom,totalExpence)

function printData(filtervalue = "alltype", search = "") {
  tbody.innerHTML = "";
  totalIncome = 0;
  totalExpence = 0;

  data = JSON.parse(localStorage.getItem("transaction")) || [];

  let filteredData = data.filter((element) => {

    let typeMatch =
      filtervalue === "alltype" ||
      element.transactiontype === filtervalue;

    let searchMatch = Object.values(element)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    return typeMatch && searchMatch;
  });

  filteredData.forEach((element) => {

    let bgcolo = "";
    let colo = "";

    if (element.transactiontype === "Expence") {
      totalExpence += Number(element.amount);
      bgcolo = "#FEE2E2";
      colo = "#A53232";
    } else {
      totalIncome += Number(element.amount);
      bgcolo = "#DCFCE7";
      colo = "#277244";
    }

   const tr = document.createElement("tr");
      // tr.style.backgroundColor = bgcolo;

const tdDate = document.createElement("td");
tdDate.textContent = element.date;
tr.append(tdDate);

const tdDescription = document.createElement("td");
tdDescription.className = "description";
tdDescription.textContent = element.description;
tr.append(tdDescription);

const tdType = document.createElement("td");
tdType.textContent = element.transactioncategory;
tr.append(tdType);

const tdAmount = document.createElement("td");
tdAmount.style.color = colo;
tdAmount.textContent = "$" + Number(element.amount).toFixed(2);
tr.append(tdAmount);

const tdAction = document.createElement("td");
tdAction.className = "debtns";

    const editIcon = document.createElement("i");
    editIcon.className = "ri-edit-line";

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "ri-delete-bin-7-fill";

    editIcon.addEventListener("click",function(){
              transitiondiv.style.display="flex"
              transactiondate.value = new Date().toISOString().split("T")[0];
               Transactiontype.value=element.transactiontype
                amountinput.value=element.amount
                Description.value=element.description
                transactiondate.value=element.date
                Transactioncategory.value=element.transactioncategory
                changedid=element.id
    })
    deleteIcon.addEventListener("click",function(){
         data = data.filter(item => item.id !== element.id);
          localStorage.setItem("transaction", JSON.stringify(data));
          printData();
      
    })

    tdAction.append(editIcon);
    tdAction.append(deleteIcon);

    tr.append(tdAction);

    tbody.append(tr);

  });

  chartdisply(ctx, totalIncome, totalExpence);
}



   printData()
 

document.querySelector(".resetalldata").addEventListener("click",function(){
      localStorage.clear()
      main.style.display="none"
        document.querySelector(".logindiv").style.display="flex"
        location.reload();

})
// console.log(JSON.parse(localStorage.getItem("darkmode")))
console.log(JSON.parse(localStorage.getItem("darkmode")) )


// dark mode functionality
function toggleDarkMode(reloadcall){
// console.log(JSON.parse(localStorage.getItem("darkmode")))
if(reloadcall !== "true"){
  localStorage.setItem("darkmode",JSON.stringify(!JSON.parse(localStorage.getItem("darkmode"))))
}
  innerbtn.classList.toggle("innerbtnTogal")
  document.querySelector(".sidenav").classList.toggle("darkcontainer")
  document.querySelector("#barndname").classList.toggle("whitetext")
  document.querySelector(".Settings").classList.toggle("darknotactive")
  document.querySelector(".Dashbord").classList.toggle("darkactive")
  document.querySelector("nav").classList.toggle("darkcontainer")
  document.querySelector(".mainsontent").classList.toggle("darkmainsontent")
  document.querySelector("#forh1").classList.toggle("whitetext")
  document.querySelectorAll(".card").forEach(card => {
      card.classList.toggle("darkcard");
     });
  document.querySelector("#myChart").classList.toggle("darkcontainer")
  document.querySelector(".chartraper").classList.toggle("darkcontainer")
  document.querySelector(".darkmode").classList.toggle("darkcontainer")
  document.querySelector(".transitionCrad").classList.toggle("darkcontainer")
  document.querySelectorAll("input").forEach(input => {
      input.classList.toggle("darkinputs");
  });
    document.querySelectorAll("select").forEach(input => {
      input.classList.toggle("darkselect");
  });
  document.querySelector(".search").classList.toggle("darksearch")
  document.querySelector(".searchandhistory").classList.toggle("darkcontainer")
  document.querySelector(".settingdiv").classList.toggle("darksettingdiv")
  // document.querySelector(".searchandhistory").classList.toggle("darkcontainer")
  // document.querySelector(".searchandhistory").classList.toggle("darkcontainer")
  // document.querySelector(".searchandhistory").classList.toggle("darkcontainer")
  // document.querySelector(".searchandhistory").classList.toggle("darkcontainer")
  // mainsontent
}

if(JSON.parse(localStorage.getItem("darkmode"))){
  toggleDarkMode("true")
}

buttondark.addEventListener("click", toggleDarkMode)

Addtransactionbtn.addEventListener("click",function(){
   transitiondiv.style.display="flex"
   transactiondate.value = new Date().toISOString().split("T")[0];
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
if(user.username){
   document.querySelector(".logindiv").style.display="none"
  document.querySelector("main").style.display="flex"
  profilename.textContent=user.username
}
register.addEventListener("click",function(){
  if(usernmaeinter.value.trim() =="" || passwordinter.value.trim() == "") return
  
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
 usernmaeinter.value=""
 passwordinter.value=""

 Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Account created sucessfully",
  showConfirmButton: false,
  timer: 1500
});


})
// loginbtn click
login.addEventListener("click",function(){
 let result= registredUser.find((user)=> usernmae.value == user.username ) || ""
 if (result.password == password.value ) {
  document.querySelector(".logindiv").style.display="none"
 document.querySelector("main").style.display="flex"
   user={
    username:usernmae.value
  }
  localStorage.setItem("user",JSON.stringify(user))
  password.value=""
  usernmae.value=""
   Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Login sucessfully",
  showConfirmButton: false,
  timer: 1500
});
  profilename.textContent=result.username

 }else{
Swal.fire("incorect username or password");
 }




})



saveTransaction.addEventListener("click",function(){
  if(changedid){
   let filtered= data.find((e)=> e.id == changedid )
         filtered.transactiontype=Transactiontype.value,
      filtered.description=Description.value,
      filtered.amount=amountinput.value,
      filtered.date=transactiondate.value,
     filtered.transactioncategory=Transactioncategory.value,
      id=changedid

           Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Transaction saved sucessfully",
  showConfirmButton: false,
  timer: 1500
});
      
 Transactiontype.value=""
    amountinput.value=""
    Description.value=""
    transactiondate.value=""
    Transactioncategory.value=""
    transitiondiv.style.display="none"

    localStorage.setItem("transaction",JSON.stringify(data))
    changedid=""
    tbody.innerHTML=""
    printData()
    return
  } 
   data.push({
      transactiontype:Transactiontype.value,
      description:Description.value,
      amount:amountinput.value,
      date:transactiondate.value,
      transactioncategory:Transactioncategory.value,
      id: Date.now()
    })
    // Transactiontype.value="incom"
    amountinput.value=""
    Description.value=""
    transactiondate.value=""
    // Transactioncategory.value="Other"
    transitiondiv.style.display="none"

    localStorage.setItem("transaction",JSON.stringify(data))
    tbody.innerHTML=""
    printData()

     Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Transaction saved sucessfully",
  showConfirmButton: false,
  timer: 1500
});
    
})


document.querySelector(".logoutbtn").addEventListener("click",function(){
  localStorage.removeItem("user")
     document.querySelector(".logindiv").style.display="flex"
main.style.display="none"
})