import './App.css';
import Home from './components/Home/Home'
import {useState, useEffect} from 'react'
import api from './api'

function App() {
  const [blogs, setBlogs] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api.productsAPI).then(res => res.json()).then(products => setProducts(products));
    fetch(api.blogsAPI).then(res => res.json()).then(blogs => setBlogs(blogs));
  }, []);
  return (
    <div className="App">
      <Home blogs={blogs} products={products}></Home>
    </div>
  );
}

export default App;
