import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>About Page</h2>
      <p style={{ marginBottom: '1.5rem', color: '#666' }}>
        This page demonstrates the <code>useNavigate</code> hook for programmatic navigation.
      </p>

      <div style={{
        padding: '1.5rem',
        background: '#f8f9fa',
        borderRadius: '8px',
        marginBottom: '1.5rem'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>useNavigate Hook</h3>
        <p style={{ color: '#666', marginBottom: '0.5rem' }}>
          The <code>useNavigate</code> hook returns a function that lets you navigate programmatically.
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
          {`const navigate = useNavigate();\nnavigate('/'); // Navigate to home`}
        </code>
      </div>

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
          fontSize: '1rem',
          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
        }}
      >
        ← Navigate Back to Home
      </button>

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: '#fff3cd',
        borderRadius: '8px',
        borderLeft: '4px solid #ffc107'
      }}>
        <strong>📍 Current URL:</strong> <code>{window.location.pathname}</code>
      </div>
    </div>
  );
}

export default About;
