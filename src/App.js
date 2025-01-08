import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p style={{color:'black'}}>
          Welcome To Mealigo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Mealigo App
        </a>
      </header>
    </div>
  );
}

export default App;
