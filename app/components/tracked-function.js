import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { trackedFunction } from 'ember-resources/util/function';
import { tracked } from '@glimmer/tracking';

export default class TrackedFunctionComponent extends Component {
  @service myService;

  @tracked promise = this.myService.getData(); // Sync!

  resource = trackedFunction(this, () => {
    return this.promise;
  });

  restart = (shouldFail = false) => {
    this.promise = this.myService.getData({ shouldFail }); // Sync!
  };
}
