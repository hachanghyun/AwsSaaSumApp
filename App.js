import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ChaptersScreen from './screens/ChaptersScreen';
import ChapterDetailsScreen from './screens/ChapterDetailsScreen';
import DetailContentScreen from './screens/DetailContentScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TopicsScreen from './screens/TopicScreen';
import SubtopicsScreen from './screens/SubtopicsScreen';
import TypingTextScreen from './screens/TypingTextScreen';
import SubSearchScreen from './screens/SubSearchScreen.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="AWS SAA 요약" component={HomeScreen} />
        <Stack.Screen name="목차" component={ChaptersScreen} />
        <Stack.Screen name="Contents" component={ChapterDetailsScreen} />
        <Stack.Screen name="Description" component={DetailContentScreen} />
      </Stack.Navigator>
    );
  }

  function TopicsStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="토픽 목차" component={TopicsScreen} />
        <Stack.Screen name="서브토픽 목차" component={SubtopicsScreen} />
        <Stack.Screen name="AI 답변" component={TypingTextScreen} />
      </Stack.Navigator>
    );
  }

  function SearchStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="검색" component={SearchScreen} />
        <Stack.Screen name="Description" component={SubSearchScreen} />
      </Stack.Navigator>
    );
  }

  function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Summary" component={HomeStackScreen}  
           options={{
            tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="description" size={size} color={color} />
            ),
        }} />
          <Tab.Screen 
          name="Search" 
          component={SearchStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="search" size={size} color={color} />
            ),
          }} 
        />
        <Tab.Screen
          name="AI"
          component={TopicsStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="smartphone" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="about" 
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="settings" size={size} color={color} />
            ),
          }} 
        />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

export default App;
