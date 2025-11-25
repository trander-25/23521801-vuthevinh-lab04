import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/users/123" style={linkStyle}>User 123</Link>
          <Link to="/users/456" style={linkStyle}>User 456</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  background: 'rgba(255,255,255,0.2)',
  fontWeight: '500',
  transition: 'all 0.3s ease'
};

export default Layout;
