import React, { Component } from 'react';
import './App.css';

import GuessedWords from './guessedWords-component/GuessedWords';
import Congrats from './congrats-component/Congrats.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3}
        ]} />
      </div>
    );
  }
}

export default App;
