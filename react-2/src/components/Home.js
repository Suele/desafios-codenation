import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({ recipes = [] }) =>
  recipes.results.map(recipe => (
    <RecipeItem
      title={recipe.title}
      thumbnail={recipe.thumbnail}
      ingredients={recipe.ingredients}
    />
  ));

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
