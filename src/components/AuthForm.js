import React,{useState} from 'react'
import {Text,Button,Input} from 'react-native-elements'
import { View,StyleSheet } from 'react-native'
import Spacer from './Spacer'
const AuthForm = ({headerText,errorMessage,buttonText,onSubmit}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input 
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input 
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage?<Text style={styles.errorMessage}>{errorMessage}</Text>:null}
            <Spacer>
                <Button title={buttonText} onPress={()=>onSubmit({email,password})}/>
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    errorMessage:{
        fontSize:16,
        color:'red',
        marginLeft:15,
        marginTop:15
    }
})
export default AuthForm