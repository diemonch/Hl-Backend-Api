const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app ="http://localhost:3000"

describe('API End Point testing' , ()=>{
    const city = {"city":"Berlin"};
    it('Get Apartments by City',async ()=>{
        let response = await request(app).get('/api/findApartmentListbyCity').send(city)
        .then(response =>{
            return response;
        })
        expect(response.status).to.equal(200);
    })
})

