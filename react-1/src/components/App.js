import React, { Component } from "react";
import { Route, withRouter, Link, matchPath } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathName: this.props.location.pathname,
      searchString: ""
    };
  }

  componentWillMount() {
    const { pathName, searchString } = this.state;

    let path = pathName.replace("/", "");

    this.setState({
      searchString: path,
      pathName: path
    });

    console.log("pathName: ", pathName);
    console.log("searchString: ", searchString);
  }

  render() {
    let { searchString, pathName } = this.state;
    const { history } = this.props;

    const { pathname } = this.props.location;
    const match = matchPath(pathname, {
      path: pathname,
      exact: true
    });

    return (
      <div className='App'>
        {console.log("searchString: ", searchString)}
        {console.log("pathName: ", pathName)}
        {/* TODO: Navbar precisa receber a string da URL */}
        <Navbar
          searchString={searchString}
          onchange={pathName =>
            this.setState({ searchString: pathName }, history.push(pathName))
          }
        />
        )}/>
        <div className='container mt-10'>
          {/* TODO: Implementar rotas  */}
          <Route
            exact
            path='/'
            render={() => {
              return (
                <Link to={`recipe/${slugify(searchString.toString())}`}>
                  <Home recipes={recipes} searchString={searchString} />
                </Link>
              );
            }}
          />
          <Route
            exact
            path='/:searchString'
            render={({ match }) => {
              return (
                <Link to={`recipe/${slugify(searchString)}`}>
                  <RecipePage searchString={searchString} recipes={recipes} />
                </Link>
              );
            }}
          />
          <Route
            exact
            path='recipe/:searchString'
            render={({ match }) => {
              return searchString(
                <Link to={`recipe/${slugify(searchString)}`}>
                  <RecipePage searchString={searchString} recipes={recipes} />
                </Link>
              );
            }}
          />
          {console.log(slugify(searchString))}
          {console.log("match: ", match)}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  searchString: PropTypes.string,
  recipe: PropTypes.object
};

export default withRouter(App);
