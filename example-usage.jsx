/**
 * Example: How to use the Zinnect Contact Plugin in your main React app
 * 
 * This file demonstrates both NPM import and runtime loading approaches
 */

import React, { useState } from 'react';
// Option A: Import from NPM package
import { ContactView, DynamicForm, entityFieldMapper } from '@zinnect/contact-plugin';

// Example 1: Basic ContactView Usage
export const ContactPageExample = () => {
  const [contact, setContact] = useState({
    firstName: "Manikandan",
    lastName: "Pawnraj",
    email: "mani@zinnect.com",
    phone: "+1234567890",
    company: "Zinnect"
  });

  const handleUpdate = (updatedContact) => {
    console.log('Contact updated:', updatedContact);
    setContact(updatedContact);
    // Here you would typically make an API call
    // await updateContactAPI(updatedContact);
  };

  return (
    <div>
      <h2>Contact View Example</h2>
      <ContactView
        contactData={contact}
        mode="edit"
        onUpdate={handleUpdate}
        layoutConfig={{ name: 'Default Layout' }}
      />
    </div>
  );
};

// Example 2: DynamicForm with Schema
export const DynamicFormExample = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  });

  const schema = {
    sections: [
      {
        id: 'basic',
        title: 'Basic Information',
        collapsible: true,
        defaultCollapsed: false,
        isVisible: true,
        fields: [
          {
            key: 'firstName',
            label: 'First Name',
            type: 'text',
            required: true,
            placeholder: 'Enter first name'
          },
          {
            key: 'lastName',
            label: 'Last Name',
            type: 'text',
            required: true,
            placeholder: 'Enter last name'
          },
          {
            key: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            placeholder: 'Enter email address'
          }
        ]
      },
      {
        id: 'additional',
        title: 'Additional Information',
        collapsible: true,
        defaultCollapsed: true,
        isVisible: true,
        fields: [
          {
            key: 'phone',
            label: 'Phone',
            type: 'text',
            placeholder: 'Enter phone number'
          },
          {
            key: 'company',
            label: 'Company',
            type: 'text',
            placeholder: 'Enter company name'
          },
          {
            key: 'notes',
            label: 'Notes',
            type: 'textarea',
            rows: 4,
            placeholder: 'Enter any additional notes'
          }
        ]
      }
    ],
    required: ['firstName', 'lastName', 'email']
  };

  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
    // API call here
    // await createContactAPI(data);
  };

  const handleFieldChange = (field, value, allData) => {
    console.log(`Field ${field} changed to:`, value);
    setFormData(allData);
  };

  return (
    <div>
      <h2>Dynamic Form Example</h2>
      <DynamicForm
        schema={schema}
        initialData={formData}
        mode="create"
        onSubmit={handleSubmit}
        onFieldChange={handleFieldChange}
        fieldMapper={entityFieldMapper}
      />
    </div>
  );
};

// Example 3: Runtime Plugin Loading (for dynamic plugins)
export const RuntimePluginLoader = () => {
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [ContactViewComponent, setContactViewComponent] = useState(null);

  const loadPlugin = async (src) => {
    return new Promise((resolve, reject) => {
      // Check if already loaded
      if (window.ZinnectContactPlugin) {
        resolve(window.ZinnectContactPlugin);
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        if (window.ZinnectContactPlugin) {
          resolve(window.ZinnectContactPlugin);
        } else {
          reject(new Error('Plugin not found on window object'));
        }
      };
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  const handleLoadPlugin = async () => {
    try {
      const plugin = await loadPlugin('/plugins/contact-plugin.js');
      setContactViewComponent(() => plugin.ContactView);
      setPluginLoaded(true);
    } catch (error) {
      console.error('Failed to load plugin:', error);
    }
  };

  const contactData = {
    firstName: "Manikandan",
    lastName: "Pawnraj",
    email: "mani@zinnect.com"
  };

  return (
    <div>
      <h2>Runtime Plugin Loading Example</h2>
      {!pluginLoaded ? (
        <button onClick={handleLoadPlugin}>Load Plugin</button>
      ) : (
        ContactViewComponent && (
          <ContactViewComponent
            contactData={contactData}
            mode="view"
          />
        )
      )}
    </div>
  );
};

// Example 4: Zinnect-style Integration
export const ZinnectIntegrationExample = () => {
  const [contact, setContact] = useState(null);
  const [layoutConfig, setLayoutConfig] = useState(null);

  // Simulate fetching data from Zinnect API
  React.useEffect(() => {
    // This would come from your Zinnect API
    const fetchContactData = async () => {
      // const response = await fetch('/api/contacts/123');
      // const data = await response.json();
      
      // Mock data
      const mockData = {
        contact: {
          firstName: "Manikandan",
          lastName: "Pawnraj",
          email: "mani@zinnect.com",
          phone: "+1234567890",
          company: "Zinnect"
        },
        layoutConfig: {
          name: "Contact Detail Layout",
          sections: [
            { id: 'basic', visible: true },
            { id: 'additional', visible: true }
          ]
        }
      };

      setContact(mockData.contact);
      setLayoutConfig(mockData.layoutConfig);
    };

    fetchContactData();
  }, []);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Zinnect Integration Example</h2>
      <ContactView
        contactData={contact}
        mode="view"
        layoutConfig={layoutConfig}
        onUpdate={(updated) => {
          console.log('Update callback:', updated);
          // Handle update through Zinnect API
        }}
      />
    </div>
  );
};

