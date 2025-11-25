import { MemoryRouter, Routes, Route, Link, Outlet, useNavigate, useParams } from 'react-router-dom';

// Home Component
function Home() {
  return (
    <div className="exercise-card">
      <h3>Home Page</h3>
      <p>Welcome to the React Router demonstration!</p>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/about" className="nav-link">
          Go to About Page
        </Link>
        <Link to="/users/123" className="nav-link">
          View User Profile (ID: 123)
        </Link>
      </div>
    </div>
  );
}

// About Component
function About() {
  const navigate = useNavigate();

  return (
    <div className="exercise-card">
      <h3>About Page</h3>
      <p>This is the about page demonstrating useNavigate hook.</p>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '0.6rem 1.2rem',
          background: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Navigate Back to Home
      </button>
    </div>
  );
}

// UserProfile Component with Dynamic Route
function UserProfile() {
  const { userId } = useParams();

  return (
    <div className="exercise-card">
      <h3>User Profile</h3>
      <h1 style={{ color: '#667eea', marginTop: '1rem' }}>
        Profile for User: {userId}
      </h1>
      <p style={{ marginTop: '1rem' }}>
        This component uses useParams() to read the userId from the URL.
      </p>
    </div>
  );
}

// Layout Component with Navigation
function Layout() {
  return (
    <div>
      <nav style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '1rem'
      }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '6px',
              fontWeight: '500'
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '6px',
              fontWeight: '500'
            }}
          >
            About
          </Link>
          <Link
            to="/users/456"
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '6px',
              fontWeight: '500'
            }}
          >
            User 456
          </Link>
        </div>
      </nav>
      
      {/* Outlet renders the child routes */}
      <Outlet />
    </div>
  );
}

function Section5_ReactRouter() {
  return (
    <div className="section-container">
      <h2 className="section-title">Section 5: React Router v6</h2>

      <div className="exercise-card">
        <h3>5.1 & 5.2: Router Setup with Nested Routes & Dynamic Params</h3>
        <p style={{ marginBottom: '1rem' }}>
          The router below demonstrates:
        </p>
        <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
          <li>Basic routing with createBrowserRouter and RouterProvider</li>
          <li>Layout component with Outlet for nested routes</li>
          <li>Dynamic route parameters with useParams</li>
          <li>Programmatic navigation with useNavigate</li>
          <li>Link components for declarative navigation</li>
        </ul>
      </div>

      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="users/:userId" element={<UserProfile />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </div>
  );
}

export default Section5_ReactRouter;
