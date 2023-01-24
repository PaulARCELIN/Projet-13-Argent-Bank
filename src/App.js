import { HomePage } from './pages/HomePage';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
