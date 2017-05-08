import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import SubCategory from './components/SubCategory';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Route path="/seeking-truth/:cat" component={ SubCategory }/>
    </div>
  )
};

export default App;
