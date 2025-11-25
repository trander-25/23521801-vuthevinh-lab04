import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useAuth } from '../context/AuthContext';

export const Dashboard = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const { logout } = useAuth();

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingSpinner}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.errorBox}>
          <h2 style={styles.errorTitle}>⚠️ Error Loading Posts</h2>
          <p style={styles.errorMessage}>{error}</p>
          <button onClick={() => window.location.reload()} style={styles.retryButton}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Limit to first 10 posts for better UX
  const posts = data?.slice(0, 10) || [];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>BlogDash</h1>
          <p style={styles.subtitle}>Your Blog Dashboard</p>
        </div>
        <button onClick={logout} style={styles.logoutButton}>
          Log Out
        </button>
      </header>

      <div style={styles.content}>
        <div style={styles.statsBar}>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>{posts.length}</span>
            <span style={styles.statLabel}>Total Posts</span>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>100</span>
            <span style={styles.statLabel}>Total Available</span>
          </div>
        </div>

        <h2 style={styles.sectionTitle}>📝 Recent Posts</h2>
        
        <div style={styles.postsList}>
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/dashboard/post/${post.id}`}
              style={styles.postCard}
              className="post-card"
            >
              <div style={styles.postHeader}>
                <span style={styles.postId}>#{post.id}</span>
                <span style={styles.postArrow}>→</span>
              </div>
              <h3 style={styles.postTitle}>{post.title}</h3>
              <p style={styles.postBody}>
                {post.body.substring(0, 100)}...
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .post-card {
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .post-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.25);
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  header: {
    background: 'white',
    padding: '1.5rem 2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#1a202c',
    margin: 0,
  },
  subtitle: {
    color: '#718096',
    margin: '0.25rem 0 0 0',
    fontSize: '0.875rem',
  },
  logoutButton: {
    padding: '0.625rem 1.25rem',
    background: '#e53e3e',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  statsBar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  statCard: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#667eea',
  },
  statLabel: {
    fontSize: '0.875rem',
    color: '#718096',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: '1.5rem',
  },
  postsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  postCard: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'block',
    color: 'inherit',
  },
  postHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
  },
  postId: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#667eea',
    background: '#eef2ff',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
  },
  postArrow: {
    fontSize: '1.25rem',
    color: '#cbd5e0',
  },
  postTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: '0.75rem',
    textTransform: 'capitalize',
    lineHeight: '1.4',
  },
  postBody: {
    fontSize: '0.875rem',
    color: '#718096',
    lineHeight: '1.6',
  },
  loadingSpinner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    gap: '1rem',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '4px solid #e2e8f0',
    borderTop: '4px solid #667eea',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  loadingText: {
    fontSize: '1.125rem',
    color: '#4a5568',
    fontWeight: '500',
  },
  errorBox: {
    background: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    maxWidth: '500px',
    margin: '2rem auto',
    textAlign: 'center',
  },
  errorTitle: {
    fontSize: '1.5rem',
    color: '#e53e3e',
    marginBottom: '1rem',
  },
  errorMessage: {
    color: '#718096',
    marginBottom: '1.5rem',
  },
  retryButton: {
    padding: '0.75rem 1.5rem',
    background: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
};
