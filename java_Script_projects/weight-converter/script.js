const input=document.querySelector("#input")
const weight=document.querySelector(".weight")

input.addEventListener("input",function(){
    console.log(input.value)
    if(input.value == ""){
         input.value=""
        return alert("plese intre a valid number")
       
    } else weight.textContent=Math.floor(input.value*0.453592).toFixed(1)
})