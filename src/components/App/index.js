// == Import npm
import React from 'react';

// == Import
import Counter from '../Counter';
import Directions from '../Directions';
import Gradient from '../../containers/Gradient';
import RandomColors from '../RandomColors';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Counter total={0} />
    <RandomColors />
    <Gradient />
    <Directions />
  </div>
);

// == Export
export default App;
