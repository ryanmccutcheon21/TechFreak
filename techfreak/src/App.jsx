import { commerce } from './lib/commerce';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Products products={products} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
