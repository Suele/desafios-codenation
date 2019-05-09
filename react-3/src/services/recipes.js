const API_PATH = "http://localhost:3030/api";

const getRecipesByIngredients = (ingredients, page = 1) => {
  // TODO implementar método
  return [];
};
const getRecipesByName = title => {
  // TODO implementar método

  fetch(API_PATH)
    .then(response => response.json())
    .then(recipes => {
      recipes.results
        .filter(recipe => {
          return recipe.title.toLowerCase().indexOf(title.toLowerCase()) !== -1;
        })
        .map(recipe => {
          console.log("recipe:", [recipe.title]);
          return [recipe.title];
        });
      console.log("recipes1: ", recipes);
      console.log("recipes2:", [recipes.results]);
    });
};

getRecipesByName("Ginger Champagne");

export { getRecipesByIngredients, getRecipesByName };
