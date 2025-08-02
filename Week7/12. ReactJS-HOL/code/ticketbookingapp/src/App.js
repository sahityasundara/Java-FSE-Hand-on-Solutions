import React, { useState } from 'react';
import './App.css';

function App() {

  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  const handleLogout = () => SetIsLoggedIn(false);
  const handleLogin = () => SetIsLoggedIn(true);

  if (isLoggedIn) {
    return (
      <div className='App'>
        <h1>Welcome back</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }
  else {
    return (
      <div className='App'>
        <h1>Please sign up.</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
    )
  }
}

export default App;