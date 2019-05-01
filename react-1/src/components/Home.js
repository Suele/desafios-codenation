import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({ recipes = [] }) =>
  recipes.results.map(recipe => (
    <div className='container'>
      <RecipeItem
        title={recipe.title}
        thumbnail={recipe.thumbnail}
        ingredients={recipe.ingredients}
      />
    </div>
  ));
Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
