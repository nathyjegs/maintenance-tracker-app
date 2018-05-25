import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../index';
chai.use(chaiHttp);
const { expect } = chai;

describe('Example Node Server', () => {
  it('should return 200', done => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});