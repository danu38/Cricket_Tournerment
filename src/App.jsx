import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import TeamDetail from './Pages/TeamDetail';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/:id" element={<TeamDetail />} />
      </Routes>
    </Router>
  );
}

export default App;