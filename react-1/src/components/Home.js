import React from "react";
import PropTypes from "prop-types";
import RecipePage from "./RecipePage";

const Home = ({ recipes = [], searchString = "" }) => {
  return (
    <div className='row'>
      <RecipePage recipes={recipes} searchString={searchString} />
    </div>
  );
};

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
