/**
 *  This demonstrates API calls for Category deletion api.
 *
 * @version 1.0
 * @author kishore kumar
 */
'use strict';
var request = require('supertest');
var app = require('../app').app;
var expect = require('chai').expect;
describe('Product_Category_Cascade_Delete', function () {
    it('Should delete products based on category deletion', function (done) {
    request(app)
      .delete('/categories/121')
      .expect(200)
			.expect('Content-Type', /json/)
			.end(function (err, res) {
                if (err) {
                    return done(err);
                }
             done();
            });
    });

});
