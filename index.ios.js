import React, {AppRegistry, Component, StyleSheet, Text, View } from 'react-native';

const {
    ScrollView,
    Image,
} = React;

import {
    MKButton,
    MKColor,
    MKIconToggle,
    getTheme,
} from 'react-native-material-kit';

const theme = getTheme();
const styles = require('./styles');

class familyFitness extends Component {
    render(){
        var base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg';
        var menu = (
            <MKIconToggle
                checked={true}
                onCheckedChange={this._onIconChecked}
                onPress={this._onIconClicked}
            >
                <Text pointerEvents="none"
                      style={styles.toggleTextOff}>Off</Text>
                <Text state_checked={true}
                      pointerEvents="none"
                      style={[styles.toggleText, styles.toggleTextOn]}>On</Text>
            </MKIconToggle>
        );
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={theme.cardStyle}>
                        <Image source={{uri : base64Icon}} style={theme.cardImageStyle}/>
                        <Text style={theme.cardTitleStyle}>Welcome</Text>
                        <View style={{padding : 15}}>
                            <Text style={[theme.cardContentStyle, {padding:0}]}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </Text>
                        </View>
                        <View style={theme.cardMenuStyle}>{menu}</View>
                        <View style={theme.cardActionStyle}>
                            <Text>My Action</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
};

module.exports = familyFitness;


AppRegistry.registerComponent('familyFitness', () => familyFitness);
