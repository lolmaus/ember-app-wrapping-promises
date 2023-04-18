import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default class EmberConcurrencyComponent extends Component {
  @service('my-service') myService;

  constructor() {
    super(...arguments);
    this.childTask.perform();
  }

  childTask = task(this, async () => {
    return this.args.parentTask.perform();
  });
}
