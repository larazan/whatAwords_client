import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import "./App.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
import Pages from './pages'

function App() {

  const fetchData = () => {
    axios.get('/api/v1/words?page=2').then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Pages />
        <Footer2 />
      </Router>
    </div>
  );
}

export default App;
