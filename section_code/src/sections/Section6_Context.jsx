import { ThemeProvider, useTheme } from '../context/ThemeContext';

// Deeply nested Button component that consumes context
function ThemedButton() {
  const { theme } = useTheme();

  return (
    <button
      className={`button-${theme}`}
      style={{
        padding: '0.75rem 1.5rem',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: '500',
        transition: 'all 0.3s ease'
      }}
    >
      I'm a {theme} themed button!
    </button>
  );
}

// Toolbar component (middle level)
function Toolbar() {
  return (
    <div style={{
      padding: '1rem',
      background: '#f8f9fa',
      borderRadius: '8px',
      marginTop: '1rem'
    }}>
      <h4>Toolbar Component</h4>
      <ThemedButton />
    </div>
  );
}

// Dashboard component (another middle level)
function Dashboard() {
  return (
    <div style={{
      padding: '1rem',
      background: '#e9ecef',
      borderRadius: '8px',
      marginTop: '1rem'
    }}>
      <h4>Dashboard Component</h4>
      <Toolbar />
    </div>
  );
}

// Main component with theme toggle
function ThemeDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{
      padding: '1.5rem',
      background: theme === 'light' ? '#ffffff' : '#2c3e50',
      color: theme === 'light' ? '#333' : '#ecf0f1',
      borderRadius: '8px',
      transition: 'all 0.3s ease'
    }}>
      <h3>Theme Switcher Demo</h3>
      <p>Current Theme: <strong>{theme}</strong></p>
      
      <button
        onClick={toggleTheme}
        style={{
          padding: '0.75rem 1.5rem',
          background: theme === 'light' ? '#667eea' : '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '500',
          marginTop: '1rem'
        }}
      >
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      {/* Nested component structure: Dashboard > Toolbar > ThemedButton */}
      <Dashboard />

      <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
        <strong>Note:</strong> The button deep inside Dashboard → Toolbar → ThemedButton
        accesses the theme via useContext without prop drilling!
      </p>
    </div>
  );
}

function Section6_Context() {
  return (
    <div className="section-container">
      <h2 className="section-title">Section 6: The Context API</h2>

      <div className="exercise-card">
        <h3>6.1 & 6.2: Practical Exercise - Theme Switcher with Context</h3>
        <p style={{ marginBottom: '1rem' }}>
          This demonstrates:
        </p>
        <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
          <li>Creating context with createContext</li>
          <li>Providing context with ThemeContext.Provider</li>
          <li>Consuming context with useContext hook</li>
          <li>Avoiding prop drilling through deep component trees</li>
        </ul>
        
        <ThemeProvider>
          <ThemeDemo />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Section6_Context;
