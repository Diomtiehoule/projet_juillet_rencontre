import React from 'react';
import { Link  } from 'react-router-dom';
import '../components/css/navbarHome.css'

function navbarHome() {
    return (
        <div  className='navbarHome'>
            <nav className='navHome'>
                <h1><span>our</span>Match</h1>
                <ul>
                    {/* <li>Accueil</li> */}
                    <li><Link to={`/login`}>Connexion</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default navbarHome;