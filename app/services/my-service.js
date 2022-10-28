import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class MyServiceService extends Service {
  @service router;

  get sampleData() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      age: 50,
    };
  }

  get sampleError() {
    return new Error('OMG! Something wrong happened.');
  }

  /* Actions */

  getData = ({ shouldFail = false, delayMs = 4000 } = {}) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(this.sampleError);
        } else {
          resolve(this.sampleData);
        }
      }, delayMs);
    });
  };
}
