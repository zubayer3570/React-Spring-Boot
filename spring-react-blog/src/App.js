import './App.css';
import { Route, Router, Routes } from 'react-router';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} ></Route>
    </Routes>
  );
}

export default App;
