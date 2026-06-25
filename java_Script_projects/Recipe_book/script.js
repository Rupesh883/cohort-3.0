const main =document.querySelector(".maincontainer")


async function fetchUserData() {
  try {
    //  Send the request
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

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
    console.error('Fetch error:', error.message);
  }
}

fetchUserData()

