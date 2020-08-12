import React, { useContext,useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'

const SignUpScreen = ({ navigation }) => {
    const {state,signup,clearErrorMessage,tryLocalSignIn} = useContext(AuthContext);
    // console.log(state)

    useEffect(()=>{tryLocalSignIn();},[]);
    return <View style={styles.container}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}
        />
        <AuthForm 
            headerText = "Sign up for tracker" 
            buttonText="Sign up" 
            errorMessage={state.errorMessage} 
            onSubmit={signup} 
        />
        <NavLink 
            text="Already have an account ? Sign in instead"
            routeName="SignIn"
        />
    </View>
}
SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
}
const styles = StyleSheet.create({
    container: {
        // borderWidth:10,
        // borderColor:'red',
        flex: 1,
        justifyContent: 'center',
        marginBottom: 50
    }
})

export default SignUpScreen;