import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import Container from '../Container';

import { Toolbar, Icon } from '../react-native-material-ui';

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class ImageSearch extends Component {
  constructor(props) {
      super(props);

      this.state = { };
  }
    render() {
        return (
          <View>
            <Text>what the fUck</Text>
          </View>
        );
    }
}

ImageSearch.propTypes = propTypes;

export default ImageSearch;
