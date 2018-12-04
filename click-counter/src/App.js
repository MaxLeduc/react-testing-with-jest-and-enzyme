import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      error: false
    }
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
  }

  incrementHandler() {
    return this.setState({
      counter: this.state.counter + 1,
      error: false,
    })
  }

  decrementHandler() {
    if (this.state.counter === 0) return this.setState({error: true});
    return this.setState({
      counter: this.state.counter - 1,
      error: false,
    })
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button 
          data-test="increment-button"
          onClick={this.incrementHandler}
        >
          Increment counter
        </button>

        <button
          data-test="decrement-button"
          onClick={this.decrementHandler}
        >
          Decrement counter
        </button>
        {this.state.error && <p data-test="error-message">Error! Cannot decrement counter below 0!</p>}
      </div>
    );
  }
}

export default App;
