import React from "react";
import PropTypes from "prop-types";
import CommentsBlock from "./CommentsBlock";
import RecipeItem from "./RecipeItem";

const RecipePage = ({ searchString = "", recipes = [] }) => {
  return searchString ? (
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
          <div className='container mt-10'>
            <div className='row'>
              <RecipeItem
                key={recipe.title}
                thumbnail={recipe.thumbnail}
                title={recipe.title}
                ingredients={recipe.ingredients}
              />
            </div>
          </div>
        );
      })
  ) : (
    <h1>Não foi possivel encontrar a receita ou ingrediente.</h1>
  );
};
<CommentsBlock />;

RecipePage.propTypes = {
  recipe: PropTypes.object
};

export default RecipePage;
