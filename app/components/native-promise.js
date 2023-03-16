import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NativePromiseComponent extends Component {
  @service('my-service') myService;

  @tracked data;
  @tracked error;
  @tracked isPending = false;

  get isComplete() {
    return this.data !== undefined;
  }

  get isError() {
    return this.error !== undefined;
  }

  constructor() {
    super(...arguments);
    this.getData();
  }

  // // Traditional then syntax
  // getData = () => {
  //   this.data = undefined;
  //   this.error = undefined;
  //   this.isPending = true;

  //   this.myService
  //     .getData()
  //     .then((data) => {
  //       this.data = data;
  //     })
  //     .catch((error) => {
  //       this.error = error;
  //     })
  //     .finally(() => {
  //       this.isPending = false;
  //     });
  // }

  // Modern await syntax
  getData = async (shouldFail = false) => {
    this.data = undefined;
    this.error = undefined;
    this.isPending = true;

    try {
      this.data = await this.myService.getData({ shouldFail });
    } catch (error) {
      this.error = error;
    } finally {
      this.isPending = false;
    }
  };
}
