import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RecipeItem = ({ title, ingredients, thumbnail}) => (
  <div className='RecipeItem col-sm-3 mt-3 mb-3'>
    <div className='card'>
      <Link to={`/recipe/${title}`}>
        <img
          className='card-img-top img-fluid'
          src={thumbnail || "https://via.placeholder.com/350x260"}
          alt={title}
        />
        <div className='card-body' key={title}>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>
            <strong>Ingredients: </strong>
            {ingredients}
          </p>
        </div>
      </Link>
    </div>
  </div>
);

RecipeItem.propTypes = {
  title: PropTypes.string,
  ingredients: PropTypes.string,
  thumbnail: PropTypes.string,
  searchString: PropTypes.string
};

export default RecipeItem;
