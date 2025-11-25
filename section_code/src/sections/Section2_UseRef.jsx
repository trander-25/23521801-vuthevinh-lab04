import UncontrolledLogin from '../components/Section2/UncontrolledLogin';

function Section2_UseRef() {
  return (
    <div className="section-container">
      <h2 className="section-title">Section 2: The useRef Hook</h2>

      <div className="exercise-card">
        <h3>2.1 Practical Exercise: DOM Reference</h3>
        <p>UncontrolledLogin component using useRef to access input value:</p>
        <UncontrolledLogin />
      </div>
    </div>
  );
}

export default Section2_UseRef;
