import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as socket from '../../socket';
import * as userService from '../../services/userService';
import Nav from '../../components/Nav/Nav';
import GamePage from '../GamePage/GamePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(userService.getUser());
  const [game, setGame] = useState(null);
  
  useEffect(function() {
    socket.registerSetGame(setGame);
    if (user) socket.getActive();
  }, [user]);

  async function handleSignupOrLogin() {
    const user = userService.getUser();
    if (user) {
      socket.getActive();
      setUser(user);
    }
  }

  function handleLogout() {
    socket.logout();
    userService.logout();
    setUser(null);
    setGame(null);
  }

  function handlePlayAgain() {
    socket.newGame();
  }

  return (
    <div className="App">
      <Nav
        user={user}
        game={game}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path='/' element={
          user ? 
            <GamePage user={user} game={game} handlePlayAgain={handlePlayAgain} />
            :
            <h2 className='App-msg'>Sign Up or Login<br/>to<br/>Play</h2>
        } />
        <Route path='/signup' element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} />} />
        <Route path='/login' element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} />} />
      </Routes>
    </div>
  );
}

