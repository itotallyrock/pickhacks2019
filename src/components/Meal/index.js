import { View, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Icon, Card, ListItem, Divider } from '../../react-native-material-ui';

const defaultProps = {
    image: {
        uri: '',
    },
    onLongPress: undefined,
    nutritionalFacts: {
        ndb: 0,
        title: 'Unknown Food',
        water: 0,
        kcal: 0,
        protein: 0,
        lipidTotal: 0,
        ash: 0,
        carb: 0,
        fiberTotalDietary: 0,
        sugarTotal: 0,
        elCa: 0,
        elFe: 0,
        elMg: 0,
        elP: 0,
        elK: 0,
        elNa: 0,
        elZn: 0,
        elCu: 0,
        elMa: 0,
        elSe: 0,
        vitaminC: 0,
        thiamin: 0,
        riboflavin: 0,
        niacin: 0,
        pantothenicAcid: 0,
        vitaminB6: 0,
        folateTotal: 0,
        folicAcid: 0,
        foodFolate: 0,
        dietaryFolate: 0,
        cholineTotal: 0,
        vitaminB12: 0,
        vitaminAIU: 0,
        vitaminA: 0,
        retinol: 0,
        alphaCarotene: 0,
        betaCarotene: 0,
        betaCryptoxanthin: 0,
        lycopene: 0,
        luteinZeazanthin: 0,
        vitaminE: 0,
        vitaminD: 0,
        vitaminDIU: 0,
        vitaminK: 0,
        saturatedFat: 0,
        monounsaturatedFat: 0,
        polyunsaturatedFat: 0,
        cholesterol: 0,
        primaryWeight: 0,
        primaryWeightDesc: 'Unknown Serving Size',
        secondaryWeight: 0,
        secondaryWeightDesc: 'Unknown Serving Size',
        refuse: 0,
    },
};

const propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
        uri: PropTypes.string,
    }),
    source: PropTypes.oneOf(['camera', 'manual', 'barcode']).isRequired,
    onLongPress: PropTypes.func,
    timestamp: PropTypes.instanceOf(Date).isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        servingSize: PropTypes.number.isRequired,
    })).isRequired,
    nutritionalFacts: PropTypes.shape({
        ndb: PropTypes.string,
        title: PropTypes.string,
        water: PropTypes.number,
        kcal: PropTypes.number,
        protein: PropTypes.number,
        lipidTotal: PropTypes.number,
        ash: PropTypes.number,
        carb: PropTypes.number,
        fiberTotalDietary: PropTypes.number,
        sugarTotal: PropTypes.number,
        elCa: PropTypes.number,
        elFe: PropTypes.number,
        elMg: PropTypes.number,
        elP: PropTypes.number,
        elK: PropTypes.number,
        elNa: PropTypes.number,
        elZn: PropTypes.number,
        elCu: PropTypes.number,
        elMa: PropTypes.number,
        elSe: PropTypes.number,
        vitaminC: PropTypes.number,
        thiamin: PropTypes.number,
        riboflavin: PropTypes.number,
        niacin: PropTypes.number,
        pantothenicAcid: PropTypes.number,
        vitaminB6: PropTypes.number,
        folateTotal: PropTypes.number,
        folicAcid: PropTypes.number,
        foodFolate: PropTypes.number,
        dietaryFolate: PropTypes.number,
        cholineTotal: PropTypes.number,
        vitaminB12: PropTypes.number,
        vitaminAIU: PropTypes.number,
        vitaminA: PropTypes.number,
        retinol: PropTypes.number,
        alphaCarotene: PropTypes.number,
        betaCarotene: PropTypes.number,
        betaCryptoxanthin: PropTypes.number,
        lycopene: PropTypes.number,
        luteinZeazanthin: PropTypes.number,
        vitaminE: PropTypes.number,
        vitaminD: PropTypes.number,
        vitaminDIU: PropTypes.number,
        vitaminK: PropTypes.number,
        saturatedFat: PropTypes.number,
        monounsaturatedFat: PropTypes.number,
        polyunsaturatedFat: PropTypes.number,
        cholesterol: PropTypes.number,
        primaryWeight: PropTypes.number,
        primaryWeightDesc: PropTypes.string,
        secondaryWeight: PropTypes.number,
        secondaryWeightDesc: PropTypes.string,
        refuse: PropTypes.number,
    }),
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    expandedContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    calories: {
        paddingRight: 16,
        fontWeight: 'bold',
    },
    nutrientColLeft: {},
    nutrientColRight: {
        alignContent: 'right',
    },
});

class Meal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        };
    }
    getSourceIcon() {
        let iconName = 'restaurant';
        if (this.state.source === 'camera') iconName = 'photo-camera';
        else if (this.state.source === 'barcode') iconName = 'barcode-scan';
        return (
            <Icon name={iconName} size={32} />
        );
    }
    toggleExpanded() {
        this.setState({ expanded: !this.state.expanded });
    }
    render() {
        return (
            <View>
                <Card onPress={this.toggleExpanded.bind(this)} onLongPress={this.props.onLongPress}>
                    <ListItem
                        leftElement={
                            this.getSourceIcon()
                        }
                        centerElement={{
                            primaryText: this.props.name,
                            secondaryText: this.props.timestamp.toDateString(),
                        }}
                        rightElement={
                            <View>
                                <Text style={styles.calories}>
                                    {`${this.props.nutritionalFacts.kcal} Cal`}
                                </Text>
                                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} />
                            </View>
                        }
                    />
                    {
                        this.state.expanded &&
                        <View style={styles.expandedContainer}>
                            <Text style={styles.nutrientColLeft}>Total Fats</Text>
                            <Text style={styles.nutrientColRight}>
                                {this.props.nutritionalFacts.lipidTotal}
                            </Text>
                            <Divider />
                            <Text style={styles.nutrientColLeft}>Total Carbs</Text>
                            <Text style={styles.nutrientColRight}>
                                {this.props.nutritionalFacts.carb}
                            </Text>
                        </View>
                    }
                </Card>
            </View>
        );
    }
}

Meal.propTypes = propTypes;
Meal.defaultProps = defaultProps;

export default Meal;
