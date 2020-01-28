import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

class Character extends Component{
    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Text>{this.props.name}</Text>
                <Text>LVL {this.props.lvl}</Text>
                <Text>{this.props.rank}</Text>
            </View>
        )
    }
}

export default Character;