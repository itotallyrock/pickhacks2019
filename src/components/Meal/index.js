import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Card, ListItem } from '../react-native-material-ui';

const propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
        uri: PropTypes.string,
    }),
    timestamp: PropTypes.instanceOf(Date),
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        servingSize: PropTypes.number.isRequired,
    })),
    nutritionalFacts: PropTypes.shape({
        ndb: PropTypes.number,
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
    })
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

class Meal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <ListItem
                        leftElement={<Avatar text="JM" />}
                        centerElement={{
                            primaryText: this.props.name,
                            secondaryText: this.props.timestamp.toDateString(),
                        }}
                    />
                    <View style={styles.textContainer}>
                        <Text>
                            {this.props.kcal + ' Calories'}
                        </Text>
                    </View>
                </Card>
            </View>
        );
    }
}

Meal.propTypes = propTypes;

export default Meal;
