import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQ from './pages/FAQ';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<FAQ/>} />
      </Routes>
    </Router>
  );
}

export default App;
