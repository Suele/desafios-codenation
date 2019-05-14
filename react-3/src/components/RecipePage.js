import React, { Component } from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import { getRecipesByName, getRecipesByIngredients } from "../services/recipes";

class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: "",
      recipe: [],
      recipeSelected: []
    };
  }

  componentDidMount() {
    const { title, page, ingredients } = this.state;
    const { match } = this.props;
    const {recipe, recipeSelected} = this.state;

    if (match) {
      getRecipesByName(match, page).then(results => {
        return(
          this.setState({ recipe: results, recipeSelected: results})
          );

        getRecipesByIngredients(recipeSelected, page).then(results =>{
          return(
            console.log("recipeSelected: ", this.state.recipeSelected),
            this.setState({ recipeSelected: results })
            );
        })
      });
    } 
    console.log("selectedRecipe: ", this.state.recipe);
    console.log("recipeSelected: ", this.state.recipeSelected);
  }

  render() {
    const { recipe, recipeSelected } = this.state;

    return (
      <div>
        {recipe.map(selectedRecipe => {
          return (
            <div>
              <img src={selectedRecipe.thumbnail} alt={selectedRecipe.title} />
              <div className="card-body" key={selectedRecipe.thumbnail}>
                <h5 className="card-title">{selectedRecipe.title}</h5>
                <p className="card-text">
                  <strong>Ingredients: </strong>
                  {selectedRecipe.ingredients}
                </p>
                <h5 className="card-title">Similar recipes</h5>
                <div className="row">
                {
                  recipeSelected.map(teste =>{
                    return(
                      <RecipeItem
                        key={teste.title}
                        thumbnail={teste.thumbnail}
                        title={teste.title}
                        ingredients={teste.ingredients}
                      />
                      );
                  })
                }
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
  recipe: PropTypes.array
};

export default RecipePage;
