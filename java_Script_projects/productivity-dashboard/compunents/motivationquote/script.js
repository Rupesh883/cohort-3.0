const motivationtext=document.querySelector(".motivationtext")
const bookauthor=document.querySelector(".bookauthor")
const nav=document.querySelector("nav")
const cradmotivation=document.querySelector(".cradmotivation")
const url="https://dummyjson.com/quotes?limit=100"

async function fetchanddisplay(){
    let rendomnumber=Math.floor(Math.random()*100)
        fetch("https://dummyjson.com/quotes?limit=100")
        .then(res => res.json())
        .then(data => {
            motivationtext.textContent=(data.quotes[rendomnumber].quote)
           bookauthor.textContent=data.quotes[rendomnumber].author
        })
       .catch(err => console.error(err));
}
fetchanddisplay()


// darkmode toggle
let mode=localStorage.getItem("mode")||"Dark"
function togalmode(){
if (mode === "Light") {
motivationtext.style.backgroundColor="white";
motivationtext.style.color="black"
document.querySelector("main").style.backgroundColor="white"
nav.style.color="black"
// nav.style.boxShadow
nav.style.borderBottom="1px solid black"
cradmotivation.style.backgroundColor="white"
cradmotivation.style.color="black"

cradmotivation.style.boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
 
  card.forEach((cd)=>{
    cd.classList.add("cardlight")
  })
  // laptoptimenav
  darkbtn.classList.add("active")
}else return
}
togalmode()
