import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetch';

function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

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
        maxWidth: '900px',
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
              📝 BlogDash
            </h1>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
              Post Details
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
          >
            🚪 Logout
          </button>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/dashboard')}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'white',
            color: '#667eea',
            border: '2px solid #667eea',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#667eea';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = '#667eea';
          }}
        >
          ← Back to Dashboard
        </button>

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
              Loading post details...
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

        {/* Post Content */}
        {data && !loading && !error && (
          <div style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            {/* Post Badge */}
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Post #{data.id}
            </div>

            {/* Title */}
            <h1 style={{
              margin: '0 0 1.5rem 0',
              color: '#333',
              fontSize: '2.5rem',
              lineHeight: '1.3',
              textTransform: 'capitalize'
            }}>
              {data.title}
            </h1>

            {/* Author Info */}
            <div style={{
              padding: '1.5rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: '600'
              }}>
                {data.userId}
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: '600', color: '#333' }}>
                  User {data.userId}
                </p>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                  Author of this post
                </p>
              </div>
            </div>

            {/* Body */}
            <div style={{
              fontSize: '1.15rem',
              lineHeight: '1.8',
              color: '#444',
              padding: '1.5rem',
              background: '#fafafa',
              borderRadius: '8px',
              borderLeft: '4px solid #667eea'
            }}>
              {data.body}
            </div>

            {/* URL Info */}
            <div style={{
              marginTop: '2rem',
              padding: '1rem',
              background: '#e7f3ff',
              borderRadius: '8px',
              borderLeft: '4px solid #2196f3'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                <strong>📍 Dynamic Route:</strong> <code>/dashboard/post/:postId</code>
              </p>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#666' }}>
                <strong>Current URL:</strong> <code>{window.location.pathname}</code>
              </p>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#666' }}>
                <strong>Post ID (from useParams):</strong> <code>{postId}</code>
              </p>
            </div>
          </div>
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

export default PostDetail;
