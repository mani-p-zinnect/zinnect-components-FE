import React from 'react';
import { Button } from 'zinnect-components';
import TicketList from './TicketList';
import ContactPageExample from './example-usage';

/**
 * Main App component - Zinnect Helpdesk Application
 * Demonstrates usage of zinnect-components library
 */
function App() {
  const [currentPage, setCurrentPage] = React.useState('tickets');

  return (
    <div className="App">
      <header style={{ 
        padding: '20px', 
        backgroundColor: '#f5f5f5',
        borderBottom: '2px solid #e0e0e0',
        marginBottom: '20px'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{ margin: 0, color: '#333' }}>Zinnect Helpdesk</h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button 
              variant={currentPage === 'tickets' ? 'primary' : 'secondary'}
              onClick={() => setCurrentPage('tickets')}
            >
              Tickets
            </Button>
            <Button 
              variant={currentPage === 'contacts' ? 'primary' : 'secondary'}
              onClick={() => setCurrentPage('contacts')}
            >
              Contacts
            </Button>
            <Button variant="secondary">Logout</Button>
          </div>
        </div>
      </header>
      
      <main>
        {currentPage === 'tickets' && <TicketList />}
        {currentPage === 'contacts' && <ContactPageExample />}
      </main>
    </div>
  );
}

export default App;

