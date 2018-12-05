import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';

/**
  * Create a testing store with imported reducers, middleware, and initial state.
  * globals: rootReducer.
  * @param {object} initialState - Initial state for store.
  * @function storeFactory
  * @returns {store} - Redux store.
*/
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

/**
  * Return ShallowWrapper container node(s) with the given data-test value.
  * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
  * @param {string} val - Value of data-test attribute for search.
  * @returns {ShallowWrapper}
*/

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

/**
  * Return test result value regarding the comformity of proptypes.
  * @param {ShallowWrapper} component - Enzyme shallow wrapper to test props.
  * @param {object} conformingProps - props to test.
  * @returns test results
*/

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );

  expect(propError).toBeUndefined();
}
