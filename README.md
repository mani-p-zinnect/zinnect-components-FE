# Zinnec Helpdesk

Helpdesk application using the zinnec-components library.

## Installation

```bash
# Install dependencies
npm install
```

## Usage

```bash
# Start development server
npm start

# Build for production
npm run build
```

## Component Library Integration

This project uses `zinnec-components` installed from GitHub:

```json
{
  "dependencies": {
    "zinnec-components": "git+https://github.com/yourusername/zinnec-components.git"
  }
}
```

### Updating Component Library

```bash
# Update to latest version
npm update zinnec-components

# OR reinstall
npm uninstall zinnec-components
npm install git+https://github.com/yourusername/zinnec-components.git

# OR update to specific version
npm install git+https://github.com/yourusername/zinnec-components.git#v1.0.1
```

### Local Development Setup

For faster development, link the component library locally:

```bash
# Terminal 1: In zinnec-components directory
cd ../zinnec-components
npm link
npm run dev  # Watch for changes

# Terminal 2: In zinnec-helpdesk directory
cd zinnec-helpdesk
npm link zinnec-components
npm start
```

Now changes in components automatically reflect in helpdesk!

### Unlink When Done

```bash
# In helpdesk
npm unlink zinnec-components

# Reinstall from GitHub
npm install
```

## Project Structure

```
zinnec-helpdesk/
├── src/
│   ├── pages/
│   │   └── TicketList.jsx    # Example page using components
│   ├── App.jsx               # Main app component
│   ├── App.css
│   └── index.js              # Entry point
├── public/
│   └── index.html
├── package.json
└── README.md
```

