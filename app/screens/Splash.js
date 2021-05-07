import React from 'react';
import { Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

import text from '../config/text';

const Splash = ({ navigation }) => {
    const handlePress = () => {
        console.log('hit');
    }

    return (
        <ImageBackground
            source={require("../assets/basketball.jpg")}
            style={styles.background}>

            <Text style={text.splash}>NBA STATS</Text>
            
            <TouchableOpacity
                onPress={() => navigation.navigate("Teams")}>
                <Image
                  source={require("../assets/ball.png")}
                  style={styles.button}>
                </Image>
            </TouchableOpacity>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    height: 150,
    marginBottom: 10,
    width: 150
  }
});

export default Splash;