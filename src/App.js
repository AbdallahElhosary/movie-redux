import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Navbar/NavBar";
import MoviesList from "./components/MoviesList";
import {Routes, Route } from 'react-router-dom'
import './App.css';
import MoviePage from './components/MoviePage/MoviePage';

function App() {

  return (
    <div className="font color-body ">
      <NavBar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<MoviesList/>} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
