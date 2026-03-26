let ingredients = [];

function addItem(article) {
  ingredients.push(article);
  console.log(`${article} added to the grocery list.`);
}

function removeItem(article) {
  console.log(ingredients);
  const index = ingredients.indexOf(article);

  if (index === -1) {
    console.log(`${article} is not in the grocery list.`);
  } else {
    ingredients.splice(index, 1);
    console.log(`${article} removed from the grocery list.`);
  }
}

function viewList() {
  if (ingredients.length === 0) {
    console.log("The grocery list is empty.");
  } else {
    console.log("Grocery List:");
    ingredients.forEach((articulo, indice) => {
      console.log(`${indice + 1}. ${articulo}`);
    });
  }
}
viewList();
addItem("Milk");
addItem("Bread");
addItem("Eggs");
viewList();
removeItem("Bread");
viewList();
removeItem("Cheese");
