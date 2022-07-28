import logo from './logo.svg';
import './App.scss';
import FlexGrovGalery from './components/flex-grow-galery/FlexGrovGalery';
import Header from './components/header/Header';
import { useMemo } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Calculator from './components/calculator/Calculator';
import Popup from './components/popup/Popup';
import AppRouter from './components/AppRouter/AppRouter';

function App() {
  

  return (
    <div className="App">
      <Header/>
      <AppRouter/>
    </div>
  );
}

export default App;
