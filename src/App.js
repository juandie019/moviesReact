import React from 'react';

//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound.js';

//routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//styles
import {GlobalStyle} from './GlobalStyle';


const App = () => (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/:movieId' element={ <Movie /> } />
        <Route path='/*' element={<NotFound />} />
      </Routes>
     <GlobalStyle />
    </Router>
  );


export default App;
