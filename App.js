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
import SearchTypingScreen from './screens/SearchTypingScreen.js';
import AnswerScreen from './screens/AnswerScreen.js';
import { TopicsProvider } from './contexts/TopicsContext.js';
//import TopicsScreen from './screens/TopicsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="AWS SAA 테스트" component={HomeScreen} />
        <Stack.Screen name="문제" component={AnswerScreen} />
      </Stack.Navigator>
    );
  }

  function TopicsStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="AWS SAA 요약" component={TopicsScreen} />
        <Stack.Screen name="서브토픽 목차" component={SubtopicsScreen} />
        <Stack.Screen name="AI 답변" component={TypingTextScreen} />
      </Stack.Navigator>
    );
  }

  function SearchStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="검색" component={SearchScreen} />
        <Stack.Screen name="AI 답변 내용" component={SearchTypingScreen} />
      </Stack.Navigator>
    );
  }

  function App() {
    return (
      <TopicsProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Summary"
            component={TopicsStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="description" size={size} color={color} />
              ),
            }}
          />
        <Tab.Screen 
          name="Search" 
          component={SearchStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="search" size={size} color={color} />
            ),
          }} 
        />
          <Tab.Screen name="Test" component={HomeStackScreen}  
           options={{
            tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="question-answer" size={size} color={color} />
            ),
        }} />
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
      </TopicsProvider>
    );
  }

export default App;
