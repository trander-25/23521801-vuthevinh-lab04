import { useState } from 'react';
import axios from 'axios';

function FetchVsAxiosDemo() {
  const [fetchResult, setFetchResult] = useState('');
  const [axiosResult, setAxiosResult] = useState('');

  const testFetch = async () => {
    setFetchResult('Loading...');
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      
      // Manual error checking required
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      
      // Manual JSON parsing required
      const data = await response.json();
      setFetchResult(`Success! Title: ${data.title}`);
    } catch (error) {
      setFetchResult(`Error: ${error.message}`);
    }
  };

  const testAxios = async () => {
    setAxiosResult('Loading...');
    try {
      // Automatic JSON parsing and error handling
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      setAxiosResult(`Success! Title: ${response.data.title}`);
    } catch (error) {
      setAxiosResult(`Error: ${error.message}`);
    }
  };

  const testFetch404 = async () => {
    setFetchResult('Loading...');
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/999999');
      
      // This demonstrates that fetch doesn't throw on 404
      console.log('Response OK:', response.ok); // Will be false
      
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      
      const data = await response.json();
      setFetchResult(`Success! Title: ${data.title}`);
    } catch (error) {
      setFetchResult(`Error caught: ${error.message}`);
    }
  };

  const testAxios404 = async () => {
    setAxiosResult('Loading...');
    try {
      // Axios will automatically throw on 404
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/999999');
      setAxiosResult(`Success! Title: ${response.data.title}`);
    } catch (error) {
      setAxiosResult(`Error automatically caught: ${error.message}`);
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
        <h4 style={{ marginBottom: '1rem', color: '#667eea' }}>Native fetch API</h4>
        <button
          onClick={testFetch}
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '0.5rem',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Test Success (200)
        </button>
        <button
          onClick={testFetch404}
          style={{
            width: '100%',
            padding: '0.75rem',
            background: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Test 404 Error
        </button>
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'white',
          borderRadius: '6px',
          minHeight: '60px'
        }}>
          {fetchResult || 'Click a button to test...'}
        </div>
      </div>

      <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
        <h4 style={{ marginBottom: '1rem', color: '#764ba2' }}>axios Library</h4>
        <button
          onClick={testAxios}
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '0.5rem',
            background: '#764ba2',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Test Success (200)
        </button>
        <button
          onClick={testAxios404}
          style={{
            width: '100%',
            padding: '0.75rem',
            background: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Test 404 Error
        </button>
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'white',
          borderRadius: '6px',
          minHeight: '60px'
        }}>
          {axiosResult || 'Click a button to test...'}
        </div>
      </div>
    </div>
  );
}

export default FetchVsAxiosDemo;
