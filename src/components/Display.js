import React from 'react'

const Display = ({ userData }) => {
    return (
        <div>
            <h2>Your KD ratio from your previous 5 matches is {userData[0].kdratio_total}</h2>
        </div>
    )
}

export default Display