import logo from './logo.svg';
import './App.css';
import { Addroom } from './components/Addroom';
import { Searchroom } from './components/Searchroom';

function App() {
  return (
    <div className="App">
      <Addroom/><br></br>
      <Searchroom/>
    </div>
  );
}

export default App;
