import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Game from './components/Game';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

//Create Navigation Container
const Stack = createNativeStackNavigator();

const App = () => {
  // Update the background color for the default theme
  DefaultTheme.colors.background = "#FFFFFF"
  return (
    <NavigationContainer theme={DefaultTheme}>
      {/* Create Navigators inside the navigation container */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  
        options={{
          title: 'Players',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '800'          }
        }}/>
        <Stack.Screen name="Game" component={Game} 
         options={{
          title: 'Scores',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '800'          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>);
};


// Export app 
export default App;