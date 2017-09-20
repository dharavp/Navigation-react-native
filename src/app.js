import React, { Component } from 'react';
import { Text, View, Keyboard } from 'react-native';
import { Button, Card, CardSection } from './components/common';

class app extends Component {
static navigationOptions = {
    header: null
  }
componentWillMount() {
  		Keyboard.dismiss();
 }

	render() {
	const { navigate } = this.props.navigation;
	return (
		<View>
		<Text style={styles.TextStyle}> Navigation Example </Text>
		<Card>
		<CardSection>
		<Button onPress={() => navigate('Home')}>
		Stack Navigation
		</Button>
		</CardSection>


		<CardSection>
		<Button onPress={() => navigate('ArgsFirstScreen')}>
		Stack Navigation With Arguments
		</Button>
		</CardSection>

		<CardSection>
		<Button onPress={() => navigate('TabNavigation')}>
		Tab Navigation
		</Button>
		</CardSection>

		<CardSection>
		<Button onPress={() => navigate('MaterialTabNav')}>
		Material Tab Navigation
		</Button>
		</CardSection>

		<CardSection>
		<Button onPress={() => navigate('NavDraw')}>
		Navigation Drawer
		</Button>
		</CardSection>
		</Card>
		</View>
		);
}
}

const styles = {
	TextStyle: {
		fontSize: 18,
		alignSelf: 'center',
		marginTop: 10,
		color: 'orange',
		fontWeight: '600'
	}
};

export default app;
