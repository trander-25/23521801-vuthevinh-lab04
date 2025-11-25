import PostFetcher from '../components/Section3/PostFetcher';
import FetchVsAxiosDemo from '../components/Section3/FetchVsAxiosDemo';

function Section3_DataFetching() {
  return (
    <div className="section-container">
      <h2 className="section-title">Section 3: Data Fetching Strategies</h2>

      <div className="exercise-card">
        <h3>3.2 Practical Exercise: Loading and Error States</h3>
        <p>PostFetcher component demonstrating proper state management for data fetching:</p>
        <PostFetcher />
      </div>

      <div className="exercise-card">
        <h3>Bonus: fetch vs axios Comparison Demo</h3>
        <FetchVsAxiosDemo />
      </div>
    </div>
  );
}

export default Section3_DataFetching;
