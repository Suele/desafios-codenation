import React from 'react';
import { connect } from 'react-redux';
import CharacterListItem from '../CharacterListItem/CharacterListItem';

const CharacterList = props => (
  <div>
    <h1> cards </h1>
    <CharacterListItem />
  </div>
);

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(CharacterList);
