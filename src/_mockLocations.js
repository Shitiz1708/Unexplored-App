import * as Location from 'expo-location'

const tenMetersWithDegrees = 0.0001;

const getLocation = increment =>{
    return {
        timeStamp:10000000,
        coords:{
            speed:0,
            heading:0,
            accuracy:5,
            altitudeAccuracy:5,
            altitude:5,
            latitude:28.6822511 + increment*tenMetersWithDegrees,
            longitude:77.282263 + increment*tenMetersWithDegrees
        }
    }
}

let counter = 0;
setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId:Location._getCurrentWatchId(),
        location:getLocation(counter)
    })
    counter++;
},1000)