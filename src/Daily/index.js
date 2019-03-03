import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import Container from '../Container';

import { Toolbar, Icon, BottomNavigation } from '../react-native-material-ui';

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class Daily extends Component {
  constructor(props) {
      super(props);

      this.state = { active: 'daily' };
  }
  render() {
      return (
        <Container>
            <Toolbar
                leftElement="arrow-back"
                onLeftElementPress={() => this.props.navigation.navigate('home')}
                centerElement="Daily"
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            </View>
            <BottomNavigation active={this.state.active}>
                <BottomNavigation.Action
                    key="home"
                    icon="home"
                    label="Home"
                    onPress={() => {
                      this.setState({ active: 'home' }),
                      this.props.navigation.navigate('home')
                    }}
                />
                <BottomNavigation.Action
                    key="daily"
                    icon="schedule"
                    label="Daily"
                    onPress={() => {
                      this.setState({ active: 'daily' }),
                      this.props.navigation.navigate('daily')
                    }}
                />
                <BottomNavigation.Action
                    key="goals"
                    icon="timeline"
                    label="Goals"
                    onPress={() => {
                      this.setState({ active: 'goals' }),
                      this.props.navigation.navigate('goals')
                    }}
                />
                <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="Settings"
                    onPress={() => {
                      this.setState({ active: 'settings' }),
                      this.props.navigation.navigate('settings')
                    }}
                />
            </BottomNavigation>
        </Container>
      );
  }
}

Daily.propTypes = propTypes;

export default Daily;
