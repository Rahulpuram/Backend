process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('./index'); // Adjust the path based on your project structure

const expect = chai.expect;
chai.use(chaiHttp);

describe('users', ()=>{
  describe('/POST /users/login', (done)=>{
      let userCredentials = { 'username': 'donkey@gmail.com', 'password': 'vikky' }
      it('it should NOT LOGIN using the wrong credentials', (done)=>{
          chai.request(app)
              .post('/api/users/login')
              .send(userCredentials)
              .end((err, res)=>{
                  expect(res).to.have.status(400);      
                  done();
              });
      });

      it('it should LOGIN using the correct credentials', (done)=>{
      let userCredentials = { 'username': 'Rahul', 'password': '12345678' }
          chai.request(app)
              .post('/api/users/login')
              .send(userCredentials)
              .end((err, res)=>{
                  expect(res).to.have.status(200);                    
                  done();
              });
      });
  });        
});
