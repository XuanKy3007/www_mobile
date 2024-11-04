import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './component/Header';
import Navbar from './component/Navbar';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
