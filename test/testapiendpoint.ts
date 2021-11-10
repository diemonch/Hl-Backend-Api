import { expect } from 'chai';
import request from 'supertest';
const app ="http://localhost:3000"

describe('API End Point testing' , ()=>{
   
    it('Get All the User List',async ()=>{
        const response = await request(app).get('/api/fetchUsers').send()
        .then((response: any) =>{
            return response;
        })
        expect(response.status).to.equal(200);
    })
})

