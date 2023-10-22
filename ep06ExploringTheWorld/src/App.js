import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import RestaurantCardsContainer from './components/RestaurantCardsContainer';
import Footer from './components/Footer';
import Body from './components/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

root.render(<App />);
