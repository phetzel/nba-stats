import key from '../key/key';

const settings = {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": key.rapidApiKey,
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
    }
}

export const fetchTeamsByConf = (conf, func, setLoading) => {
    setLoading(true);
    const url = `https://api-nba-v1.p.rapidapi.com/teams/confName/${conf}`;
    
    fetch(url, settings)
        .then(response => response.json())
        .then(res => {
            func(res.api.teams);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        })
};
