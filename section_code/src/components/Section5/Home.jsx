import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>Home Page</h2>
      <p style={{ marginBottom: '1.5rem', color: '#666' }}>
        Welcome to the React Router demonstration! This page demonstrates the basic setup with <code>createBrowserRouter</code> and <code>RouterProvider</code>.
      </p>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Key Concepts:</h3>
        <ul style={{ marginLeft: '2rem', color: '#666' }}>
          <li>✅ Router configuration with <code>createBrowserRouter</code></li>
          <li>✅ <code>&lt;Link&gt;</code> component for navigation</li>
          <li>✅ Nested routes with <code>&lt;Outlet /&gt;</code></li>
          <li>✅ Dynamic routes with URL parameters</li>
        </ul>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link 
          to="/about"
          style={{
            padding: '0.75rem 1.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
            transition: 'all 0.3s ease'
          }}
        >
          Go to About Page →
        </Link>
        
        <Link 
          to="/users/123"
          style={{
            padding: '0.75rem 1.5rem',
            background: '#764ba2',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(118, 75, 162, 0.3)',
            transition: 'all 0.3s ease'
          }}
        >
          View User Profile (ID: 123) →
        </Link>
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: '#f8f9fa',
        borderRadius: '8px',
        borderLeft: '4px solid #667eea'
      }}>
        <strong>💡 Notice:</strong> The URL in your browser's address bar changes when you navigate!
      </div>
    </div>
  );
}

export default Home;
