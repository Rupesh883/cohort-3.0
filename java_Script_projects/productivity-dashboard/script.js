const displaytime=document.querySelector(".displaytime")
const date=document.querySelector(".date")
const greatingText =document.querySelector(".greatingText")
const navvideo=document.querySelector(".navvideo")
const laptoptimenav=document.querySelector(".laptoptimenav")
// const country=document.querySelector(".country")
const province=document.querySelector(".province")
const county=document.querySelector(".county")
const municipality=document.querySelector(".municipality")

// const country=document.querySelector(".country")


let currentdate=new Date()
date.textContent=currentdate.toDateString()
displaytime.textContent=`${currentdate.getHours()}:${currentdate.getMinutes()}`;
let video=false


let timedisplayinterval=setInterval(()=>{
    let now=new Date().toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
});
const [timePart, Ampm] = (now).toString().split(" ");
let hour = parseInt(timePart.split(":")[0]);


 if (Ampm === 'PM' && hour < 12) hour += 12;
if (Ampm === 'AM' && hour === 12) hour = 0;

if (hour >= 5 && hour < 12) {
    greatingText.textContent = "Good Morning 👋";
   if(greatingText.textContent=== "Good Morning 👋" && video)return
    navvideo.src="./assets/compressed-morning.mp4"
    laptoptimenav.style.color="black"
    video=true
} else if (hour >= 12 && hour < 17) {
   greatingText.textContent= "Good Afternoon 👋";
   if(greatingText.textContent=== "Good Afternoon 👋" && video  === true)return
     else{navvideo.src="./assets/compressed-afternoon.mp4"
    //  laptoptimenav.style.color="white"
     video=true
    console.log("re rendering",video)}


} else if (hour >= 5 && hour < 21) {
    greatingText.textContent = "Good Evening 👋"  ;
   if(greatingText.textContent=== "Good Evening 👋" && video === true)return
   else{ navvideo.src="./assets/compressed-eveningg.mp4"
     laptoptimenav.style.color="black"
    video=true
}
}else  {
    greatingText.textContent = "Good Night 👋";
   if(greatingText.textContent=== "Good Night 👋" && video)return
    navvideo.src="./assets/compressed-night.mp4"
    laptoptimenav.style.color="white"
    video=true
}


console.log(hour);
console.log(now)
    displaytime.textContent=now;

},1000)



// function getUserLocation() {
//   // Check if the browser supports Geolocation
//   if (!navigator.geolocation) {
//     console.error("Geolocation is not supported by your browser");
//     return;
//   }

//   const successCallback = (position) => {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//     fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.display_name);
//     // locationdisplayLaptop.textContent=data.address.country + data.address.county + 
//     //   data.address.municipality
//       country.textContent=data.address.country
//       province.textContent=data.address.state
//       county.textContent=data.address.county
//       municipality.textContent=data.address.municipality


//     console.log(data);
//   });
//   };

//   const errorCallback = (error) => {
//     console.error(`Error code: ${error.code} - ${error.message}`);
//   };

//   // Trigger the browser prompt
//   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// }

// getUserLocation();


// darkmode click 
const darkbtncover=document.querySelector(".darkbtncover")
const darkbtn=document.querySelector(".darkbtn")
const card=document.querySelectorAll(".card")
let mode= localStorage.getItem("mode")||"Dark"

function togalmode(){
if (mode === "Light") {
  document.querySelector("section").style.backgroundColor="white";
  document.querySelector("main").style.backgroundColor="white"
  card.forEach((cd)=>{
    cd.classList.add("cardlight")
  })
  // laptoptimenav
  darkbtn.classList.add("active")
}else{
    document.querySelector("section").style.backgroundColor="";
  document.querySelector("main").style.backgroundColor=" #14141F"
  card.forEach((cd)=>{
      cd.classList.remove("cardlight")
 })

}
}
togalmode()


darkbtncover.addEventListener("click",function(){
  darkbtn.classList.toggle("active")
  mode=="Dark"?mode="Light":mode="Dark"
  console.log(mode);
  
  localStorage.setItem("mode",mode)
  mode= localStorage.getItem("mode")
  togalmode()
})

const dalytotalgols=document.querySelector(".dalytotalgols")

let totalgoals=JSON.parse(localStorage.getItem("goals")) ||[]
let totalgoal=totalgoals.length
let completedgoal=0
totalgoals.forEach((el)=>{
if(el.done){
  completedgoal=completedgoal+1
  dalytotalgols.textContent=`${totalgoal} of ${completedgoal} completed`
}
})