import { StackNavigator } from 'react-navigation';

import Home from './App/Home.react';
// components
import ActionButton from './ActionButton';
import ActionButtonToolbar from './ActionButton/ActionButtonToolbar.react';
import ActionButtonSpeedDial from './ActionButton/ActionButtonSpeedDial.react';
import Avatar from './Avatar';
import BottomNavigation from './BottomNavigation';
import Badge from './Badge';
import Button from './Button';
import Card from './Card';
import Checkbox from './Checkbox';
import Dialog from './Dialog';
import Drawer from './Drawer';
import IconToggle from './IconToggle';
import List from './List';
import RadioButton from './RadioButton';
import Toolbar from './Toolbars';
import ImageSearch from './ImageSearch';
import Barcode from './Barcode';
import ManualSearch from './ManualSearch';
import Daily from './Daily';
import Goals from './Goals';
import Settings from './Settings';

const AppNavigator = StackNavigator({
    home: { screen: Home },
    actionButton: { screen: ActionButton },
    actionButtonToolbar: { screen: ActionButtonToolbar },
    actionButtonSpeedDial: { screen: ActionButtonSpeedDial },
    avatar: { screen: Avatar },
    badge: { screen: Badge },
    bottomNavigation: { screen: BottomNavigation },
    button: { screen: Button },
    card: { screen: Card },
    checkbox: { screen: Checkbox },
    dialog: { screen: Dialog },
    drawer: { screen: Drawer },
    iconToggle: { screen: IconToggle },
    list: { screen: List },
    radioButton: { screen: RadioButton },
    toolbar: { screen: Toolbar },
    manualSearch: { screen: ManualSearch },
    imageSearch: { screen: ImageSearch },
    barcode: { screen: Barcode },
    daily: { screen: Daily },
    goals: { screen: Goals },
    settings: { screen: Settings },
}, {
    headerMode: 'none',
});

export default AppNavigator;
