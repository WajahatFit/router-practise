import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import ErrorPage from './views/ErrorPage';
import NavBar from './components/NavBar';
import Contact from './views/Contact';
import ProjectsApps from './components/ProjectsApps';
import ProjectsGames from './components/ProjectsGames';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path='#' element={<ErrorPage />} />
      <Route path='/contacts' element = {<Contact />} />
      <Route path='/projects' element={<Projects />}>
        <Route path='apps' element={<ProjectsApps />} />
        <Route path='games' element ={<ProjectsGames />} />
      </Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
