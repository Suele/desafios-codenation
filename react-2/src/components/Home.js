import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({ recipes }) => (
  <div className='row'>
    {recipes
      ? recipes.results.map(recipe => {
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
        })
      : (recipes = [])}
  </div>
);

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.object
};

export default Home;
