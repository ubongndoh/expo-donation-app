import React from 'react';
import {
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Text,
	Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function LoginScreen(props) {
	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require('../assets/forms/logo.png')} />
			<Text style={styles.hitext}>Create an account</Text>
			<Text style={styles.lotext}>
				We’d love to know you. Please fill in your information
			</Text>

			<TextInput
				style={styles.input}
				placeholder='John Lee'
				placeholderTextColor='#838383'
				autoCapitalize='none'
				autoCompleteType='name'
			/>

			<TextInput
				style={styles.input}
				placeholder='janedoe@email.com'
				placeholderTextColor='#838383'
				autoCapitalize='none'
				autoCompleteType='email'
			/>

			<TextInput
				style={styles.input}
				placeholderTextColor='#838383'
				autoCapitalize='none'
				secureTextEntry={true}
				placeholder='Password'
			/>

			<TouchableOpacity
				style={styles.submitButton}
				onPress={() => alert('you click')}
			>
				<Text style={styles.submitButtonText}> Submit </Text>
			</TouchableOpacity>

			<Text style={{ marginVertical: 20, fontSize: 18, fontWeight: '400' }}>
				Sign In with
			</Text>
			<View
				style={{
					flexDirection: 'row',
					marginVertical: 20,
				}}
			>
				<MaterialIcons
					name='facebook'
					size={35}
					color='blue'
					style={{ paddingRight: 40 }}
					onPress={() => alert('you click')}
				/>
				<AntDesign
					name='google'
					size={30}
					color='red'
					style={{ paddingLeft: 40 }}
					onPress={() => alert('you click')}
				/>
			</View>

			<View
				style={{
					flexDirection: 'row',
					fontSize: 22,
					marginTop: 20,
				}}
			>
				<Text style={{}}>Already have an account?</Text>
				<TouchableOpacity style={{ paddingLeft: 10 }}>
					<Text style={{ color: '#27AE60' }}>Sign in</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E7F6F1',
		alignItems: 'center',
	},
	logo: {
		width: 100,
		height: 80,
		marginTop: 35,
		marginBottom: 12,
	},
	hitext: {
		fontSize: 25,
		color: '#222222',
		marginTop: 18,
		fontWeight: '600',
	},
	lotext: {
		fontSize: 18,
		color: '#838383',
		marginTop: 10,
		fontWeight: '400',
		textAlign: 'center',
	},
	input: {
		borderColor: '#C5E9DC',
		borderWidth: 1,
		borderRadius: 20,
		width: '70%',
		height: 50,
		marginTop: 30,
		paddingLeft: 15,
	},
	submitButton: {
		backgroundColor: '#27AE60',
		padding: 10,
		margin: 15,
		height: 50,
		width: '70%',
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 28,
	},
	submitButtonText: {
		color: '#FEFEFE',
		fontSize: 20,
	},
});

export default LoginScreen;
