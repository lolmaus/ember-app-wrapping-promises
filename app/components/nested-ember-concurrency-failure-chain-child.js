import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';
import { next } from '@ember/runloop';

export default class EmberConcurrencyComponent extends Component {
  @service('my-service') myService;

  constructor() {
    super(...arguments);
    next(this.childTask.perform);
  }

  childTask = task(this, async () => {
    return this.args.parentTask.perform();
  });
}
