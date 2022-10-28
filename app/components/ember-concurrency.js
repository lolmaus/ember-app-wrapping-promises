import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default class EmberConcurrencyComponent extends Component {
  @service('my-service') myService;

  constructor() {
    super(...arguments);
    this.dataTask.perform();
  }

  dataTask = task(this, async (shouldFail = false) => {
    // `return await` is intentional because how Ember Concurrency transpiles async/await into generator/yield
    return await this.myService.getData({ shouldFail });
  });
}
