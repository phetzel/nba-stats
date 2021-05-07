import React from 'react';
import LottieView from 'lottie-react-native';

const ActivityIndicator = ({ visible }) => {
    if (!visible) return null;

    return (
        <LottieView 
            autoPlay
            loop
            source={require('../assets/loading.json')} />
    )
};


export default ActivityIndicator;
