import key from '../key/key';

const settings = {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": key.rapidApiKey,
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
    }
}

export const fetchTeamsByConf = (conf) => {
    const url = `https://api-nba-v1.p.rapidapi.com/teams/confName/${conf}`;
    
    fetch(url, settings)
        .then(res => console.log(res))
        .catch(err => console.log(err))
};
