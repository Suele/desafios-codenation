import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({ recipes = [], searchString = "" }) => {
  return recipes.map((recipe, i) => {
    <div className='row'>
      <RecipeItem recipes={recipe} searchString={searchString} />
      {console.log((recipes = { recipe }))};
    </div>;
  });
};

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
