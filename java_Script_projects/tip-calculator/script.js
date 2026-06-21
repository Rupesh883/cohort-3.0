const billamount=document.querySelector(".billamount")
const tippercenteg=document.querySelector(".tip_percentage")
const calbtn=document.querySelector(".calbtn")
const onlyTip =document.querySelector(".onlyTip")
const tipandbill= document.querySelector(".tipandbill")
// document.querySelector(".")
// document.querySelector(".")

calbtn.addEventListener("click",function(){
if(billamount.value.trim() =="" || tippercenteg.value.trim() =="" ) return
 console.log( (billamount.value/100)*tippercenteg.value)
 onlyTip.textContent=`$ ${(billamount.value/100)*tippercenteg.value}`
 tipandbill.textContent=`$${Number((billamount.value/100)*tippercenteg.value)+Number(billamount.value)}`
})