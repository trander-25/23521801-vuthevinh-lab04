import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data: post, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingSpinner}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Loading post #{postId}...</p>
        </div>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.errorBox}>
          <h2 style={styles.errorTitle}>⚠️ Error Loading Post</h2>
          <p style={styles.errorMessage}>{error}</p>
          <button onClick={() => navigate('/dashboard')} style={styles.backButton}>
            ← Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div style={styles.container}>
        <div style={styles.errorBox}>
          <h2 style={styles.errorTitle}>📭 Post Not Found</h2>
          <p style={styles.errorMessage}>The requested post could not be found.</p>
          <button onClick={() => navigate('/dashboard')} style={styles.backButton}>
            ← Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.navigation}>
        <button onClick={() => navigate('/dashboard')} style={styles.backButton}>
          ← Back to Dashboard
        </button>
      </div>

      <article style={styles.article}>
        <header style={styles.header}>
          <div style={styles.metadata}>
            <span style={styles.postId}>Post #{post.id}</span>
            <span style={styles.userId}>Author ID: {post.userId}</span>
          </div>
          <h1 style={styles.title}>{post.title}</h1>
        </header>

        <div style={styles.content}>
          <p style={styles.body}>{post.body}</p>
        </div>

        <footer style={styles.footer}>
          <div style={styles.actions}>
            <button style={styles.actionButton}>👍 Like</button>
            <button style={styles.actionButton}>💬 Comment</button>
            <button style={styles.actionButton}>🔖 Save</button>
            <button style={styles.actionButton}>📤 Share</button>
          </div>
        </footer>
      </article>

      <aside style={styles.sidebar}>
        <h3 style={styles.sidebarTitle}>Post Information</h3>
        <div style={styles.infoGrid}>
          <div style={styles.infoItem}>
            <span style={styles.infoLabel}>Post ID</span>
            <span style={styles.infoValue}>{post.id}</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.infoLabel}>User ID</span>
            <span style={styles.infoValue}>{post.userId}</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.infoLabel}>Characters</span>
            <span style={styles.infoValue}>{post.body.length}</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.infoLabel}>Words</span>
            <span style={styles.infoValue}>{post.body.split(' ').length}</span>
          </div>
        </div>

        <div style={styles.relatedSection}>
          <h4 style={styles.relatedTitle}>Quick Navigation</h4>
          <div style={styles.relatedLinks}>
            {postId > 1 && (
              <button
                onClick={() => navigate(`/dashboard/post/${Number(postId) - 1}`)}
                style={styles.navButton}
              >
                ← Previous Post
              </button>
            )}
            {postId < 100 && (
              <button
                onClick={() => navigate(`/dashboard/post/${Number(postId) + 1}`)}
                style={styles.navButton}
              >
                Next Post →
              </button>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    padding: '2rem',
  },
  navigation: {
    maxWidth: '1200px',
    margin: '0 auto 1.5rem auto',
  },
  backButton: {
    padding: '0.625rem 1.25rem',
    background: 'white',
    color: '#667eea',
    border: '2px solid #667eea',
    borderRadius: '6px',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  article: {
    maxWidth: '800px',
    margin: '0 auto 2rem auto',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    overflow: 'hidden',
  },
  header: {
    padding: '2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
  },
  metadata: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    fontSize: '0.875rem',
  },
  postId: {
    background: 'rgba(255,255,255,0.2)',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontWeight: '600',
  },
  userId: {
    background: 'rgba(255,255,255,0.2)',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
    textTransform: 'capitalize',
    lineHeight: '1.3',
  },
  content: {
    padding: '2rem',
  },
  body: {
    fontSize: '1.125rem',
    lineHeight: '1.8',
    color: '#2d3748',
  },
  footer: {
    padding: '1.5rem 2rem',
    borderTop: '1px solid #e2e8f0',
    background: '#f7fafc',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  actionButton: {
    padding: '0.625rem 1.25rem',
    background: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontWeight: '500',
  },
  sidebar: {
    maxWidth: '800px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  sidebarTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: '1rem',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    padding: '1rem',
    background: '#f7fafc',
    borderRadius: '8px',
  },
  infoLabel: {
    fontSize: '0.75rem',
    color: '#718096',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: '600',
  },
  infoValue: {
    fontSize: '1.25rem',
    color: '#667eea',
    fontWeight: 'bold',
  },
  relatedSection: {
    borderTop: '1px solid #e2e8f0',
    paddingTop: '1.5rem',
  },
  relatedTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: '1rem',
  },
  relatedLinks: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  navButton: {
    padding: '0.625rem 1.25rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    flex: '1',
    minWidth: '150px',
  },
  loadingSpinner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
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
};
