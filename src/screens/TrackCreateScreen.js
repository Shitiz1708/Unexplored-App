import '../_mockLocations'
import React,{useEffect,useContext, useCallback } from 'react'
import { StyleSheet} from 'react-native' 
import { Text } from 'react-native-elements'
import { SafeAreaView,withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { FontAwesome } from '@expo/vector-icons'

const TrackCreateScreen = ({isFocused}) =>{
    const {state,addLocation} = useContext(LocationContext)
    const callback = useCallback((location)=>{
        addLocation(location,state.recording)
    },[state.recording])
    const [err] = useLocation(isFocused||state.recording,callback)
    // console.log(isFocused)
    return <SafeAreaView forceInset={{top:"always"}}>
        <Text h2>Create Track</Text>
        <Map />
        {err?<Text>Please Allow Location Services</Text>:null }
        <TrackForm />
    </SafeAreaView>
}
TrackCreateScreen.navigationOptions = {
    title:'Add Track',
    tabBarIcon:<FontAwesome name="plus" size={20} />
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen);