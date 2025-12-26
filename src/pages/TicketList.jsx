import React, { useState } from 'react';
import { Button, Table, Card } from 'zinnect-components';

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
    <div className="ticket-list-container">
      <h1 className="ticket-list-title">Helpdesk Tickets</h1>
      
      <div className="ticket-list-actions">
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

