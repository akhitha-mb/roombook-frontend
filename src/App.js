import logo from './logo.svg';
import './App.css';
import { Addroom } from './components/Addroom';
import { Searchroom } from './components/Searchroom';
import { Viewallroom } from './components/Viewallroom';

function App() {
  return (
    <div className="App">
      <Addroom/><br></br>
      <Searchroom/><br></br>
      <Viewallroom/>
    </div>
  );
}

export default App;
