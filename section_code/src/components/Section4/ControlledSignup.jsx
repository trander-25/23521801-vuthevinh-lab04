import { useState } from 'react';

function ControlledSignup() {
  // Single state object for all form fields
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Single change handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Dynamically update the correct key using computed property name
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the form data
    console.log('Form Data Submitted:', formData);
    
    // Display alert with submitted data
    alert(`Submitted:\nEmail: ${formData.email}\nPassword: ${formData.password}`);
  };

  return (
    <div style={{
      padding: '1.5rem',
      background: '#f8f9fa',
      borderRadius: '8px',
      maxWidth: '500px'
    }}>
      <h4 style={{ marginBottom: '1rem' }}>Controlled Signup Form</h4>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #ddd',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #ddd',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500'
          }}
        >
          Sign Up
        </button>
      </form>

      <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        background: 'white',
        borderRadius: '6px'
      }}>
        <h5 style={{ marginBottom: '0.5rem' }}>Current State:</h5>
        <pre style={{ fontSize: '0.9rem', color: '#667eea' }}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>

      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        <strong>Note:</strong> This is a controlled component. Each input's value is
        tied to React state, and onChange updates the state dynamically using the
        input's name attribute.
      </p>
    </div>
  );
}

export default ControlledSignup;
