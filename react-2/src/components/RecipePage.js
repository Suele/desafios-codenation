import React from "react";
import PropTypes from "prop-types";
import CommentsBlock from "./CommentsBlock";

const RecipePage = ({ recipes, match }) =>
  recipes.results
    .filter(recipe => {
      return recipe.title === match;
    })
    .map(recipe => {
      return (
        <div>
          <img
            className='img-fluid'
            src={recipe.thumbnail}
            alt={recipe.title}
          />
          <div className='card-body'>
            <h5 className='card-title'>{recipe.title}</h5>
            <p className='card-text'>
              <strong>Ingredients: </strong>
              {recipe.ingredients}
            </p>
          </div>
          <CommentsBlock match={match} />
        </div>
      );
    });

RecipePage.propTypes = {
  recipes: PropTypes.object
};

export default RecipePage;
