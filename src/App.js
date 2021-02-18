import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Seconadry from './components/Secondary'

function App() {
  return (
    <div className="App">
      <h2>Redux Counter</h2>
      <Counter/>
      <Seconadry/>
    </div>
  );
}

export default App;
