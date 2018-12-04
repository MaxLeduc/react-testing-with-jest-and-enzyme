import checkPropTypes from 'check-prop-types';

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
  * Return check value depending on if the proptypes are correct.
  * @param {ShallowWrapper} component - Enzyme shallow wrapper to test props.
  * @param {object} conformingProps - props to test.
  * @returns test
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
