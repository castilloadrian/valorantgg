import logo from './logo.svg';
import './App.css';

const axios = require('axios');

const hitBackend = () => {
  axios.get('http://localhost:8080/')
  .then((response) => {
  console.log(response.data)
  })
  }

function App() {
  return (
    <div className="App">
      <button onClick={hitBackend}>Send request</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
