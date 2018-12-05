import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from './Input';

/**
  * Factory function to create a ShallowWrapper for the Input component.
  * @function setup
  * @param {object} initialState - Initial state for this setup.
  * @returns {ShallowWrapper}
*/
const setup = (initialState = {}) => {
  const store = storeFactory();
  const wrapper = shallow(<Input store={store} />).dive();
  return wrapper;
}

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    })

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const component = findByTestAttr(wrapper, 'input-box');
      expect(component.length).toBe(1);
    });

    test('renders submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button');
      expect(component.length).toBe(1);
    })
  });

  describe('word has been guessed', () => {
    test('renders component without error', () => {

    });

    test('does not renders input box', () => {

    });

    test('does not renders submit button', () => {
      
    })
  });
});

describe('update state', () => {

});
