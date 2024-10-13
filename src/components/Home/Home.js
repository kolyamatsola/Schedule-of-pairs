import React from 'react';
import logo from './logo.svg';
import './Home.css';
import App from '../../App';

function Home() {
    
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-text">
                    <h1>Schedule of pairs</h1>
                    <h2>Цей сайт створено для швидкого створення та перегляду розкладу занять.</h2>
                </div>
            </header>
        </div>
    
    )
}

export default Home;