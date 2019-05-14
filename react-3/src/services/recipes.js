const API_PATH = "http://localhost:3030/api";

const getRecipesByIngredients = (ingredients, page = 1) => {

  return fetch(`${API_PATH}?i=${ingredients}&p=${page}`)
    .then(response => response.json())
    .then(recipes => {
      return recipes.results
        .map(recipe => {
            //console.log("getRecipesByIngredients: ", recipe)
            return recipe;
        })
    });
};

const getRecipesByName = (title, page = 1) => {

  return fetch(`${API_PATH}?q=${title}&p=${page}`)
    .then(response => response.json())
    .then(recipes => {
      return recipes.results
        .map(recipe => {
          //console.log("getRecipesByName: ", recipe)
          return recipe;
        })
    });
};

export { getRecipesByIngredients, getRecipesByName };