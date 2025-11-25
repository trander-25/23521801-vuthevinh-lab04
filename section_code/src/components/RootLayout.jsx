import { Outlet, Link, useLocation } from 'react-router-dom';

function RootLayout() {
  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <nav style={{
        background: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '1.5rem', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginRight: '2rem'
          }}>
            Lab 4 - React
          </h1>
          
          <Link to="/" style={getLinkStyle(location.pathname === '/')}>
            🏠 Home
          </Link>
          <Link to="/about" style={getLinkStyle(location.pathname === '/about')}>
            ℹ️ About
          </Link>
          <Link to="/users/123" style={getLinkStyle(location.pathname.startsWith('/users'))}>
            👤 User Profile
          </Link>
          
          <div style={{ borderLeft: '2px solid #ddd', height: '30px', margin: '0 0.5rem' }}></div>
          
          <Link to="/sections/1" style={getLinkStyle(location.pathname === '/sections/1')}>
            Section 1
          </Link>
          <Link to="/sections/2" style={getLinkStyle(location.pathname === '/sections/2')}>
            Section 2
          </Link>
          <Link to="/sections/3" style={getLinkStyle(location.pathname === '/sections/3')}>
            Section 3
          </Link>
          <Link to="/sections/4" style={getLinkStyle(location.pathname === '/sections/4')}>
            Section 4
          </Link>
          <Link to="/sections/6" style={getLinkStyle(location.pathname === '/sections/6')}>
            Section 6
          </Link>
          <Link to="/sections/7" style={getLinkStyle(location.pathname === '/sections/7')}>
            Section 7
          </Link>
          
          <div style={{ borderLeft: '2px solid #ddd', height: '30px', margin: '0 0.5rem' }}></div>
          
          <Link to="/login" style={getLinkStyle(location.pathname.startsWith('/login') || location.pathname.startsWith('/dashboard'))}>
            📝 BlogDash
          </Link>
        </div>
      </nav>

      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <Outlet />
      </main>
    </div>
  );
}

function getLinkStyle(isActive) {
  return {
    textDecoration: 'none',
    color: isActive ? '#667eea' : '#333',
    fontWeight: isActive ? '600' : '500',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    background: isActive ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
    transition: 'all 0.3s ease',
    border: isActive ? '2px solid #667eea' : '2px solid transparent'
  };
}

export default RootLayout;
