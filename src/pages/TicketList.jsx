import React, { useState } from 'react';
import { Button, Table, Card } from 'zinnec-components';

function TicketList() {
  const [tickets] = useState([
    { id: 1, title: 'Login Issue', status: 'Open', priority: 'High' },
    { id: 2, title: 'Password Reset', status: 'Closed', priority: 'Low' },
    { id: 3, title: 'Bug Report', status: 'In Progress', priority: 'Medium' },
    { id: 4, title: 'Feature Request', status: 'Open', priority: 'High' },
    { id: 5, title: 'Account Access', status: 'Resolved', priority: 'Medium' }
  ]);

  const handleCreateTicket = () => {
    console.log('Create new ticket');
    alert('Create new ticket functionality');
  };

  const handleViewTicket = (ticketId) => {
    console.log('View ticket:', ticketId);
    alert(`Viewing ticket #${ticketId}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>Helpdesk Tickets</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <Button variant="primary" onClick={handleCreateTicket}>
          Create New Ticket
        </Button>
      </div>

      <Card title="Active Tickets" footer={`Total: ${tickets.length} tickets`}>
        <Table data={tickets} columns={['id', 'title', 'status', 'priority']} />
      </Card>
    </div>
  );
}

export default TicketList;

