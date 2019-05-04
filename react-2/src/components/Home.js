import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({ recipes = [] }) => {
  if (!recipes.results) return null;
  return recipes.results.map(recipe => (
    <RecipeItem
      key={recipe.title}
      title={recipe.title}
      thumbnail={recipe.thumbnail}
      ingredients={recipe.ingredients}
    />
  ));
};

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.object
};

export default Home;
