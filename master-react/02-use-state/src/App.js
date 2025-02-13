import logo from './logo.svg';
import './App.css';
import { MyFirstState } from './components/MyFirstState';
import { ExcerciceComponent } from './components/ExcerciceComponent';

function App() {

  const date = new Date();
  const actualYear = date.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1> State on React - Hook useState</h1>

        <MyFirstState/>

        <ExcerciceComponent year= {actualYear}/>
         
      </header>
    </div>
  );
}

export default App;
