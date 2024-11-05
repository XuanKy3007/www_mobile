import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './component/Header';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import Category from './pages/Category';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/category' element={<Category />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
