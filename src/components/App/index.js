// == Import npm
import React from 'react';

// == Import
import Counter from '../../containers/Counter';
import Directions from '../../containers/Directions';
import Gradient from '../../containers/Gradient';
import RandomColors from '../../containers/RandomColors';
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
