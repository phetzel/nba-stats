import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import { fetchTeamsByConf } from '../api/nba';
import ActivityIndicator from './ActivityIndicator';
import TeamListItem from './TeamListItem';

const TeamList = ({ conf }) => {
    const [teams, setTeams] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchTeamsByConf(conf, setTeams, setLoading);
    }, [conf]);

    if (loading) return <ActivityIndicator visible={loading} />;
    return (
        <View style={styles.container}>
            { teams &&
                <FlatList
                    contentContainerStyle={{ flexGrow: 1 }}
                    data={teams}
                    keyExtractor={team => team.teamId.toString()}
                    renderItem={({item}) => (
                        <TeamListItem
                            allStar={item.allStar}
                            fullName={item.fullName}
                            logo={item.logo}
                            teamId={item.teamId} />
                    )}
                />
            }
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
      height: '100%',
  },
});

export default TeamList;