import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Loading(){
	return <View style={style.container}>
		<Text style={style.text}>This is the weather</Text>
	</View>;
}

const style = StyleSheet.creat({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		paddingHorizontal: 30,
		paddingVertical: 100,
		backgroundColor: "#FDF6AA"
	},
	text: {
		color: "#2c2c2c",
		fontSize: 30
	}
	
})