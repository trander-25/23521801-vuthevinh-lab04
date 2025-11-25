import { useRef } from 'react';

function UncontrolledLogin() {
  // Create a ref to store the input element reference
  const usernameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Access the input value through the ref
    const username = usernameRef.current.value;
    
    if (username.trim()) {
      alert(`Username submitted: ${username}`);
    } else {
      alert('Please enter a username');
    }
  };

  return (
    <div style={{
      padding: '1.5rem',
      background: '#f8f9fa',
      borderRadius: '8px',
      maxWidth: '400px'
    }}>
      <h4 style={{ marginBottom: '1rem' }}>Uncontrolled Login Form</h4>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            ref={usernameRef}
            placeholder="Enter your username"
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
          Submit
        </button>
      </form>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        <strong>Note:</strong> This is an uncontrolled component. The input value is accessed
        via useRef instead of being controlled by React state.
      </p>
    </div>
  );
}

export default UncontrolledLogin;
