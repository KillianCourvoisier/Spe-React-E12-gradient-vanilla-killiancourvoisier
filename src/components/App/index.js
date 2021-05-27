// == Import npm
import React from 'react';

// == Import
import Counter from '../../containers/Counter';
import Directions from '../Directions';
import Gradient from '../../containers/Gradient';
import RandomColors from '../RandomColors';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Counter />
    <RandomColors />
    <Gradient />
    <Directions />
  </div>
);

// == Export
export default App;
