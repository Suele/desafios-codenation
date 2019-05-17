import React from "react";
import PropTypes from "prop-types";
import CommentsBlock from "./CommentsBlock";
import RecipeItem from "./RecipeItem";

const RecipePage = ({ recipes, match, searchString }) =>
  recipes
    ? recipes.results
        .filter(recipe => {
          return recipe.title === match.params.recipeSlug;
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
        })
    : recipes.results
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
            <RecipeItem
              key={recipe.title}
              thumbnail={recipe.thumbnail}
              title={recipe.title}
              ingredients={recipe.ingredients}
            />
          );
        }) || (recipes = []);

RecipePage.propTypes = {
  recipes: PropTypes.object
};

export default RecipePage;
