import './App.css';
import Clock from './Clock';

function App() {
  return (
    <>
      <div className="App">
        <h1>WORLD CLOCK</h1>
      </div>

      <Clock show country="ITALY" timezone="2" />
    </>
  );
}

export default App;
