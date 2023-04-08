import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { faker } from '@faker-js/faker';

export default class MyServiceService extends Service {
  @service router;

  _sampleData() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    return {
      firstName,
      lastName,
      age: faker.datatype.number({ min: 18, max: 99 }),
      email: faker.internet.email(firstName, lastName),
    };
  }

  _sampleError() {
    return new Error('OMG! Something wrong happened.');
  }

  /* Actions */

  getData = ({ shouldFail = false, delayMs = 2000 } = {}) => {
    console.log('getData start');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(this._sampleError());
        } else {
          resolve(this._sampleData());
        }
      }, delayMs);
    });
  };
}
