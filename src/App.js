import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='*' element={<div>404 error, not found!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
