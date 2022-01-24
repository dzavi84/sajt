import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={[<Home />, <Header />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
