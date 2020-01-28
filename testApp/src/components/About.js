import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Character from './Character';


const About = ({ navigation }) => (

    <View style={styleAbout.container}>
        <Text style={{position:'absolute',left:10, top:0,}}> {navigation.getParam('name')} </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('AOH')}} 
                          style={{right:-300, top: 0}} >
            <Text>LOGOUT</Text>
        </TouchableOpacity>


        <Text> </Text>
        <Character name="ETHAN FIELDS" lvl="6" rank="Lunar Silver" />
    </View>
);

About.navigationOptions = {
    title:'About',
}

const styleAbout = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
    },
    button:{
        alignItems: 'center',
        justifyContent:'center',
        color:"#A8A5A2",
    },
    btnText:{
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'bold',
    }
});

export default About;
