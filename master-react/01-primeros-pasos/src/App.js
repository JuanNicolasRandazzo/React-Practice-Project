import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import { SecondComponent } from './SecondComponent';
import { ThirdComponent } from './ThirdComponent';
import { EventsComponent } from './EventsComponent';

function App() {

  const ficha_medica={
    altura: "210 cm",
    grupo: "O+",
    estado: "Bueno",
    alergias:"Ninguna",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Welcome to the master on react!!
        </p>
      
        {/* Insert my first component */}

        <hr/>
        <EventsComponent/>
        <div className='components'>
          <hr/>
          <ThirdComponent 
          
          ficha= {ficha_medica}
          />
          <hr/>
          <SecondComponent/>
          <hr/>
          <MyComponent/>
        </div>
        

      </header>

      

    </div>
  );
}

export default App;
