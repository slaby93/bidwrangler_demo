export default errors => Object
  .values(errors)
  .map(item => !item)
  .every(item => item === true);

