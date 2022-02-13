import './App.css';
import Home from './components/Home';
import Hello from './components/Hello';
import Number from './components/Number';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"></Home>
        <Number path="/:num"></Number>
        {/* <Hello path="/:greeting"></Hello>  */}
        <Hello path="/:greeting/:backgroundColor/:textColor"></Hello>

      </Router>
{/* <Link to={`/`}></Link> */}

    </div>
  );
}

export default App;
