
let container2 = document.getElementById("container2")

fetch("meal.json")
  .then((response) => response.json())
.then((data) => {

  data.forEach(meal => {
      let area = document.createElement("div");
      area.className = "area";
      area.innerHTML = `
         
         <img src="${meal.strImage}">
         <h3>${meal.strArea}</h3>
      `
      container2.appendChild(area)
      
  });

   
  console.log(data);
})
.catch((err) => console.error(err));
