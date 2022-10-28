import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
import PromiseProxyMixin from '@ember/object/promise-proxy-mixin';
import { cached, tracked } from '@glimmer/tracking';

// // An ObjectProxy variant of this is available as `import { PromiseObject } from '@ember-data/store';`
const PromiseProxyObject = EmberObject.extend(PromiseProxyMixin);

export default class PromiseProxyMixinComponent extends Component {
  @service('my-service') myService;

  @tracked _promise = this.myService.getData(); // Sync!

  @cached
  get promiseProxy() {
    return PromiseProxyObject.create({ promise: this._promise });
  }

  restart = (shouldFail = false) => {
    this._promise = this.myService.getData({ shouldFail }); // Sync!
  };
}
