import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import { fetchTeamsByConf } from '../api/nba';

const Teams = (props) => {

    useEffect(() => {
        console.log('hit');
        const teams = fetchTeamsByConf('east');
        console.log(teams);
    }, []);

    return (
        <View style={styles.container}>

        </View>
    );
};

const styles = StyleSheet.create({
  container: {},
});

export default Teams;