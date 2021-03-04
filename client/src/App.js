import './App.css';
import Search from './search';

const axios = require('axios');

const hitBackend = () => {
  axios.get('http://localhost:8080/')
  .then((response) => {
  console.log(response.data)
  })
  }

function App() {
  return (
    <Search />
  );
}

export default App;