import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';

import { HomeScreen } from './HomeScreen';
import { QrCodeScreen } from './QrCodeScreen';
import { TxtScreen } from './txtScreen';
import { DevScreen } from './DevScreen';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator inittialRouteName='HomeScreen'>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='QrCodeScreen' component={QrCodeScreen} option={{ headerShown: false }} />
      <Stack.Screen name='DevScreen' component={DevScreen} option={{ headerShown: false }} />
      <Stack.Screen name='TxtScreen' component={TxtScreen} option={{ headerShown: false }} />
    </Stack.Navigator>
  );
}