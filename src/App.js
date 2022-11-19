import React from 'react'
import './App.css';
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import ProductList from './components/ProductList';
import ShoePage from './components/ShoePage';
import { GlobalProvider } from './context/Global';

function App() {

return (
  <div className="App">
      <GlobalProvider>
      <Router>
        <Routes>
         <Route path='/' element={<Home/>} />
        </Routes>
      <Routes>
         <Route path='/products' element={<ProductList/>} />
         <Route path='/shoe/:id' element={<ShoePage/>} />
         <Route path='/add' element={<AddItem />} />
         <Route path='/edit/:id' element={<EditItem />} /> 
      </Routes>
      </Router>
      </GlobalProvider>
    </div>
  )
  
}

export default App