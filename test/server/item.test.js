import chai from 'chai';
import supertest from 'supertest';
import mongoose from 'mongoose';
import app from '../../server/index';

const { expect } = chai;
const request = supertest(app);
let dbItems = [];
describe('item server testing', () => {
  before((done) => {
    mongoose.connection.collections.groceries.insertMany(
      [
        { name: 'Milk', amount: '900', purchased: false },
        { name: 'Butter', amount: '600', purchased: true }
      ],
      () => done()
    );
  });

  after((done) => {
    mongoose.connection.collections.groceries.drop(() => {});
    done();
  });

  describe('Getting Item', () => {
    it('get all items', (done) => {
      request.get('/api/v1/grocery/').end((err, res) => {
        expect(res.statusCode).equals(200);
        expect(res.body.items.length).to.equal(2);
        dbItems = res.body.items;
        done();
      });
    });
  });

  describe('Item creation', () => {
    it('should create new item', (done) => {
      request
        .post('/api/v1/grocery')
        .send({ name: 'some', amount: '300', purchased: false })
        .end((err, res) => {
          expect(res.statusCode).to.equal(201);
          done();
        });
    });

    it('should not create item if any of the fields is missing', (done) => {
      request
        .post('/api/v1/grocery')
        .send({ name: '', amount: '', purchased: '' })
        .end((err, res) => {
          expect(res.statusCode).to.equal(401);
          const { error } = res.body;
          expect(error.name[0]).to.equal('Name is required.');
          expect(error.amount[0]).to.equal('Amount is required.');
          expect(error.purchased[0]).to.equal('Purchased is required.');
          done();
        });
    });
  });

  describe('Item Deletion', () => {
    it('should delete item', (done) => {
      const id = dbItems[0]._id;

      request.delete(`/api/v1/grocery/${id}`).end((err, res) => {
        const { item } = res.body.data;
        expect(item._id).to.equal(id);
        expect(item.name).to.equal('Milk');
        done();
      });
    });

    it('should not delete item that does not exist', (done) => {
      const id = dbItems[0]._id;

      request.delete(`/api/v1/grocery/${id}`).end((err, res) => {
        const { error } = res.body;
        expect(error).to.equal('Item not found');
        done();
      });
    });
  });

  describe('Item Modification', () => {
    it('should not edit item that does not exist', (done) => {
      const oldItem = { ...dbItems[0] };

      request
        .put(`/api/v1/grocery/${oldItem._id}`)
        .send(oldItem)
        .end((err, res) => {
          expect(res.body.error).to.equal('Item not found');
          done();
        });
    });

    it('should edit item', (done) => {
      const item = { ...dbItems[1] };
      request
        .put(`/api/v1/grocery/${item._id}`)
        .send(item)
        .end((err, res) => {
          expect(res.body.data.id).to.equal(item._id);
          done();
        });
    });
  });
});
