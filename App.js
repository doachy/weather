import { StatusBar } from 'expo-status-bar';
import {Alert} from "react-native";
import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from 'axios';


const API_KEY = "a1aa0806778d47026ff590ba270cda7e";
	  
export default class extends React.Component {
	state = {
		isLoading: true
	};
	
	getWeather = async(latitude, longitude) => {
		const { data } = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
	}
	
	getLocation = async () => {
		try{
			await Location.requestPermissionsAsync();
			const { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync();
			this.getWeather(latitude, longitude)
			this.setState({isLoading: false});
		} catch (error) {
			Alert.alert("can't find you", "so sad");
		}
	};

	componentDidmount() {
	 this.getLocation();
	}
	render() {
		const { isLoading } = this.state;
		return isLoading ? <Loading/> : null;
	}
}
  
  
  
  
  /*
  (
    <View style={styles.container}>
      <Text style={styles.text}>getting the fucking weather</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    alignItems: 'center',
    justifyContent: 'center'
  },
text: {
	fontSize: 50
}
});
*/