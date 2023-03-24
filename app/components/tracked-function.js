import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { trackedFunction } from 'ember-resources/util/function';

export default class TrackedFunctionComponent extends Component {
  @service myService;

  shouldFail = false; // Not tracked, so that it does not reinstantiate the resource

  resource = trackedFunction(this, () => {
    return this.myService.getData({ shouldFail: this.shouldFail });
  });

  restartFail = () => {
    this.shouldFail = true;
    this.resource.retry();
    this.shouldFail = false;
  };
}
