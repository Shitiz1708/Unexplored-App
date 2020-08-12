import React,{useContext} from 'react'
import { View,StyleSheet} from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const SignInScreen = () =>{
    const {state,signin,clearErrorMessage} = useContext(AuthContext)
    return <View style={styles.container}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}
        />
        <AuthForm 
            headerText="Sign In for Tracker"
            errorMessage = {state.errorMessage}
            buttonText="Sign In"
            onSubmit={signin}
        />
        <NavLink 
            text="Don't have an account ? Go back to sign up"
            routeName='SignUp'
        />
    </View>
}

SignInScreen.navigationOptions = () =>{
    return {
        headerShown:false
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:50
    }
})

export default SignInScreen;