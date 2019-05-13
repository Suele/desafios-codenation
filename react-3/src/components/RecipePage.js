import React, { Component } from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import { getRecipesByName, getRecipesByIngredients } from "../services/recipes";

class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: []
    };
  }

  componentDidMount() {
    const { page } = this.state;
    const { match } = this.props;

    if (match) {
      getRecipesByName(match, page).then(results => {
        this.setState({ recipe: results });
        console.log("recipes: ", this.state.recipe);
      });
    }
  }

  render() {
    const { recipe } = this.state;

    return (
      <div>
        {recipe.map(selectedRecipe => {
          return (
            <div>
              <img src={selectedRecipe.thumbnail} alt={selectedRecipe.title} />
              <div className='card-body'>
                <h5 className='card-title'>{selectedRecipe.title}</h5>
                <p className='card-text'>
                  <strong>Ingredients: </strong>
                  {selectedRecipe.ingredients}
                </p>
                <h5 className='card-title'>Similar recipes</h5>
                <div className='row'>
                  <RecipeItem />
                  <RecipeItem />
                  <RecipeItem />
                  <RecipeItem />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

RecipePage.propTypes = {
  recipes: PropTypes.array
};

export default RecipePage;
