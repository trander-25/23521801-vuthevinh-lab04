import ControlledSignup from '../components/Section4/ControlledSignup';

function Section4_Forms() {
  return (
    <div className="section-container">
      <h2 className="section-title">Section 4: Architecting Forms</h2>

      <div className="exercise-card">
        <h3>4.1 Practical Exercise: Controlled Components</h3>
        <p>ControlledSignup component using a single state object for multiple inputs:</p>
        <ControlledSignup />
      </div>
    </div>
  );
}

export default Section4_Forms;
