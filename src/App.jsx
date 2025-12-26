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
      <header style={{ 
        padding: '20px', 
        backgroundColor: '#f5f5f5',
        borderBottom: '2px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0 }}>Zinnec Helpdesk</h1>
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

