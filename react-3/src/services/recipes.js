const API_PATH = "http://localhost:3030/api";

const getRecipesByIngredients = (ingredients, page = 1) => {
  // TODO implementar método
  return fetch(`${API_PATH}?i=${ingredients}&p=${page}`)
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
          console.log("recipe ingredients:", recipe);
          return recipe;
        });
    });
};
const getRecipesByName = (title, page = 1) => {
  // TODO implementar método

  return fetch(`${API_PATH}?q=${title}&p=${page}`)
    .then(response => response.json())
    .then(recipes => {
      return recipes.results
        .filter(recipe => {
          return recipe.title.toLowerCase().indexOf(title.toLowerCase()) !== -1;
        })
        .map(recipe => {
          console.log("recipe title:", recipe);
          return recipe;
        });
    });
};

console.log("teste ingredientes: ", getRecipesByIngredients("e", 1));
console.log("teste ingredientes: ", getRecipesByName("ginger", 1));

export { getRecipesByIngredients, getRecipesByName };
