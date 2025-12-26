# Zinnect Helpdesk - Frontend Application

Example Zinnect Helpdesk application demonstrating usage of `zinnect-components` library.

## Installation

### Step 1: Install Dependencies

```bash
npm install
```

This will automatically install `zinnect-components` from GitHub (as specified in `package.json`).

### Step 2: Update Component Library URL

Before installing, update the GitHub URL in `package.json`:

```json
{
  "dependencies": {
    "zinnect-components": "git+https://github.com/YOUR_USERNAME/zinnect-components.git"
  }
}
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Run the Application

```bash
npm start
```

The app will open at `http://localhost:3000`

## Project Structure

```
frontend/
├── App.jsx                 # Main app component
├── TicketList.jsx          # Ticket list page using components
├── example-usage.jsx       # Contact page examples
├── package.json
└── README.md
```

## Usage Examples

### Using Button Component

```javascript
import { Button } from 'zinnect-components';

<Button variant="primary" onClick={() => console.log('Clicked')}>
  Click Me
</Button>
```

### Using Table Component

```javascript
import { Table } from 'zinnect-components';

const data = [
  { id: 1, name: 'Item 1', status: 'Active' },
  { id: 2, name: 'Item 2', status: 'Pending' }
];

<Table data={data} />
```

### Using Card Component

```javascript
import { Card } from 'zinnect-components';

<Card title="My Card" footer="Footer text">
  <p>Card content goes here</p>
</Card>
```

## Updating Component Library

### Update to Latest Version

```bash
npm update zinnect-components
```

### Update to Specific Version

```bash
npm uninstall zinnect-components
npm install git+https://github.com/yourusername/zinnect-components.git#v1.0.1
```

### Local Development (npm link)

For faster development when working on both projects:

```bash
# In zinnect-components directory
cd ../plugin
npm link

# In this project
cd ../frontend
npm link zinnect-components
```

## Troubleshooting

### Components not found

Make sure the component library is installed:

```bash
npm install
```

### Build errors

Clear cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Peer dependency warnings

Ensure React 18 is installed:

```bash
npm install react@^18.2.0 react-dom@^18.2.0
```

