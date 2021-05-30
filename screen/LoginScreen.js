import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

function LoginScreen(props) {
	return (
		<View style={styles.container}>
			<Text>Login Screen</Text>
			<Button title='click me' onPress={() => alert('Button Clicked')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default LoginScreen;
