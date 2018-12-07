import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';

import { getSecretWord } from './actions';
import GuessedWords from './guessedWords-component/GuessedWords';
import Congrats from './congrats-component/Congrats';
import Input from './input-component/Input';

export class UnconnectedApp extends Component {
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    const {
      success,
      guessedWords,
    } = this.props;

    return (
      <div className="container my-sm-3" data-test="app-component">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({success, guessedWords}) => {
  return {
    success,
    guessedWords,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSecretWord: bindActionCreators(getSecretWord, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);
