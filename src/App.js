import './App.css';
import About_section from './components/About';
import Join_us from './components/Join_us';
import Mainbody from './components/body';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path='/join' element={<Join_us/>}/>
        <Route path='/' element={<Mainbody/>}/>
        <Route path='/about' element={<About_section/>}/>
      </Routes>
     
  );
}

export default App;
