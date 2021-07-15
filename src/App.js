import React from 'react';

//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import Login from './components/Login';
import NotFound from './components/NotFound.js';

//context
import UserProvider from './context';

//routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//styles
import {GlobalStyle} from './GlobalStyle';


const App = () => (
    <Router>
      <UserProvider>
        <Header></Header>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/:movieId' element={ <Movie /> } />
          <Route path='/*' element={<NotFound />} />            
          <Route path='/*' element={<NotFound />} />
        </Routes>
      <GlobalStyle />
    </UserProvider>
    </Router>
  );


export default App;
