import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './Navigator';

/////Skyward
import Splash from '../components/Splash/ChildComponent/Splash';
import SignIn from '../components/Login/ChildComponent/SignIn';
import MyBottomTab from '../components/Home/ChildComponent/MyBottomTab';
import HelpDesk from '../components/HomeDetails/ChildComponent/HelpDesk';
import Opportunity from '../components/HomeDetails/ChildComponent/Opportunity';
import AddOpportunity from '../components/Opportunity/AddOpportunity/AddOpportunity';
import AddOppContact from '../components/Opportunity/AddOpportunity/customer/AddOppContact/AddOppContact';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none" initialRouteName="Splash">
        {/* Skyward  */}
        <Stack.Screen component={MyBottomTab} name="MyBottomTab" />
        <Stack.Screen component={Splash} name="Splash" />
        <Stack.Screen component={SignIn} name="SignIn" />
        <Stack.Screen component={HelpDesk} name="HelpDesk" />
        <Stack.Screen component={Opportunity} name="Opportunity" />
        <Stack.Screen component={AddOpportunity} name="AddOpportunity" />
        <Stack.Screen component={AddOppContact} name="AddOppContact" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};