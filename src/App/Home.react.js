import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ToastAndroid, ScrollView, Platform, Animated, Easing, Button } from 'react-native';

import routes from '../routes';

import Container from '../Container';
// components
import {
    ActionButton,
    Avatar,
    ListItem,
    Toolbar,
    BottomNavigation,
    Icon,
} from '../react-native-material-ui/src';

const UP = 1;
const DOWN = -1;

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

class Home extends Component {
    constructor(props) {
        super(props);

        this.offset = 0;
        this.scrollDirection = 0;

        this.state = {
            selected: [],
            searchText: '',
            active: 'home',
            moveAnimated: new Animated.Value(0),
        };
    }
    onAvatarPressed = (value) => {
        const { selected } = this.state;

        const index = selected.indexOf(value);

        if (index >= 0) {
            // remove item
            selected.splice(index, 1);
        } else {
            // add item
            selected.push(value);
        }

        this.setState({ selected });
    }
    onScroll = (ev) => {
        const currentOffset = ev.nativeEvent.contentOffset.y;

        const sub = this.offset - currentOffset;

        // don't care about very small moves
        if (sub > -2 && sub < 2) {
            return;
        }

        this.offset = ev.nativeEvent.contentOffset.y;

        const currentDirection = sub > 0 ? UP : DOWN;

        if (this.scrollDirection !== currentDirection) {
            this.scrollDirection = currentDirection;

        }
    }
    show = () => {
        Animated.timing(this.state.moveAnimated, {
            toValue: 0,
            duration: 225,
            easing: Easing.bezier(0.0, 0.0, 0.2, 1),
            useNativeDriver: Platform.OS === 'android',
        }).start();
    }
    hide = () => {
        Animated.timing(this.state.moveAnimated, {
            toValue: 56, // because the bottom navigation bar has height set to 56
            duration: 195,
            easing: Easing.bezier(0.4, 0.0, 0.6, 1),
            useNativeDriver: Platform.OS === 'android',
        }).start();
    }
    renderToolbar = () => {
        if (this.state.selected.length > 0) {
            return (
                <Toolbar
                    key="toolbar"
                    leftElement="clear"
                    onLeftElementPress={() => this.setState({ selected: [] })}
                    centerElement={this.state.selected.length.toString()}
                    rightElement={['delete']}
                    style={{
                        container: { backgroundColor: 'white' },
                        titleText: { color: 'rgba(0,0,0,.87)' },
                        leftElement: { color: 'rgba(0,0,0,.54)' },
                        rightElement: { color: 'rgba(0,0,0,.54)' },
                    }}
                />
            );
        }
        return (
            <Toolbar
                key="toolbar"
                centerElement="Home"
                searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    onChangeText: value => this.setState({ searchText: value }),
                    onSearchClosed: () => this.setState({ searchText: '' }),
                }}
            />
        );
    }
    renderItem = (title, route) => {
        const searchText = this.state.searchText.toLowerCase();

        if (searchText.length > 0 && title.toLowerCase().indexOf(searchText) < 0) {
            return null;
        }

        return (
            <ListItem
                divider
                leftElement={<Avatar text={title[0]} />}
                onLeftElementPress={() => this.onAvatarPressed(title)}
                centerElement={title}
                onPress={() => this.props.navigation.navigate(route)}
            />

        );
    }
    render() {
        return (
            <Container>
                {this.renderToolbar()}
                <ScrollView
                    keyboardShouldPersistTaps="always"
                    keyboardDismissMode="interactive"
                    onScroll={this.onScroll}
                >
                    {this.renderItem('Action buttons', 'actionButton')}
                    {this.renderItem('Avatars', 'avatar')}
                    {this.renderItem('Badge', 'badge')}
                    {this.renderItem('Bottom navigation', 'bottomNavigation')}
                    {this.renderItem('Buttons', 'button')}
                    {this.renderItem('Cards', 'card')}
                    {this.renderItem('Checkbox', 'checkbox')}
                    {this.renderItem('Dialog', 'dialog')}
                    {this.renderItem('Drawer', 'drawer')}
                    {this.renderItem('Icon toggles', 'iconToggle')}
                    {this.renderItem('List items', 'list')}
                    {this.renderItem('Radio buttons', 'radioButton')}
                    {this.renderItem('Toolbars', 'toolbar')}
                </ScrollView>
                <ActionButton
                    actions={[
                        { icon: 'camera-alt', label: 'Image', name: 'imageSearch' },
                        { icon: 'barcode', label: 'Barcode', name: 'barcode' },
                        { icon: 'search', label: 'Search', name: 'manualSearch' },
                    ]}
                    hidden={this.state.bottomHidden}
                    icon="add"
                    transition="speedDial"
                    onPress={(action) => {
                        if(action!='main-button'){
                            this.props.navigation.navigate(action)
                        }
                    }}
                    style={{
                        positionContainer: { bottom: 76 },
                    }}
                />
                <BottomNavigation
                    active={this.state.active}
                    hidden={this.state.bottomHidden}
                    style={{ container: { position: 'absolute', bottom: 0, left: 0, right: 0 } }}
                >
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

Home.propTypes = propTypes;

export default Home;
