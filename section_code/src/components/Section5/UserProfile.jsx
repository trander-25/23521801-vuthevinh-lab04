import { useParams, useNavigate } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>User Profile</h2>
      
      <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        color: 'white',
        marginBottom: '1.5rem'
      }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>
          Profile for User: {userId}
        </h1>
      </div>

      <div style={{
        padding: '1.5rem',
        background: '#f8f9fa',
        borderRadius: '8px',
        marginBottom: '1.5rem'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>useParams Hook</h3>
        <p style={{ color: '#666', marginBottom: '0.5rem' }}>
          The <code>useParams</code> hook returns an object of key/value pairs of the dynamic params from the current URL.
        </p>
        <code style={{
          display: 'block',
          padding: '1rem',
          background: '#1e1e1e',
          color: '#d4d4d4',
          borderRadius: '6px',
          fontFamily: 'monospace',
          fontSize: '0.9rem'
        }}>
          {`const { userId } = useParams();\n// Route: /users/:userId\n// URL: /users/${userId}\n// userId = "${userId}"`}
        </code>
      </div>

      <div style={{
        padding: '1.5rem',
        background: '#e7f3ff',
        borderRadius: '8px',
        marginBottom: '1.5rem',
        borderLeft: '4px solid #2196f3'
      }}>
        <h3 style={{ marginBottom: '0.5rem', color: '#2196f3' }}>User Information</h3>
        <p style={{ margin: '0.5rem 0', color: '#666' }}><strong>User ID:</strong> {userId}</p>
        <p style={{ margin: '0.5rem 0', color: '#666' }}><strong>Route Pattern:</strong> <code>/users/:userId</code></p>
        <p style={{ margin: '0.5rem 0', color: '#666' }}><strong>Current URL:</strong> <code>{window.location.pathname}</code></p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '1rem'
          }}
        >
          ← Back to Home
        </button>

        <button
          onClick={() => navigate('/users/' + (parseInt(userId) + 1))}
          style={{
            padding: '0.75rem 1.5rem',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '1rem'
          }}
        >
          Next User (ID: {parseInt(userId) + 1}) →
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
