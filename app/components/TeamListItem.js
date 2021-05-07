import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

import text from '../config/text';

const TeamListItem = ({ allStar, fullName, logo, teamId }) => {
    if (allStar === '1') return null;

    return (
        <TouchableOpacity style={styles.container}>
            <Image 
                resizeMode="contain"
                source={{uri: logo}} 
                style={styles.logo} />
            <Text style={text.listItem}>{fullName}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 8
    },  
    logo: {
        height: 40,
        marginRight: 40,
        marginLeft: 10,
        width: 40
    },
});

export default TeamListItem;