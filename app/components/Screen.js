import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children }) => {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  screen: {
      height: '100%',
      paddingTop: Constants.statusBarHeight,
      width: '100%'
  },
});

export default Screen;