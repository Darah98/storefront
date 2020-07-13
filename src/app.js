import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories.js';
import Products from './components/products.js';


function App() {
  const styles = {
    height: '990px',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  };
  return (
    <>
      <Header />
      <Categories />
      <main style={styles}>
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;