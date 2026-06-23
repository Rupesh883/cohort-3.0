const dateinput=document.querySelector(".dateinput")
const calculate=document.querySelector(".calculate")
const yearss=document.querySelector(".year")
const monthss=document.querySelector(".month")
const daydisplay=document.querySelector(".day")


calculate.addEventListener("click",function(){
const [years,monthin, dayin] = dateinput.value.split("-");
const date=new Date()

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

let yearold=year-years
let monthold=month-monthin
let dayold=Math.abs(dayin- day)
console.log(dayold + 31 );

// if(dayold < 0){
//    dayold+=31
//     console.log("yes its negative:")
//     console.log(dayold)
// }
if(monthold < 0 ){
   monthold= monthold + 12
    yearold=yearold-1
}

console.log(day-dayin,dayold )

daydisplay.textContent=dayold
yearss.innerText=yearold
monthss.textContent=monthold

// console.log(day, month, year);
// console.log(dayin, monthin, yearin)
console.log("year:",yearold,"months:",monthold,"days:",dayold)
})

// year: 10 months: 01 days: 2006