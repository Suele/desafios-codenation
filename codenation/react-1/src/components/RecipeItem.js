import React from "react";

const RecipeItem = ({ title, thumbnail, ingredients }) => (
  <div className='card-deck recipeItem'>
    <div className='card' key={title}>
      <img className='card-img-top' src={thumbnail} alt={title} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>
          <strong>Ingredients: </strong>
          {ingredients}
        </p>
      </div>
    </div>
  </div>
);

export default RecipeItem;
