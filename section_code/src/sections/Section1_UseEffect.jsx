import { useState } from 'react';
import MouseTracker from '../components/Section1/MouseTracker';

function Section1_UseEffect() {
  const [showMouseTracker, setShowMouseTracker] = useState(false);

  return (
    <div className="section-container">
      <h2 className="section-title">Section 1: The useEffect Hook</h2>

      <div className="exercise-card">
        <h3>1.3 Practical Exercise: MouseTracker with Cleanup</h3>
        <p>
          This component demonstrates the cleanup function in useEffect to prevent memory leaks
          by removing event listeners when the component unmounts.
        </p>
        <button onClick={() => setShowMouseTracker(!showMouseTracker)}>
          {showMouseTracker ? 'Hide' : 'Show'} MouseTracker
        </button>
        {showMouseTracker && (
          <div style={{ marginTop: '1rem' }}>
            <MouseTracker />
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
              <strong>Instructions:</strong> Open the browser console (F12) and move your mouse.
              You'll see the coordinates logged. Click "Hide MouseTracker" to unmount the component
              and verify that the event listener is properly cleaned up.
            </p>
          </div>
        )}
      </div>

      <div className="exercise-card">
        <h3>Conceptual Questions Answers</h3>
        <div className="output-box" style={{ background: '#f0f4ff' }}>
          <p><strong>1. Purpose of useEffect:</strong></p>
          <p style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
            useEffect is used to synchronize React components with external systems (APIs, DOM, timers, subscriptions).
            It's an "escape hatch" because it allows side effects that don't fit into React's pure rendering model.
          </p>

          <p style={{ marginTop: '1rem' }}><strong>2. Effect Lifecycle vs Class Lifecycle:</strong></p>
          <p style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
            Effects think in terms of "start/stop synchronizing" rather than "mount/update/unmount".
            The same effect can run multiple times (on each dependency change), whereas class lifecycle
            methods split this into three separate methods (componentDidMount, componentDidUpdate, componentWillUnmount).
          </p>

          <p style={{ marginTop: '1rem' }}><strong>3. Strict Mode Double Invocation:</strong></p>
          <p style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
            React Strict Mode runs setup+cleanup twice on mount to expose bugs where cleanup doesn't
            properly undo the setup. This helps catch missing cleanup logic that would cause memory
            leaks or duplicate subscriptions in production.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1_UseEffect;
