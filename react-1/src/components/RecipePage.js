import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import { slugify } from "../helpers";
import { Route, Link } from "react-router-dom";

// TODO: Você deve verificar se a receita existe
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
    <div>
      <RecipeItem />
    </div>
  );
};

RecipePage.propTypes = {
  recipe: PropTypes.object
};

export default RecipePage;
