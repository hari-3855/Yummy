async function items() {
  try {
    let response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    let data = await response.json();
    //console.log(data);

    let foods = data.categories;

    let container = document.getElementById("container");

    foods.forEach((element) => {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
          <img src ="${element.strCategoryThumb}">
          <h6>________________________</h6>
          
          <h3>${element.strCategory}</h3>
          <p>${element.strCategoryDescription}</p>
         
          `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error(err);
  }
}

let container3 = document.getElementById("container3");

async function search() {
  let query = document.getElementById("searchinput").value.trim();
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  let res = await fetch(url);
  let data = await res.json();
  let noresult = document.getElementById("result");
  noresult.innerHTML = "";
  container3.innerHTML="";

  console.log(data);

    if (!query) {
    alert("Please enter your food name");
    return;
  }


  

  if (!data.meals) {
    alert("Sorry This recipe was not found!!")
    return;
  }

  data.meals.forEach((foods) => {
    let ingredientlist = "";
    for (let i = 1; i <= 20; i++) {
      let ingredient = foods[`strIngredient${i}`];
      let measure = foods[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredientlist += `<li>${ingredient} - ${measure}</li>`;
      }
    }

    let menucontainer = document.createElement("div");
    menucontainer.className = "menu";
  
    menucontainer.innerHTML += `
             <h2>${foods.strMeal}</h2>
            <img src="${foods.strMealThumb}" alt="${foods.strMeal}">
             <h3>Ingredients!!</h3>
            <ul class="ingredients">${ingredientlist}</ul>
            <h3>Instructions</h3>
            <p>${foods.strInstructions}</p>
            <a href="${foods.strYoutube}">Click to view how to Cook!!</a>
           
            `;

    container3.appendChild(menucontainer);
    
  });

}



items();
//search();
