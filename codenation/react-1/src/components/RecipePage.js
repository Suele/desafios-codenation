import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

// TODO: Você deve verificar se a receita existe
const RecipePage = ({ searchString = "", recipes = [] }) => {
  return !searchString || searchString ? (
    recipes.results
      .filter(recipe => {
        return (
          recipe.title.toLowerCase().indexOf(searchString.toLowerCase()) !==
            -1 ||
          recipe.ingredients
            .toLowerCase()
            .indexOf(searchString.toLowerCase()) !== -1
        );
      })
      .map(recipe => {
        return (
          <div className='col-sm-3 mt-2'>
            <RecipeItem
              key={recipe.title}
              thumbnail={recipe.thumbnail}
              title={recipe.title}
              ingredients={recipe.ingredients}
            />
            {console.log(searchString)};
          </div>
        );
      })
  ) : (
    <h1>Não foi possível encontrar a receita ou ingrediente pesquisado.</h1>
  );
};

RecipePage.propTypes = {
  searchString: PropTypes.string,
  recipe: PropTypes.object
};

export default RecipePage;
