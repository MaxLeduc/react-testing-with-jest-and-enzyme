import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory, findByTestAttr } from '../test/testUtils'
import App, { UnconnectedApp } from './App';

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

  test('`getSecretWord` action creator is a function prop', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  })
})

test('`getSecretWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
  }

  // set up app component with `getSecretWordMock` as the `getSecretWord` prop
  const wrapper = shallow(<UnconnectedApp {...props} />);

  // run lifecycle method
  wrapper.instance().componentDidMount();

  //check to see if our mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length

  expect(getSecretWordCallCount).toBe(1)
})
