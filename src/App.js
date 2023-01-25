import { HomePage } from './pages/HomePage';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage';
import { UserPage } from './pages/UserPage';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path='/user' element={<UserPage />}></Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
