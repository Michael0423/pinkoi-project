import './App.css';
import Home from './components/Home/Home'
import { useState, useEffect } from 'react'
// import apiConfig from './config/config.api'
import * as fireaseAPI from './firebaseAPI'


function App() {
  const [blogs, setBlogs] = useState([]);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    Promise.resolve(fireaseAPI.getProducts()).then(products => setProducts(products));
    Promise.resolve(fireaseAPI.getBlogs()).then(blogs => setBlogs(blogs));    
  }, []);
  return (
    <div className="App">
      <Home blogs={blogs} products={products} />
    </div>
  );
}

export default App;