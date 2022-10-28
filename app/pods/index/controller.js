import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  queryParams = ['currentWrapper'];

  @service myService;

  @tracked shouldFail = false;
  @tracked currentWrapper = 'native-promise';

  /* Actions */

  setShouldFail = (event) => {
    this.shouldFail = event.target.checked;
  };

  setCurrentWrapper = (event) => {
    this.currentWrapper = event.target.value;
  };
}
