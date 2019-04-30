/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from "react-native-maps";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
                 region={{
                   latitude:16.869289,
                   longitude:79.863265,
                   latitudeDelta:0.1,
                   longitudeDelta:0.1

                 }}
        >

          <MapView.Marker
              coordinate={{
                  latitude:16.869289,
                  longitude:79.863265
              }}
              title={'Selected Apartment'}
              description={'my marker desc'}
          />

            <MapView.Marker
                coordinate={{
                    latitude:6.868842,
                    longitude:79.862150
                }}
                title={'Arpico'}
                description={'my marker desc'}
            >
                <View style={styles.marker}>
                    <Text>
                        Arpico
                    </Text>
                </View>
            </MapView.Marker>
        </MapView>
      </View>



    );
  }
}
const styles=StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
    justifyContent:'flex-end'
  },map:{
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
  },marker:{
        backgroundColor:"red",
        color:"white",
        padding:5,
        borderRadius:5,
    }
});
