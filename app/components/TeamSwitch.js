import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import text from '../config/text';

const TeamSwitch = ({ conf, setConf }) => {
    return (
        <View style={styles.container}>
            <Text style={text.title}>Conference</Text>
            <View style={styles.switch}>
                <Button 
                    onPress={() => setConf('west')}
                    title="WEST"
                />
                <Button 
                    onPress={() => setConf('east')}
                    title="EAST"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      marginLeft: 5
  },
  switch: {
      flexDirection: 'row'
  }
});

export default TeamSwitch;