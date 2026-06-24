const main =document.querySelector(".maincontainer")


async function fetchUserData() {
  try {
    // 1. Send the request
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    
    // 2. Check if the HTTP status code is in the 200–299 range
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // 3. Parse the stream response into JSON data
    const data = await response.json();
    console.log(data);
    let freg
      data.meals.forEach((elm) => {

    const viewmorebtn = document.createElement("a");
    viewmorebtn.textContent = "View More";
    viewmorebtn.href = "second.html";

    const carddiv = document.createElement("li");
    carddiv.classList.add("cardSection");

    const img = document.createElement("img");
    img.src = elm.strMealThumb;

    const h3ofname = document.createElement("h3");
    h3ofname.textContent = elm.strMeal;

    const span=document.createElement("span")
        span.textContent="Instructions: "

    const ingredentsdiv = document.createElement("h4");
    ingredentsdiv.textContent =elm.strInstructions.slice(0, 400) + "...";
    ingredentsdiv.prepend(span)
    carddiv.append(img, h3ofname, ingredentsdiv, viewmorebtn);
    main.append(carddiv);
});

    // main.append(freg)
  } catch (error) {
    // 4. Catch network or operational failures
    console.error('Fetch error:', error.message);
  }
}

fetchUserData()

// data.forEach(element => {
//     console.log(element.ingredent1)
// });
