import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class MyServiceService extends Service {
  @service router;

  _sampleData() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      age: 50,
    };
  }

  _sampleError() {
    return new Error('OMG! Something wrong happened.');
  }

  /* Actions */

  getData = ({ shouldFail = false, delayMs = 5000 } = {}) => {
    console.log('getData start');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          console.log('getData reject');
          reject(this._sampleError());
        } else {
          console.log('getData resolve');
          resolve(this._sampleData());
        }
      }, delayMs);
    });
  };
}
