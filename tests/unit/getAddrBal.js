'use strict';
const chai = require('chai');
const sinon = require('sinon');
const sinonTest = require('sinon-test');
const expect = require('chai').expect;
let request = require('request');


let BlockCypher = require('../../lib/bcypher');
let chain = 'btc';
let network = 'main';
let token = process.env.TOKEN;
let bcapi = new BlockCypher(chain, network, token);


describe('Blockcypher getAddrBal Method: ', function () {

  describe('Success: ', function () {

    it('When addr a string and params exists', sinon.test(function (done) {

      let addr = '12345';
      let params = {};
      let validEndpoint = '/addrs/' + addr + '/balance';

      let validReturn = { data: { key1: 'value', key2: 2 } };
      this.stub(bcapi, '_get').yields(null, validReturn);
      bcapi.getAddrBal(addr, params, function (e, r) {

        var callArgs = bcapi._get.getCall(0).args;
        expect(callArgs[0]).to.equal(validEndpoint);
        expect(callArgs[1]).to.deep.equal(params);
        expect(typeof callArgs[2]).to.equal('function');
        expect(Object.keys(callArgs).length).to.equal(3);

        expect(e).to.equal(null);
        expect(r).to.deep.equal(validReturn);
        done();
      });
    }));

    it('When addr is an int and params exists', sinon.test(function (done) {

      let addr = 12345;
      let params = {};
      let validEndpoint = '/addrs/' + addr + '/balance';

      let validReturn = { data: { key1: 'value', key2: 2 } };
      this.stub(bcapi, '_get').yields(null, validReturn);
      bcapi.getAddrBal(addr, params, function (e, r) {

        var callArgs = bcapi._get.getCall(0).args;
        expect(callArgs[0]).to.equal(validEndpoint);
        expect(callArgs[1]).to.deep.equal(params);
        expect(typeof callArgs[2]).to.equal('function');
        expect(Object.keys(callArgs).length).to.equal(3);

        expect(e).to.equal(null);
        expect(r).to.deep.equal(validReturn);
        done();
      });
    }));

    it('When addr is a string and params does NOT exist', sinon.test(function (done) {

      let addr = '12345';
      let params = {};
      let validEndpoint = '/addrs/' + addr + '/balance';

      let validReturn = { data: { key1: 'value', key2: 2 } };
      this.stub(bcapi, '_get').yields(null, validReturn);
      bcapi.getAddrBal(addr, function (e, r) {

        var callArgs = bcapi._get.getCall(0).args;
        expect(callArgs[0]).to.equal(validEndpoint);
        expect(callArgs[1]).to.deep.equal(params);
        expect(typeof callArgs[2]).to.equal('function');
        expect(Object.keys(callArgs).length).to.equal(3);

        expect(e).to.equal(null);
        expect(r).to.deep.equal(validReturn);
        done();
      });
    }));

    it('When addr is an int and params does NOT exist', sinon.test(function (done) {

      let addr = 12345;
      let params = {};
      let validEndpoint = '/addrs/' + addr + '/balance';

      let validReturn = { data: { key1: 'value', key2: 2 } };
      this.stub(bcapi, '_get').yields(null, validReturn);
      bcapi.getAddrBal(addr, function (e, r) {

        var callArgs = bcapi._get.getCall(0).args;
        expect(callArgs[0]).to.equal(validEndpoint);
        expect(callArgs[1]).to.deep.equal(params);
        expect(typeof callArgs[2]).to.equal('function');
        expect(Object.keys(callArgs).length).to.equal(3);

        expect(e).to.equal(null);
        expect(r).to.deep.equal(validReturn);
        done();
      });
    }));

  });//end of success cases;

  describe('Errors: ', function () {

    it('bubbles up error when _get returns error', sinon.test(function (done) {

      let addr = '12345';
      let params = {};
      let badRequestError = "Bad Request";
      let validEndpoint = '/addrs/' + addr + '/balance';

      let validReturn = { data: { key1: 'value', key2: 2 } };
      this.stub(bcapi, '_get').yields(badRequestError, validReturn);
      bcapi.getAddrBal(addr, params, function (e, r) {

        var callArgs = bcapi._get.getCall(0).args;
        expect(callArgs[0]).to.equal(validEndpoint);
        expect(callArgs[1]).to.deep.equal(params);
        expect(typeof callArgs[2]).to.equal('function');
        expect(Object.keys(callArgs).length).to.equal(3);

        expect(e).to.equal(badRequestError);
        expect(r).to.deep.equal(validReturn);
        done();
      });
    }));

    it.skip('should return error when addr is missing', function (done) { done() });


  });//end of error cases;



});//end of getAddrBal
