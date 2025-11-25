import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetch';

function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{
              margin: 0,
              marginBottom: '0.25rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '2rem'
            }}>
              📝 BlogDash Dashboard
            </h1>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
              Browse and explore blog posts
            </p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: '0.75rem 1.5rem',
              background: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 4px 12px rgba(231, 76, 60, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(231, 76, 60, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.3)';
            }}
          >
            🚪 Logout
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              display: 'inline-block',
              width: '50px',
              height: '50px',
              border: '5px solid #f3f3f3',
              borderTop: '5px solid #667eea',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <p style={{ marginTop: '1rem', color: '#666', fontSize: '1.1rem' }}>
              Loading posts...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            borderLeft: '4px solid #e74c3c'
          }}>
            <h3 style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>Error</h3>
            <p style={{ color: '#666' }}>{error.message}</p>
          </div>
        )}

        {/* Posts Grid */}
        {data && !loading && !error && (
          <>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}>
              <h2 style={{ margin: 0, color: '#333' }}>
                All Blog Posts ({data.length} total)
              </h2>
              <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>
                Click on any post to view its full details
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '1.5rem'
            }}>
              {data.slice(0, 20).map(post => (
                <Link
                  key={post.id}
                  to={`/dashboard/post/${post.id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <div
                    style={{
                      background: 'white',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(102, 126, 234, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                    }}
                  >
                    <div style={{
                      display: 'inline-block',
                      padding: '0.4rem 0.8rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      alignSelf: 'flex-start'
                    }}>
                      Post #{post.id}
                    </div>
                    
                    <h3 style={{
                      margin: '0 0 0.75rem 0',
                      color: '#667eea',
                      fontSize: '1.2rem',
                      textTransform: 'capitalize',
                      lineHeight: '1.4'
                    }}>
                      {post.title}
                    </h3>
                    
                    <p style={{
                      margin: 0,
                      color: '#666',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      flex: 1
                    }}>
                      {post.body.substring(0, 120)}...
                    </p>
                    
                    <div style={{
                      marginTop: '1rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid #e0e0e0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      color: '#999'
                    }}>
                      <span>👤 User {post.userId}</span>
                      <span style={{
                        color: '#667eea',
                        fontWeight: '600'
                      }}>
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
