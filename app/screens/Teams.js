import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import TeamList from '../components/TeamList';
import TeamSwitch from '../components/TeamSwitch';

const Teams = (props) => {
    const [conf, setConf] = useState('west');

    return (
        <Screen>
            <View style={styles.container}>
                <TeamSwitch conf={conf} setConf={setConf} />
                <TeamList conf={conf} />
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
  container: {},
});

export default Teams;