import { StyleSheet, SafeAreaView, } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'






const Map = () => {
  return (
    <SafeAreaView>
      <MapView
        style={styles.map} 
        mapType="mutedStandard"
        region={{
        latitude: 5.614818,
        longitude: -0.205874,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      provider={MapView.PROVIDER_GOOGLE}
      showsUserLocation
      showsMyLocationButton
      > 

       <Marker 
         coordinate={{ 
          latitude: 5.614818, 
          longitude: -0.205874 
          }} />
      
      </MapView>
      
    </SafeAreaView>
  )
}

export default Map

const styles = StyleSheet.create({
  
  map: {
    height: '100%',
    width: '100%'
    
  }
})