import React, { Component } from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import { getRecipesByName } from "../services/recipes";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      page: 1,
      recipes: []
    };
  }

  componentDidMount(){
    getRecipesByName("", 4)
    .then(results => {
      this.setState({recipes: results})
      console.log("recipes: ", this.state.recipes);
    })
  }

  render() {
    const {recipes} = this.state;

    return (
      <div>
        <div className="row">
        {
        recipes.map(recipe => {
          return(
            <RecipeItem
            key={recipe.title}
            thumbnail={recipe.thumbnail}
            title={recipe.title}
            ingredients={recipe.ingredients}
          />
          );
        })
        }
        </div>
        <div className="d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <button id="prev" className="page-link" href="#">
                  Previous
                </button>
              </li>
              <li className="page-item">
                <button id="next" className="page-link" href="#">
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
