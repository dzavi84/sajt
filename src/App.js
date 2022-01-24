import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
        <Route path='/Home'>
          <Header />
        </Route>
      </Router>
    </div>
  );
}

export default App;
