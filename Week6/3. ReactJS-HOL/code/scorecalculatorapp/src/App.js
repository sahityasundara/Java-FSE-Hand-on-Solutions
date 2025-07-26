
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore Name={"Sahithya Sundara"}
        School={"Sri Chaitanya Techno School"}
        total={593}
        goal={6}
      />
    </div>
  );
}

export default App;