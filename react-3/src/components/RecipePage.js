import React, { Component } from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import { getRecipesByName, getRecipesByIngredients } from "../services/recipes";


class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: { thumbnail: "", title: "", ingredients: "" }
    };
  }

  render() {
    const { thumbnail, title, ingredients } = this.state.recipe;
    const {match} = this.props;

    return (
      <div>
        <img src={thumbnail} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {ingredients}
          </p>
          <h5 className="card-title">Similar recipes</h5>
          <div className="row">
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
          </div>
        </div>
        {console.log(match)}
      </div>
    );
  }
}

RecipePage.propTypes = {
  recipes: PropTypes.object
};

export default RecipePage;
