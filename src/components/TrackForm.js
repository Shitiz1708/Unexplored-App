import React,{useState,useContext} from 'react'
import { Input,Button } from 'react-native-elements'
import { View,StyleSheet } from 'react-native'
import Spacer from '../components/Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () =>{
    const {state:{recording,name,locations},
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()
    return <View>
        <Spacer>
        <Input 
            label="Enter Track Name"
            value={name}
            onChangeText={changeName}
        />
        </Spacer>
        <Spacer>
            {recording
                ?<Button title='Stop' onPress={stopRecording}/>
                :<Button title='Start Recording' onPress={startRecording}/>
            }
        </Spacer>
        <Spacer>
            {(!recording)&&(locations.length)
                ?<Button title="Save" onPress={saveTrack}/>
                :null 
            }
        </Spacer>
    </View>
}

const styles = StyleSheet.create({})

export default TrackForm;