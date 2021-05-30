import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './screen/OnboardingScreen';
import LoginScreen from './screen/LoginScreen';

const AppStack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<AppStack.Navigator header='none'>
				<AppStack.Screen name='Donation' component={OnboardingScreen} />
				<AppStack.Screen name='Login' component={LoginScreen} />
			</AppStack.Navigator>
		</NavigationContainer>
	);
}
