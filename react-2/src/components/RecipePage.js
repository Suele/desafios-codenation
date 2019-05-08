import React from "react";
import PropTypes from "prop-types";
import CommentsBlock from "./CommentsBlock";
import RecipeItem from "./RecipeItem";

const RecipePage = ({ searchString = "", recipes = [], match }) => {
  return searchString
    ? recipes.results
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
    : recipes.results
        .filter(recipe => {
          return recipe.title === match.params.recipeSlug;
        })
        .map(recipe => {
          return (
            <div className='container mt-2'>
              <div className='row'>
                <RecipeItem
                  key={recipe.title}
                  thumbnail={recipe.thumbnail}
                  title={recipe.title}
                  ingredients={recipe.ingredients}
                />
              </div>
              <CommentsBlock />
            </div>
          );
        });
};

RecipePage.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.object
};

export default RecipePage;
