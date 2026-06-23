const Celsius=document.querySelector(".Celsius")
const Fahrenheit=document.querySelector(".Fahrenheit")
const Kelvin=document.querySelector(".Kelvin")


Celsius.addEventListener('change', (event) => {
        Fahrenheit.value=((event.target.value * 9 / 5) + 32).toFixed(2)
        const celsiusNum = parseFloat(event.target.value );
        Kelvin.value=(celsiusNum +  273.15).toFixed(2)
});

Fahrenheit.addEventListener('change', (event) => {
    let fahrenheit=event.target.value
    Celsius.value=((fahrenheit - 32) * 5 / 9).toFixed(2)
    const celsiusNum = parseFloat( Celsius.value);
    Kelvin.value=(celsiusNum +  273.15).toFixed(2)
});

Kelvin.addEventListener('change', (event) => {
  Celsius.value= (event.target.value - 273.15).toFixed(2)
  Fahrenheit.value=((Celsius.value * 9 / 5) + 32).toFixed(2)
});
