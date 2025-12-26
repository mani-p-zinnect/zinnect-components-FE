import React from 'react';
import { Button } from 'zinnect-components';
import TicketList from './pages/TicketList';
import './App.css';

function App() {
  const handleLogout = () => {
    console.log('Logout');
    alert('Logout functionality');
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Zinnec Helpdesk</h1>
        <Button variant="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </header>
      
      <main>
        <TicketList />
      </main>
    </div>
  );
}

export default App;

