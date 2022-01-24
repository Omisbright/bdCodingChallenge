import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/home';
import Likes from '../screens/likes';
import { View, Text, Dimensions } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 


const {width, height} = Dimensions.get("window")

console.log("height", height)
console.log("width", width)

const Tab = createMaterialBottomTabNavigator();

const MyTab = () => {

  return (
    <Tab.Navigator
        initialRouteName="All Dogs"
        activeColor="rgba(33, 34, 39, 1)"
        inactiveColor="rgba(33, 34, 39, 0.3)"
        barStyle={{ backgroundColor: '#fff', height: height/10, justifyContent: "center" }}
        screenOptions={{ headerShown: false }}
    >
        <Tab.Screen 
            name="All Dogs" 
            component={Home} 
            options={{
                tabBarIcon: ({focused, color, size}) => {
                    return (
                        <MaterialCommunityIcons name="dog" size={23} color={color} />
                    )
                },
            }}
        />

        <Tab.Screen 
            name="Dogs I Like" 
            component={Likes} 
            options={{
                tabBarIcon: ({focused, color, size}) => {
                    return (
                        <AntDesign name="heart" size={23} color={color} />
                    )
                },
            }}
        />
    </Tab.Navigator>
  );

}





export default MyTab;