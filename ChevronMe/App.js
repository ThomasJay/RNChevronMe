/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // In 5 seconds set isLoading false
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#aaa',
            width: 250,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            borderColor: 'black',
            borderWidth: 1,
            shadowColor: 'grey',
            shadowOffset: {width: 10, height: 10},
            shadowOpacity: 1,
            shadowRadious: 10,
            elevation: 20,
          }}>
          <ActivityIndicator size="large" color="white" />
          <Text>Loading stuff...</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 70,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'red',
            height: 50,
          }}>
          <View
            style={{
              justifyContent: 'center',
              backgroundColor: 'white',
              width: '90%',
            }}>
            <Text style={{paddingLeft: 16}}>Yo Dude Whats new today?</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              width: '10%',
              alignItems: 'flex-end',
            }}>
            <Icon name="chevron-right" size={25} color="darkgrey" />
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 50,
          marginLeft: 50,
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="delete" size={25} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
