import { useState, useEffect } from 'react';

function PostFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true); // Start loading
      
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        // Manual error checking for fetch
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json();
        setData(json); // Set the data
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err); // Set the error
        setData(null); // Clear any previous data
        console.error('Fetch error:', err);
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchPost();
  }, []); // Empty dependency array - fetch once on mount

  // Conditional rendering based on state
  if (loading) {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        Error: {error.message}
      </div>
    );
  }

  if (data) {
    return (
      <div style={{
        padding: '1.5rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '8px'
      }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{data.title}</h1>
        <p style={{ opacity: 0.9, lineHeight: '1.6' }}>{data.body}</p>
        <div style={{
          marginTop: '1rem',
          padding: '0.5rem',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '4px',
          fontSize: '0.9rem'
        }}>
          <strong>Post ID:</strong> {data.id} | <strong>User ID:</strong> {data.userId}
        </div>
      </div>
    );
  }

  return null;
}

export default PostFetcher;
