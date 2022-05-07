
import { FontAwesome5 } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LoginScreen} from './Login/login';
import {Create} from './Login/create';
import {View, Text, Button, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';
import HomeScreen from './screen/HomeScreen';
import MeScreen from './screen/MeScreen'
import ChuthuatScreen from './ViewManga/ChuThuat'
import NgocRongScreen from './ViewManga/NgocRong'
import AboutScreen from './screen/AboutScreen';
import {ForGotScreen} from './Login/forgotpass'
import SettingsScreen from './screen/SettingsScreen';
import NotificationScreen from './screen/Notification';
import Chap1NgocRongScreen from './ChapManga/NgocRongChap';
import Chap2NgocRongScreen from './ChapManga/NgocRongChap2';
import DoDenScreen from './ViewManga/DoDen'
import DoDenChap1Screen from './ChapManga/Doden'
import TokyoScreen from './ViewManga/Tokyo'
import TiTanChap1 from './ChapManga/TiTanChap1'
import ReportScreen from './screen/ReportScreen'
import  Chap1TokyoScreen from './ChapManga/TokyoChap'
import TiTan from './ViewManga/Titan'
import Chap1ChuThuatScreen from './ChapManga/Chap1ChuThuat'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen 
        name="NgocRong"
        component={NgocRongScreen}
      />
       <Stack.Screen 
        name="Chuthuat"
        component={ChuthuatScreen}
      />
       <Stack.Screen 
        name="Chap1NgocRong"
        component={Chap1NgocRongScreen}
      />
      <Stack.Screen 
        name="Chap2NgocRong"
        component={Chap2NgocRongScreen}
      />

       <Stack.Screen 
        name="DoDen"
        component={DoDenScreen}
      />
      <Stack.Screen 
        name="DoDenchap1"
        component={DoDenChap1Screen}
      />
      <Stack.Screen 
        name="TokyoScreen"
        component={TokyoScreen}
      />
       <Stack.Screen 
        name="Tokyochap1"
        component={Chap1TokyoScreen}
      />
      <Stack.Screen 
        name="TiTan"
        component={TiTan}
      />
      <Stack.Screen 
        name="TiTanChap1"
        component={TiTanChap1}
      />
      <Stack.Screen 
        name="Chap1ChuThuat"
        component={Chap1ChuThuatScreen}
      />

    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Setting Page' }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutScreen}
        options={{ title: 'About Us' }}
      />
      
      <Stack.Screen
        name="Report"
        component={ReportScreen}
        options={{ title: 'Reported Manga' }}
      />
    </Stack.Navigator>
  );
}

function MeStack(){
  return (
    <Stack.Navigator initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        
      }}>
    <Stack.Screen
        name="Me"
        component={MeScreen}
        
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        
      />
      <Stack.Screen
        name="Create"
        component={Create}
        
      />

      <Stack.Screen
        name="ForGotPass"
        component={ForGotScreen}
        
      />
    </Stack.Navigator>
  );
}

function NotificationStack(){
  return (
    <Stack.Navigator initialRouteName=""
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        
      }}>
    <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        
      />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        initialRouteName="feed"
        tabBarOptions={{
          activeTintColor: 'black',
        }}>

        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
      
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Me"
          component={MeStack}
          options={{
           
            tabBarLabel: 'Me',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="smile-wink" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="Notification"
          component={NotificationStack}
          options={{
           
            tabBarLabel: 'Notification',
            tabBarBadge:1,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications-sharp" color={color} size={size}  />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingsStack}
          options={{
           
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-sharp" color={color} size={size} />
            ),
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
