import './App.css';
import { Route, Router, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import ReadBlog from './pages/ReadBlog';
import AddBlog from './components/AddBlog';
import Updatepage from './pages/Updatepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} ></Route>
      <Route path='/blogs/:_id' element={<ReadBlog />}></Route>
      <Route path='/add-blog' element={<AddBlog />}></Route>
      <Route path='/update-blog' element={<Updatepage />}></Route>
    </Routes>
  );
}

export default App;
