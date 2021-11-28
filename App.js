import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Gallery from './src/Screens/Gallery';
import {IMAGE_DETAILS, GALLERY} from './src/Constants/ScreenConstants';
import ImageDetails from './src/Screens/ImageDetails';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={GALLERY} component={Gallery} />
        <Stack.Screen name={IMAGE_DETAILS} component={ImageDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
