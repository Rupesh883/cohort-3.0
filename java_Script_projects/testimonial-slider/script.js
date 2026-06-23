const details=document.querySelector(".details")
const personname=document.querySelector(".name")
const age=document.querySelector(".age")
const address=document.querySelector(".address")
const profileimaeg=document.querySelector(".profileimaeg")


const persons = [
  {
    img:"profile1.jpg",
    name: "Ahmad Khan",
    age: 28,
    address: "House No. 15, Gulshan Colony, Lahore",
    detail:
      "Ahmad Khan ek private company mein Senior Accountant ke taur par kaam karta hai. Uski zimmedariyon mein financial reports banana, company ke accounts manage karna aur monthly budgeting karna shamil hai."
  },
  {
    img:'profile2.jpeg',
    name: "Sara Ali",
    age: 24,
    address: "Street 8, Model Town, Faisalabad",
    detail:
      "Sara Ali ek secondary school teacher hai jo English aur Social Studies padhati hai. Woh students ki academic growth par khaas tawajjo deti hai aur school ke educational programs mein bhi hissa leti hai."
  },
  {
    img:"profile3.webp",
    name: "Bilal Ahmed",
    age: 32,
    address: "Block C, Satellite Town, Rawalpindi",
    detail:
      "Bilal Ahmed ek Software Developer hai jo web aur mobile applications develop karta hai. Usay JavaScript, React aur Node.js technologies ka tajurba hai."
  },
  {
    img:"profile4.avif",
    name: "Ayesha Noor",
    age: 27,
    address: "House No. 22, Clifton Area, Karachi",
    detail:
      "Ayesha Noor ek Graphic Designer hai jo branding, logo design aur social media marketing materials par kaam karti hai."
  }
];
var count=1
profileimaeg.src=persons[0].img
details.textContent=persons[0].detail,
personname.textContent=persons[0].name,
age.textContent=persons[0].age,
address.textContent=persons[0].address


setInterval(()=>{
    console.log("console loged")
    profileimaeg.src=persons[count].img
details.textContent=persons[count].detail,
personname.textContent=persons[count].name,
age.textContent=persons[count].age,
address.textContent=persons[count].address
if(count == 3){
    count= 0
}else count++
},5000)