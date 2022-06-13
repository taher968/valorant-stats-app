import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import '../App.css'

const Stats = () => {
    const [userData, setUserData] = useState([

    ])
    const {username, tagline } = useParams()
    // const username = e.target.elements.username.value
    // const tagline = e.target.elements.tagline.value
    console.log(username);
    console.log(tagline);

    const run = async () => {
        const region = "na"
        const api_call = await fetch(`https://api.henrikdev.xyz/valorant/v3/matches/${region}/${username}/${tagline}`)
        const data = await api_call.json()
        let kills = 0;
        let deaths = 0;
        let assists = 0;
        let headshots = 0;
        for( var i in data.data) {
            for(var j in data.data[i].players.all_players) {
                if(data.data[i].players.all_players[j].name == username) {
                kills = kills + data.data[i].players.all_players[j].stats.kills
                deaths = deaths + data.data[i].players.all_players[j].stats.deaths
                assists = assists + data.data[i].players.all_players[j].stats.assists
                headshots = headshots + data.data[i].players.all_players[j].stats.headshots
                }
            }
        }
        console.log(kills)
        console.log(deaths)
        let kdratio = kills/deaths
        let average_kills = kills/5
        let average_deaths = deaths/5
        let average_assists = assists/5
        let average_headshots = headshots/5
        console.log(kdratio)
        const userDataKD = [{
            kills_total: kills,
            deaths_total: deaths,
            kdratio_total: kdratio,
            average_kills_total: average_kills,
            average_deaths_total: average_deaths,
            average_assists_total: average_assists,
            average_headshots_total: average_headshots
        }]
        setUserData(userDataKD)
        console.log(userDataKD)
    }

    run()

    if(userData.length <= 0) {
        return <div></div>
    } else {
        return (
            <div className="App">
                <h2>In your last 5 matches: </h2>
                <h3>Your average KD ratio is {userData[0].kdratio_total}</h3>
                <h3>Your average kills per match is {userData[0].average_kills_total}</h3>
                <h3>Your average deaths per match is {userData[0].average_deaths_total}</h3>
                <h3>Your average assists per match is {userData[0].average_assists_total}</h3>
                <h3>Your average headshots per match is {userData[0].average_headshots_total}</h3>
            </div>
        )
    }
}

export default Stats