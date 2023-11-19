import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/routes/Navbar';
import Calc from './components/routes/Calc';
import Slider from './components/routes/Slider';
import Todo from './components/routes/todo/Todo';
import Apit from './components/routes/Apit';
import Langue from './components/routes/Langue';
import ContextProvider from './components/routes/context/langContext';

function App() {
  return (
      <ContextProvider>      <div className="App">
        <Navbar />
        <br /><br /><br />
        <Routes>
          <Route path='/' element={<h1>Welcome</h1>} />
          <Route path='/tp1' element={<Calc />} />
          <Route path='/tp2' element={<Slider />} />
          <Route path='/tp3' element={<Todo />} />
          <Route path='/tp4' element={<Apit />} />
          <Route path='/tpL' element={<Langue />} />
          <Route path='*' element={<><h1>404</h1></>} />
        </Routes>
        
      </div>
      </ContextProvider>
  )
}


export default App;
