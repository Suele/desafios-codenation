const API_PATH = "http://localhost:3030/api";

const getRecipesByIngredients = (ingredients, page = 1) => {
  // TODO implementar método
  return fetch(API_PATH)
    .then(response => response.json())
    .then(recipes => {
      return recipes.results
        .filter(recipe => {
          return (
            recipe.ingredients
              .toLowerCase()
              .indexOf(ingredients.toLowerCase()) !== -1
          );
        })
        .map(recipe => {
          console.log("recipe ingredients:", [recipe.ingredients]);
          return [recipe.ingredients];
        });
    });
};
const getRecipesByName = (title, page = 1) => {
  // TODO implementar método

  return fetch(API_PATH)
    .then(response => response.json())
    .then(recipes => {
      return recipes.results
        .filter(recipe => {
          return recipe.title.toLowerCase().indexOf(title.toLowerCase()) !== -1;
        })
        .map(recipe => {
          console.log("recipe title:", [recipe.title]);
          return recipe.title;
        });
      console.log("recipes2:", [recipes.results]);
      console.log("recipes1: ", recipes);
    });
};

getRecipesByIngredients("sugar");
getRecipesByName("Ginger Champagne");

export { getRecipesByIngredients, getRecipesByName };
