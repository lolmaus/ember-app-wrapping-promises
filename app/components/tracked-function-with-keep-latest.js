import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { trackedFunction } from 'ember-resources/util/function';
import { keepLatest } from 'ember-resources/util/keep-latest';
import { use } from 'ember-resources';

export default class TrackedFunctionComponent extends Component {
  @service myService;

  shouldFail = false; // Not tracked, so that it does not reinstantiate the resource

  resource = trackedFunction(this, () => {
    return this.myService.getData({ shouldFail: this.shouldFail });
  });

  @use latest = keepLatest({
    value: () => this.resource.value,
    when: () => this.resource.isPending || this.resource.isRejected,
  });

  restartFail = () => {
    this.shouldFail = true;
    this.resource.retry();
    this.shouldFail = false;
  };
}
