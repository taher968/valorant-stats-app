import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Display from './components/Display'

function App() {
  const [userData, setUserData] = useState([

  ])
  const submitForm = async (e) => {
    const username = e.target.elements.username.value
    const tagline = e.target.elements.tagline.value
    const region = "na"
    e.preventDefault()
    const api_call = await fetch(`https://api.henrikdev.xyz/valorant/v3/matches/${region}/${username}/${tagline}`)
    const data = await api_call.json()
    let kills = 0;
    let deaths = 0;



    for( var i in data.data) {
      for(var j in data.data[i].players.all_players) {
        if(data.data[i].players.all_players[j].name == username) {
          kills = kills + data.data[i].players.all_players[j].stats.kills
          deaths = deaths + data.data[i].players.all_players[j].stats.deaths
        }
      }
    }
    console.log(kills)
    console.log(deaths)
    let kdratio = kills/deaths
    console.log(kdratio)
    const userDataKD = [{
      kills_total: kills,
      deaths_total: deaths,
      kdratio_total: kdratio
    }]
    setUserData(userDataKD)
    console.log(userDataKD)

  }
  return (
    <div className="App">
      <h1>Valorant KD Ratio Calculator</h1> 
      <form className='add-form' onSubmit={submitForm}>
        <div className='form-control'>
        <input type="text" id="username" placeholder="Enter Username" name="username"></input>
        <input type="text" id="tagline" placeholder="Enter Tagline" name="tagline"></input>
        </div>
        <input type='submit' value="submit" className='btn btn-block'></input>
      </form>

      {userData.length > 0 ? (<Display userData={userData} />) : ''}
    </div>
  );
}

export default App;
