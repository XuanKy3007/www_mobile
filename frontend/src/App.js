import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './component/Header';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import Category from './pages/Category';
import Contact from './pages/Contact';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/category' element={<Category />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
