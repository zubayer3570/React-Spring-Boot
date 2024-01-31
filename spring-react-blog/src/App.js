import './App.css';
import { Route, Router, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import ReadBlog from './pages/ReadBlog';
import AddBlog from './components/AddBlog';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} ></Route>
      <Route path='/blogs/:name' element={<ReadBlog />}></Route>
      <Route path='/add-blog' element={<AddBlog />}></Route>
    </Routes>
  );
}

export default App;
