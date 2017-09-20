import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
 const { textStyle, viewStyle } = styles;

 return (
 <View style={viewStyle}>
 <Text style={textStyle}>{props.headerText}</Text>
 </View>
);
};

const styles = {
	viewStyle: {
		backgroundColor: 'rgba(51,206,255,1)',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		shadowColor: '#0000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

export { Header };
