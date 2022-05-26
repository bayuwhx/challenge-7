import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Car from './Components/Pages/Car';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/sewa' element={<Car />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
