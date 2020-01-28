import {StyleSheet} from 'react-native';


const LoginStyles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#A8A5A2'
    },
    image:{
        width:200,
        height:200,
        marginBottom:20
    },
    input:{
        marginTop:10,
        width:300,
        backgroundColor: 'white',
        fontSize:16,
        fontWeight:'bold',
        borderRadius:7,
        padding:10
    },
    loginbtn:{
        width:300,
        height:40,
        marginTop:30,
        padding:15,
        backgroundColor:'white',
        borderRadius:7,
        alignItems:'center',
        justifyContent:'center'
    },
    btntext:{
        fontSize:16,
        fontWeight:'bold'
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom: 10,
        color:'#663B07'
    }
})

export default LoginStyles;