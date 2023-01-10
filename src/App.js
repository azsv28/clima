import './App.css';
import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    
      <NavBar />
      <WeatherPanel />
    </div>
  );
}

export default App;
