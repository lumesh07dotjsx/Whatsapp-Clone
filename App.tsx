import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {Colors} from './src/theme/Colors';
import SplaceScreen from './src/screens/SplaceScreen';
import ChatScreen from './src/screens/ChatScreen';
import ContactScreen from './src/screens/ContactScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <Stack.Navigator>
        {showSplashScreen ? (
          <Stack.Screen
            name="SplaceScreen"
            component={SplaceScreen}
            options={{headerShown: false}}
          />
        ) : null}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactScreen"
          component={ContactScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
