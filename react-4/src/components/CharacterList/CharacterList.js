import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import moment from 'moment';
import characters from '../../services/characters';
import config from '../../config/config';
import CharacterListItem from '../CharacterListItem/CharacterListItem';
import styled from 'styled-components';

const Cards = styled.div`
  display: grid;
  grid-template-columns: 200px;
`;

const CardsItem = styled.div`
  margin: 0 auto;
  padding: 10px;
`;

class CharacterList extends Component {
  state = {
    resultSearch: [],
    ts: moment().format()
  };

  componentWillMount() {
    const { ts } = this.state;
    const apikey = config.marvelApi.publicKey;

    const hash = md5(ts + config.marvelApi.privateKey + apikey).toString();

    return characters.getCharacters({ ts, apikey, hash }).then(results => {
      return results.results && this.setState({ resultSearch: results.results });
    });
  }

  render() {
    const { resultSearch } = this.state;
    return (
      <Cards>
        <CardsItem>
          {resultSearch.map(result => (
            <CharacterListItem
              key={result.name}
              name={result.name}
              thumbnail={`${result.thumbnail.path}${'/portrait_fantastic'}.${
                result.thumbnail.extension
              }`}
              description={result.description}
            />
          ))}
        </CardsItem>
      </Cards>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(CharacterList);
