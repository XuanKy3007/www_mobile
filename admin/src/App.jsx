import Header from "./component/Header"
import MenuList from "./component/MenuList"
import Admin from "./pages/Admin"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <div style={{ display: 'flex', backgroundColor: '#ECEBEB', padding: 5}}>
        <div style={{ width: '20%', marginRight: '20px' }}>
          <MenuList />
        </div>
        <div style={{ width: '100%', gap: '20px', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Admin />
        </div>
      </div>
    </Router>
  )
}

export default App
