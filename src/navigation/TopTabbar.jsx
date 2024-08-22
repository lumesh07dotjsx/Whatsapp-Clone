import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CommunityScreen from '../screens/CommunityScreen';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
import {tabBarData} from '../data/tabbarData';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Tab = createMaterialTopTabNavigator();
const TopTabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
        },
        tabBarActiveTintColor: Colors.tertiary,
        tabBarInactiveTintColor: Colors.secondaryColor,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.tertiary,
        },
      })}>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <VectorIcon
              type="FontAwesome"
              name="users"
              color={color}
              size={wp('5%')}
            />
          ),
        }}
        name="Community"
        component={CommunityScreen}
      />
      {tabBarData.map(tab => (
        <Tab.Screen key={tab.id} name={tab.name} component={tab.route} />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabbar;
