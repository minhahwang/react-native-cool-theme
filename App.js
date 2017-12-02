import React from 'react';
import TopBar from './components/TopBar';
import ListViewCell from './components/ListViewCell';
import { StyleSheet, Text, View,StatusBar,ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      
      <View 
        style={styles.a}>
        <StatusBar  
          backgroundColor='violet'
          barStyle='light-content'
        />
        <TopBar></TopBar>
        <ScrollView>
          <ListViewCell></ListViewCell>  
          <ListViewCell></ListViewCell>  
          <ListViewCell></ListViewCell>  
        </ScrollView>

        <View style={{
          width:'100%',
          flex: 1,
          backgroundColor:'pink'}}>
        </View>
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  a: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },

  box: {
    width: 50,
    height: 50,
  }
});
