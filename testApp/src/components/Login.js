import React, {Component} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import LoginStyles from '../styles/LoginStyles';

state = {
    name:''
}

const LoginPage=({navigation})=>(
    <View style={LoginStyles.container}>
        <Image style={LoginStyles.image} source={require('../contents/owl.png')} />
        <Text style={LoginStyles.text}>Welcome, Demigod, to AthenaApp</Text>
            <TextInput style={LoginStyles.input}
                    onChangeText={ text=>this.state.name = text }
                    placeholder="e-mail"
                />
            <TextInput style={LoginStyles.input}
                    secureTextEntry={true}
                    placeholder="password"
                />

            <TouchableOpacity 
                    style={LoginStyles.loginbtn}
                    onPress={()=>{navigation.navigate('About', {'name':this.state.name})}}
            >
                    <Text style={LoginStyles.btntext}>Login</Text>
            </TouchableOpacity>
    </View>
);

LoginPage.navigationOptions={
    headerShown: false,
}

export default LoginPage;