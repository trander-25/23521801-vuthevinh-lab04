import useLocalStorage from '../hooks/useLocalStorage';

function Section7_CustomHooks() {
  // Use the custom hook - counter persists across page refreshes!
  const [count, setCount] = useLocalStorage('myCounter', 0);
  const [name, setName] = useLocalStorage('userName', '');

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="section-container">
      <h2 className="section-title">Section 7: Custom Hooks</h2>

      <div className="exercise-card">
        <h3>7.2 Practical Exercise: useLocalStorage Custom Hook</h3>
        <p style={{ marginBottom: '1rem' }}>
          This custom hook works like useState but also syncs with localStorage. Try refreshing
          the page - your data persists!
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
          <div style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h4 style={{ marginBottom: '1rem' }}>Persistent Counter</h4>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              {count}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <button
                onClick={incrementCounter}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'white',
                  color: '#667eea',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                Increment
              </button>
              <button
                onClick={resetCounter}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                Reset
              </button>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.9 }}>
              Key: "myCounter"
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            background: '#f8f9fa',
            borderRadius: '8px'
          }}>
            <h4 style={{ marginBottom: '1rem' }}>Persistent Name Input</h4>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
                marginBottom: '1rem'
              }}
            />
            <div style={{
              padding: '1rem',
              background: 'white',
              borderRadius: '6px',
              border: '2px solid #667eea'
            }}>
              <strong>Stored Value:</strong>
              <p style={{ marginTop: '0.5rem', color: '#667eea', fontSize: '1.2rem' }}>
                {name || '(empty)'}
              </p>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
              Key: "userName"
            </p>
          </div>
        </div>

        <div className="output-box">
          <p><strong>How it works:</strong></p>
          <ol style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
            <li>On initialization, reads from localStorage (or uses initialValue)</li>
            <li>Returns [value, setValue] array like useState</li>
            <li>When setValue is called, updates both state AND localStorage</li>
            <li>Data persists across page refreshes and browser sessions</li>
          </ol>
          <p style={{ marginTop: '1rem' }}>
            <strong>Try it:</strong> Change the values above, then refresh this page.
            The values will persist!
          </p>
        </div>
      </div>

      <div className="exercise-card">
        <h3>Hook Implementation Details</h3>
        <pre style={{ background: '#e9ecef', padding: '1rem', borderRadius: '6px', overflow: 'auto' }}>
          <code>{`function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function 
        ? value(storedValue) 
        : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}`}</code>
        </pre>
      </div>
    </div>
  );
}

export default Section7_CustomHooks;
