import { helper } from '@ember/component/helper';

export default helper(function formatError([error] /*, named*/) {
  return error.message;
});
