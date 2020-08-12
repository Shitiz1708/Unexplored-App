import React,{useContext} from 'react'
import { View,StyleSheet} from 'react-native'
import {Text,Button} from 'react-native-elements'
import {Context as AuthContext } from '../context/AuthContext'
import Spacer from '../components/Spacer'
import {SafeAreaView} from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = () =>{
    const {signout} = useContext(AuthContext);
    return <SafeAreaView forceInset={{top:"always"}}>
        <Text h3>Account Screen</Text>
        <Spacer>
            <Button 
                title="Sign Out"
                onPress={signout}
            />
        </Spacer>
    </SafeAreaView>
}
AccountScreen.navigationOptions = {
    title:'Settings',
    tabBarIcon :<FontAwesome name='gear' size={20} />
}

const styles = StyleSheet.create({})

export default AccountScreen;