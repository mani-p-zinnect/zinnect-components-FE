import React, { useState } from 'react';
import { Button, Table, Card } from 'zinnect-components';

/**
 * TicketList - Example Zinnect Helpdesk component using the component library
 */
function TicketList() {
  const [tickets] = useState([
    { id: 1, title: 'Login Issue', status: 'Open', priority: 'High', assignee: 'John Doe' },
    { id: 2, title: 'Password Reset', status: 'Closed', priority: 'Low', assignee: 'Jane Smith' },
    { id: 3, title: 'Bug Report', status: 'In Progress', priority: 'Medium', assignee: 'Bob Wilson' },
    { id: 4, title: 'Feature Request', status: 'Open', priority: 'High', assignee: 'Alice Brown' }
  ]);

  const handleCreateTicket = () => {
    console.log('Create new ticket');
    alert('Create new ticket clicked!');
  };

  const handleViewTicket = (ticketId) => {
    console.log('View ticket:', ticketId);
    alert(`View ticket ${ticketId}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0 }}>Helpdesk Tickets</h1>
        <Button variant="primary" onClick={handleCreateTicket}>
          Create New Ticket
        </Button>
      </div>

      <Card 
        title="Active Tickets" 
        footer={`Total: ${tickets.length} tickets`}
        variant="default"
      >
        <Table data={tickets} />
      </Card>

      <div style={{ marginTop: '20px' }}>
        <Card 
          title="Quick Actions"
          variant="primary"
        >
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button variant="secondary" onClick={() => console.log('Filter clicked')}>
              Filter
            </Button>
            <Button variant="success" onClick={() => console.log('Export clicked')}>
              Export
            </Button>
            <Button variant="danger" onClick={() => console.log('Delete clicked')}>
              Delete Selected
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default TicketList;

