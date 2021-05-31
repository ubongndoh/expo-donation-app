import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
	let backgroundColor;

	backgroundColor = selected
		? 'rgba(28, 225, 47, 0.9)'
		: 'rgba(28, 225, 47, 0.3)';

	return (
		<View
			style={{
				width: 6,
				height: 6,
				marginHorizontal: 3,
				backgroundColor,
			}}
		/>
	);
};

const Skip = ({ ...props }) => (
	<TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
		<Text style={{ fontSize: 16 }}>Skip</Text>
	</TouchableOpacity>
);

const Next = ({ ...props }) => (
	<TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
		<Text style={{ fontSize: 16 }}>Next</Text>
	</TouchableOpacity>
);

const Done = ({ ...props }) => (
	<TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
		<Text style={{ fontSize: 16 }}>Done</Text>
	</TouchableOpacity>
);
const Button = () => (
	<TouchableOpacity
		style={{
			marginTop: 15,
			backgroundColor: '#27AE60',
			width: '70%',
			height: 50,
			borderRadius: 50,
			alignItems: 'center',
			justifyContent: 'center',
		}}
	>
		<Text style={{ fontSize: 20, color: '#fff', fontWeight: '700' }}>
			Donate Now
		</Text>
	</TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
	return (
		<Onboarding
			SkipButtonComponent={Skip}
			NextButtonComponent={Next}
			DoneButtonComponent={Done}
			DotComponent={Dots}
			onSkip={() => navigation.replace('Signup')}
			onDone={() => navigation.navigate('Login')}
			pages={[
				{
					backgroundColor: '#ffffff',
					image: <Image source={require('../assets/onboarding/gift.png')} />,
					title: 'Locate charity organizations near you',
					subtitle: <Button />,
				},
				{
					backgroundColor: '#ffffff',
					image: (
						<Image
							source={require('../assets/onboarding/house-searching.png')}
						/>
					),
					title: 'Add Items to Donate',
					subtitle: <Button />,
				},
				{
					backgroundColor: '#ffffff',
					image: (
						<Image source={require('../assets/onboarding/order-ride.png')} />
					),
					title: 'Donate and track delivery within seconds',
					subtitle: <Button />,
				},
			]}
		/>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
});
