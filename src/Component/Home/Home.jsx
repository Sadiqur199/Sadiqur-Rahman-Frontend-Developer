import React from 'react';
import Banner from '../Banner/Banner';
import Search from '../Search/Search';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Search></Search>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
};

export default Home;