import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/sewa' element={<Auth />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
