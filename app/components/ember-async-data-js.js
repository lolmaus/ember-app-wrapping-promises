import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { cached, tracked } from '@glimmer/tracking';
import { TrackedAsyncData } from 'ember-async-data';

export default class EmberPromiseHelpersComponent extends Component {
  @service myService;

  @tracked promise = this.myService.getData(); // Sync!

  @cached
  get asyncData() {
    return new TrackedAsyncData(this.promise);
  }

  restart = (shouldFail = false) => {
    this.promise = this.myService.getData({ shouldFail }); // Sync!
  };
}
