import { useEffect, useState } from 'react';

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Event handler function
    const handleMouseMove = (e) => {
      console.log(`Mouse Position - X: ${e.clientX}, Y: ${e.clientY}`);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener when component mounts
    console.log('Adding mousemove event listener');
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function - removes event listener when component unmounts
    return () => {
      console.log('Removing mousemove event listener (cleanup)');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array - run once on mount

  return (
    <div style={{
      padding: '1.5rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h4>Mouse Position Tracker</h4>
      <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
        X: {position.x}, Y: {position.y}
      </p>
      <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: 0.9 }}>
        Move your mouse and check the console!
      </p>
    </div>
  );
}

export default MouseTracker;
