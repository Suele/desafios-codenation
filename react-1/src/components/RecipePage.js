import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import { slugify } from "../helpers";

const getHighlightedText = (searchedText, higlight = "") => {
  if (higlight.length > 0) {
    const parts = searchedText.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === higlight.toLowerCase() ? (
        <mark key={i}>{part}</mark>
      ) : (
        part
      )
    );
  }
  return searchedText;
};

const RecipePage = ({ searchString = "", recipes = [], match }) => {
  if (!recipes.results) return null;
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
          console.log("ola", slugify(recipe.title));
          return slugify(recipe.title) === match;
        })
        .map(recipe => {
          return (
            <div className='container mt-2'>
              <div className='row'>
                <RecipeItem
                  key={recipe.title}
                  thumbnail={recipe.thumbnail}
                  title={getHighlightedText(recipe.title, searchString)}
                  ingredients={getHighlightedText(
                    recipe.ingredients,
                    searchString
                  )}
                />
              </div>
            </div>
          );
        });
};

RecipePage.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.object
};

export default RecipePage;
