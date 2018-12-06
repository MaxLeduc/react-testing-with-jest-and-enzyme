import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory, findByTestAttr } from '../test/testUtils'
import App from './App';

/**
  * Factory function to create a ShallowWrapper for the Input component.
  * @function setup
  * @param {object} initialState - Initial state for this setup.
  * @returns {ShallowWrapper}
*/
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
}

describe('renders without error', () => {
  const wrapper = setup();
  const AppComponent = findByTestAttr(wrapper, 'app-component')
  expect(AppComponent.length).toBe(1);
})

describe('redux props', () => {
  test('has `success` as a piece of state', () => {
    const success = true
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  })

  test('has `guessedWords` as a piece of state', () => {
    const guessedWords = [{guessedWord: 'train', letterMatchCount: 3}];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords);
  })

  test('has `secretWord` as a piece of state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  })

  test('`getSecretWord` action creator is a function prop', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  })
})
