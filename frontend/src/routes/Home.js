import '../App.css';
import { useState } from 'react'
import { Link } from "react-router-dom";



function Home() {

    const [username, setUsername] = useState('');
    const [tagline, setTagline] = useState('');


    return (

        <div className="App">
            <h1>Valorant Stats App</h1> 
            <form className='add-form'>
                <div className='form-control'>
                <input type="text" id="username" placeholder="Enter Username" name="username" onInput={e => setUsername(e.target.value)}></input>
                <input type="text" id="tagline" placeholder="Enter Tagline" name="tagline" onInput={e => setTagline(e.target.value)}></input>
                </div>
                <Link to={`stats/${username}/${tagline}`} key={username}> <input type='submit' value="submit" className='btn btn-block'></input></Link>
            </form>

        </div>

    )

}

export default Home

