import { useState } from 'react';
import './App.css';

// Import all section components
import Section1 from './sections/Section1_UseEffect';
import Section2 from './sections/Section2_UseRef';
import Section3 from './sections/Section3_DataFetching';
import Section4 from './sections/Section4_Forms';
import Section5Router from './sections/Section5_ReactRouter';
import Section6 from './sections/Section6_Context';
import Section7 from './sections/Section7_CustomHooks';

function App() {
  const [activeTab, setActiveTab] = useState('section1');

  const tabs = [
    { id: 'section1', label: 'Section 1: useEffect', component: Section1 },
    { id: 'section2', label: 'Section 2: useRef', component: Section2 },
    { id: 'section3', label: 'Section 3: Data Fetching', component: Section3 },
    { id: 'section4', label: 'Section 4: Forms', component: Section4 },
    { id: 'section5', label: 'Section 5: React Router', component: Section5Router },
    { id: 'section6', label: 'Section 6: Context API', component: Section6 },
    { id: 'section7', label: 'Section 7: Custom Hooks', component: Section7 },  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Lab 4: Intermediate React - MSc. Tran Vinh Khiem</h1>
      </header>
      
      <nav className="tab-navigation">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="content-area">
        {ActiveComponent && <ActiveComponent />}
      </main>
    </div>
  );
}

export default App;
