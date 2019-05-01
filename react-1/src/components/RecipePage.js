import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import "../index.css";

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
                title={getHighlightedText(recipe.title, searchString)}
                ingredients={getHighlightedText(
                  recipe.ingredients,
                  searchString
                )}
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
