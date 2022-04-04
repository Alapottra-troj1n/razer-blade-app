import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Home from './components/Home';
import Nav from './components/Nav';
import Reviews from './components/Reviews';



function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
