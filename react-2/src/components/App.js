import React, { Component } from "react";
import { Route, withRouter, Link, matchPath } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import Login from "./Login";
import User from "./User";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";
import PropTypes from "prop-types";

const HomeRoute = ({ match, searchString }) => (
  <Home match={match} recipes={recipes} searchString={searchString} />
);
const LoginRoute = () => <Login />;
const ProfileRoute = () => <User />;
const RecipePageRoute = () => <RecipePage recipes={recipes[0]} />;

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
    console.log("pathname: ", pathname);

    return (
      <div className='App'>
        <Navbar
          searchString={searchString}
          onchange={pathName =>
            this.setState({ searchString: pathName }, history.push(pathName))
          }
        />

        <div className='container mt-10'>
          <Route
            exact
            path='/:searchString'
            render={() => {
              return (
                <Link to={`/recipe/${slugify(searchString)}`}>
                  <RecipePage searchString={searchString} recipes={recipes} />
                </Link>
              );
            }}
          />
          <Route
            exact
            path='/recipe/:searchString'
            render={() => {
              return (
                <Link to={`/recipe/${slugify(searchString)}`}>
                  <RecipePage searchString={searchString} recipes={recipes} />
                </Link>
              );
            }}
          />

          <Route
            exact
            path='/'
            render={() => {
              return (
                <HomeRoute
                  match={`${match.path}`}
                  searchString={searchString}
                />
              );
            }}
          />

          <Route path='/recipe/recipe' component={RecipePageRoute} />
          <Route path='/user/login' component={LoginRoute} />
          <Route path='/user/profile' component={ProfileRoute} />

          {console.log("{match.path}", `${match.path}`)}
          {console.log(`recipe/${slugify(searchString)}`)}
          {console.log("match: ", match)}
          {console.log("path >>>: ", match.path)}
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
