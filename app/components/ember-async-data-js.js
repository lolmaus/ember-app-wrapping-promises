import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { cached, tracked } from '@glimmer/tracking';
import { TrackedAsyncData } from 'ember-async-data';

export default class EmberPromiseHelpersComponent extends Component {
  @service myService;

  @tracked _promise = this.myService.getData(); // Sync!

  @cached
  get data() {
    return new TrackedAsyncData(this._promise, this);
  }

  restart = (shouldFail = false) => {
    this._promise = this.myService.getData({ shouldFail }); // Sync!
  };
}
