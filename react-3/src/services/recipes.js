const API_PATH = "http://localhost:3030/api";

const getRecipesByIngredients = (ingredients, page) => {
  return fetch(`${API_PATH}?i=${ingredients}&p=${page}`)
    .then(response => response.json())
    .then(recipes => {
      return recipes.results.map(recipe => {
        //console.log("getRecipesByIngredients: ", recipe)
        return recipe;
      });
    })
    .catch(error => console.log("error: ", error));
};

const getRecipesByName = (title, page) => {
  return fetch(`${API_PATH}?q=${title}&p=${page}`)
    .then(response => response.json())
    .then(recipes => {
      return recipes.results.map(recipe => {
        //console.log("getRecipesByName: ", recipe)
        return recipe;
      });
    })
    .catch(error => console.log("error: ", error));
};

export { getRecipesByIngredients, getRecipesByName };
