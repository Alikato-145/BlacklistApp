import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import pb from "./lib/pocketbase"
import Login from "./Screens/Login"
import Register from "./Screens/Register"
import Search from './Screens/Search';
import Profile from './Screens/Profile';
import Recent from './Screens/Recent';
import Detail from './Screens/Detail';
import Create from './Screens/Create';
import Research from './Screens/Research';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false}} >
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Recent" component={Recent} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Reserch" component={Create} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack