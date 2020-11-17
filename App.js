import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeGallery from './Pages/HomeGallery';
import MediaDetail from './Pages/MediaDetail';

const Stack = createStackNavigator();

export default function App() {  

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Home Screen Route */}
        <Stack.Screen
          name="Home"
          component={HomeGallery}
          options={{ title: 'Fit Gallery' }}
        />

        {/* Media Display Route */}
        <Stack.Screen
          name="Media"
          component={MediaDetail}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

