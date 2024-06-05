import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CartList from './components/CartList';
import FoodCupboard from './components/FoodCupboard';
import Homescreen from './components/Homescreen';
import Footer from './components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <CartList />
            <Homescreen />
            <FoodCupboard />
            <Footer />
        </div>
    );
}

export default Home;
