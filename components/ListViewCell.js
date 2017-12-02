import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableHighlight } from 'react-native';

class ListViewCell extends React.Component {
    render () {
        return (
            <View style= {styles.listViewCell}>
                <View style={{
                   width:'100%',
                   aspectRatio: 1,            
                   backgroundColor:'#b2b2b2',
                }}>
                    <Image style={{
                            width:'100%',
                            height: '100%',
                        }}                    
                        source={require('../assets/dog.jpg')}
                        resizeMode='cover'
                    />
                    <TouchableHighlight
                        style={styles.button}
                     >
                        <Text style={{margin: 4,}}> Button </Text>
                     </TouchableHighlight>
                </View>
                <View style={{
                    width:'100%',
                    height:55,
                    backgroundColor:'#ffffff',  
                    alignItems: 'center',
                    flexDirection: 'row',
                    
                }}>
                  <Text style={{ fontSize: 16, marginLeft: 15 }}> 
                    Hello World 
                  </Text>
                
                </View>
            </View>
        )
    }
}


const styles= StyleSheet.create ({
    listViewCell: {
        width: '100%',
        // height: 375,
        // flexDirection: 'row',
        backgroundColor: 'gray',
        // alignItems:'center',
        // justifyContent: 'space-between',
    },
    button: {
        width: 60,
        height: 30,
        backgroundColor: '#ffffff',
        position: 'absolute',
        right: 20,
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }

});


export default ListViewCell;