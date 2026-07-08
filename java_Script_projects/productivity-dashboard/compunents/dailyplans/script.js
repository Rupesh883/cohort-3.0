const displaytime=document.querySelector(".displaytime")
const list = document.querySelector("ul");

let date=new Date()

displaytime.textContent=date.toDateString()

let listitems= JSON.parse(localStorage.getItem("listitems")) || []

document.querySelectorAll(".dailyplaneinput").forEach((elem)=>{
    let key =elem.dataset.time
   let val= listitems.find((el)=> el.key == key)
   if(val){
    elem.value=val.value
   }

})


list.addEventListener("click",function(e){
    if(e.target.classList.contains("savebtn")){
                let li=e.target.closest("li")
                let input=li.querySelector(".dailyplaneinput")
                let key=input.dataset.time
            let alreadyexist=listitems?listitems.find((el)=> el.key == key):false
            if(alreadyexist){
                alreadyexist.value=input.value
                localStorage.setItem("listitems",JSON.stringify(listitems))
           }else{
            listitems.push({
                key:key,
                value:input.value,
            })
           localStorage.setItem("listitems",JSON.stringify(listitems))
        }
         return
    }else if(e.target.classList.contains("clearbtn")){
        console.log("in clear phase")
         let li=e.target.closest("li")
         let input=li.querySelector(".dailyplaneinput")
         let key=input.dataset.time
         let filteredlist= listitems.filter((fel)=> fel.key !== key)
         listitems=filteredlist
         localStorage.setItem("listitems",JSON.stringify(listitems))
         console.log(filteredlist);
        
        //  localStorage.removeItem(key)
         input.value=""
    }
      
        return
})


// dark light mode togal

const li=document.querySelectorAll("li")
const nav=document.querySelector("nav")
let mode=localStorage.getItem("mode")|| "Dark"
function togalmode(){
if (mode === "Light") {
  list.style.backgroundColor="white";
  nav.style.borderBottom="1px solid black"
  nav.style.color="black"

  document.querySelector("main").style.backgroundColor="white"
  li.forEach((cd)=>{
    cd.classList.add("cardlight")
  })
  

}else{
    document.querySelector("section").style.backgroundColor="";
  document.querySelector("main").style.backgroundColor=""
  li.forEach((cd)=>{
      cd.classList.remove("cardlight")
 })

}
}
togalmode()