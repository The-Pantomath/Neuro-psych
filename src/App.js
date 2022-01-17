import logo from './logo.svg';
import './App.css';
import { Trafficgraph } from './components/traffic-graph';

function App() {
  return (
    <div style={{backgroundColor: 'black'}}>
    <div className="App">
      <div style={{color: 'white'}}>
        Hello! Welcome to the Neuro psych! Assume this canvas as your brain. 
      </div>
     <Trafficgraph />
    </div>
    </div>
  );
}

export default App;
