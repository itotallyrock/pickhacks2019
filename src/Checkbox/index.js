import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import foodweb from 'foodweb';

import { Toolbar } from '../react-native-material-ui';
import Meal from '../components/Meal';
import Container from '../Container';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 4,
    },
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class CheckboxSpec extends Component {
    constructor(props) {
        super(props);

        this.state = { foodName: 'skittles' };
    }
    render() {
        const foodResults = foodweb.search(this.state.foodName)[0].data;
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Meal"
                />
                <View style={styles.container}>
                    <Meal
                        name={this.state.foodName}
                        timestamp={new Date()}
                        ingredients={[]}
                        nutritionalFacts={foodResults}
                        source="manual"
                    />
                </View>
            </Container>
        );
    }
}

CheckboxSpec.propTypes = propTypes;

export default CheckboxSpec;
