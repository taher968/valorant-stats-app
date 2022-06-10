import React from 'react'

const Display = ({ userData }) => {
    return (
        <div>
            <h2>In your last 5 matches: </h2>
            <h3>Your average KD ratio is {userData[0].kdratio_total}</h3>
            <h3>Your average kills per match is {userData[0].average_kills_total}</h3>
            <h3>Your average deaths per match is {userData[0].average_deaths_total}</h3>
            <h3>Your average assists per match is {userData[0].average_assists_total}</h3>
            <h3>Your average headshots per match is {userData[0].average_headshots_total}</h3>
        </div>
    )
}

export default Display