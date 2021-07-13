import React from 'react';

//Components
import Header from './components/Header';
import Home from './components/Home';

//styles
import {GlobalStyle} from './GlobalStyle';


const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
     <GlobalStyle />
    </div>
  );
}

export default App;
