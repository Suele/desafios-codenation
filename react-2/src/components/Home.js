import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({ recipes, searchString = "" }) => (
  <div className='row'>
    {recipes.results
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
                key={recipe.ingredients}
                thumbnail={recipe.thumbnail}
                title={recipe.title}
                ingredients={recipe.ingredients}
              />
            </div>
          </div>
        );
      })}
  </div>
);

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.object
};

export default Home;
