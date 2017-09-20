import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;
return (
	<TouchableOpacity onPress={onPress} style={buttonStyle}>
	<Text style={textStyle}>{children}</Text>
	</TouchableOpacity>	
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600'
	},
  buttonStyle: {
         alignSelf: 'stretch',
         borderRadius: 5,
         borderWidth: 1,
         borderColor: '#007aff',
         margin: 5,
         height: 48,
         padding: 10,
         flex: 1,
         backgroundColor: '#ffffff',
         justifyContent: 'center'
  }
};

export { Button };

