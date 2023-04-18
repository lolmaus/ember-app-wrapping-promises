import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EmberPromiseHelpersComponent extends Component {
  @service myService;

  @tracked promise = this.myService.getData(); // Sync!

  restart = (shouldFail = false) => {
    this.promise = this.myService.getData({ shouldFail }); // Sync!
  };
}
