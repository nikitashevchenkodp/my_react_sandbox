import logo from './logo.svg';
import './App.scss';
import FlexGrovGalery from './components/flex-grow-galery/FlexGrovGalery';
import Header from './components/header/Header';
import { useMemo } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Calculator from './components/calculator/Calculator';
import Popup from './components/popup/Popup';

function App() {
  const arr = useMemo(() => ['https://source.unsplash.com/gYl-UtwNg_I/1500x1500', 
  'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500',
   'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d',
    'https://source.unsplash.com/ITjiVXcwVng/1500x1500', 'https://source.unsplash.com/3MNzGlQM7qs/1500x1500'], [])

  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/">
            <FlexGrovGalery items = {arr}/>
          </Route>
          <Route exact path='/calculator' component={Calculator}/>
          <Route exact path='/popup' component={Popup}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
