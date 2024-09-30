var fruits = [
    {
      name: "Lemon",
      img: "https://bit.ly/2wQwmYG",
      id: 0,
    },
    {
      name: "Lime",
      img: "https://bit.ly/344kBtA",
      id: 1,
    },
    {
      name: "Apple",
      img: "https://bit.ly/2X1v3AJ",
      id: 2,
    },
  ];
  
  var fruitBox = document.querySelector(".fruit-box");
  
  window.addEventListener("load", renderFruit);
  
  // Try It #1:
  function renderFruit() {
    let html = "";
    fruits.forEach((fruit) => {
        html += `
        <section class="fruit">
        <h2>${fruit.name}</h2>
        <img src='${fruit.img}' />
        <button id=${fruit.id}>Eat</button>
      </section>`
      fruitBox.innerHTML = html;
    });
    
}
  
// Try It #2:
 var addFruitButton = document.querySelector('#add-button');

 addFruitButton.addEventListener("click", function() {
   addFruit('Banana', 'https://bit.ly/3bNpVnT')
 });

 function addFruit(name, img) {
   /* add code here */
 }

// Try It #3:
// fruitBox.addEventListener('click', function() {
//   deleteFruit(parseInt(event.target.id));
// });

// function deleteFruit(id) {
//   /* add code here */
// }