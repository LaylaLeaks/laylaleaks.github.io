import React, { useState, useEffect } from 'react';
import './App.css';
import moonIcon from './img/moon.svg';
import sunIcon from './img/sun.svg';
import avatarImage from './img/avatar.png';

const avatarStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '50px'
}

const imgStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  objectFit: 'cover',
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [icon, setIcon] = useState(moonIcon);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      setIcon(sunIcon);
    } else {
      document.body.classList.remove('dark-mode');
      setIcon(moonIcon);
    }
  }, [darkMode]);

  return (
      <main>
        <header className={`main-header ${darkMode ? 'dark-mode' : ''}`}>
          <div className='header-content'>
            <h1 className='App'><a href='/'>LaylaLeaks</a></h1>
            <nav className='main-nav'>
              <a href='https://www.youtube.com/channel/UCcea1MM2jByJkxcJ6rGGxOw' target='_blank'><i className="fa-brands fa-youtube"></i></a>
              <a href='https://www.twitch.tv/layla_leaks' target='_blank'><i className="fa-brands fa-twitch"></i></a>
              <a href='https://twitter.com/Layla_Leaks' target='_blank'><i className="fa-brands fa-twitter"></i></a>
              <a href='https://www.instagram.com/layla.leaks/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
              <a href='https://github.com/LaylaLeaks' target='_blank'><i className="fa-brands fa-github"></i></a>
              <a href='https://discord.com/invite/yYCmg9rMbK' target='_blank'><i className="fa-brands fa-discord"></i></a>
              <a href='https://www.paypal.com/paypalme/laylaaleaks' target='_blank'><i className="fa-brands fa-paypal"></i></a>
            </nav>
            <button onClick={toggleDarkMode} className='toggle-button'>
              {darkMode ? <img src={sunIcon} alt='sun icon'/> : <img src={moonIcon} alt='moon icon'/> }
            </button>
          </div>
        </header>
        <main>
          <div className='avatar' style={avatarStyle}>
            <img src={avatarImage} alt='avatar' style={imgStyle}/>
          </div>
        </main>
        <h1 className='headline'>Welcome to the Page by LaylaLeaks!</h1>
        <main className='button-container'>
          
        </main>
      </main>
  )
}

export default App;
