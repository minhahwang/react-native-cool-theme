import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

class TopBar extends React.Component {
    render () {
        return (
            <View style= {styles.topBar}>
                <Text style={{color: '#ffffff'}}> Left </Text>
                <Text style={{color: '#ffffff'}}> TopBar </Text>
                <Text style={{color: '#ffffff'}}> Right </Text>
            </View>

        )
    }
}

const styles= StyleSheet.create ({
    topBar: {
        paddingTop: 12,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        height: 65,
        flexDirection: 'row',
        backgroundColor: '#6863DC',
        alignItems:'center',
        justifyContent: 'space-between',
    }
});

export default TopBar;