/**
 * Closure to avoid repeated reinitialization of regex constant
 */
export const email = (() => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return email => !emailRegex.test(email) && 'Email has invalid format';
})();


export const requiredField = field => !field && 'Field is required';

export const password = (() => {
  const containsUpperCase = test => !(/[A-Z]/.test(test)) && 'Provide uppercase character';
  const containsLowerCase = test => !(/[a-z]/.test(test)) && 'Provide lowercase character';
  const containsNumber = test => !(/\d/.test(test)) && 'Provide number character';
  const hasProperLength = test => !(test.length > 5) && 'Password is too short';


  return (password) => {
    return containsUpperCase(password) || containsLowerCase(password) ||
           containsNumber(password) || hasProperLength(password);
  };
})();

/**
 * All those texts should come from i18.
 */
