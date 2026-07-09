//6db080b40a9648a187a173702260607
// https://api.weatherapi.com/v1/current.json?key=6db080b40a9648a187a173702260607&q=Kathmandu




const locationdisplay=document.querySelector(".location")
const temp=document.querySelector(".temp")
const condition=document.querySelector(".condition")
const bigicon=document.querySelector(".bigicon")
const windvalue=document.querySelector(".windvalue")
const Humidityvalue=document.querySelector(".Humidityvalue")
const Feelsvalue=document.querySelector(".Feelsvalue")
const UVvalue=document.querySelector(".UVvalue")
// uv

navigator.geolocation.getCurrentPosition((position)=>{

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
   fetch(`https://api.weatherapi.com/v1/current.json?key=6db080b40a9648a187a173702260607&q=${lat},${lon}`)
   .then(res => res.json()).then((data)=>{
     console.log(data)
     locationdisplay.textContent=data.location.name
     temp.textContent=data.current.temp_c
     bigicon.src=`https:${data.current.condition.icon}`
     condition.textContent=data.current.condition.text
     windvalue.textContent=`${data.current.wind_kph} km/h`
    Humidityvalue.textContent=`${data.current.humidity} %`
    Feelsvalue.textContent=data.current.feelslike_c
    UVvalue.textContent=`UV ${data.current.uv} `
// condition

   })

})


locationdisplay.addEventListener("click",function(){
  navigator.geolocation.getCurrentPosition((position)=>{

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
   fetch(`https://api.weatherapi.com/v1/current.json?key=6db080b40a9648a187a173702260607&q=${lat},${lon}`)
   .then(res => res.json()).then((data)=>{
     console.log(data)
     locationdisplay.textContent=data.location.name
     temp.textContent=data.current.temp_c
     bigicon.src=`https:${data.current.condition.icon}`
     condition.textContent=data.current.condition.text
     windvalue.textContent=`${data.current.wind_kph} km/h`
    Humidityvalue.textContent=`${data.current.humidity} %`
    Feelsvalue.textContent=data.current.feelslike_c
    UVvalue.textContent=`UV ${data.current.uv} `
// condition

   })

})

})


// dark mode
const nav=document.querySelector("nav")
let mode= localStorage.getItem("mode")||"Dark"

function togalmode(){
if (mode === "Light") {
  document.querySelector("section").style.backgroundColor="white";
  document.querySelector("main").style.backgroundColor="white"
  nav.style.color="black"
  nav.style.borderBottom="1px solid black"

  detailtile.forEach((cd)=>{
    cd.classList.add("detailtilelight")
  })
  
 
}
}
togalmode()
