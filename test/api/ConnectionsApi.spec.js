/**
 * Spartera API Documentation
 * Auto-generated API documentation for REST services of the Spartera platform
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: support@spartera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SparteraApiDocumentation);
  }
}(this, function(expect, SparteraApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SparteraApiDocumentation.ConnectionsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ConnectionsApi', function() {
    describe('companiesCompanyIdConnectionsConnectionIdDelete', function() {
      it('should call companiesCompanyIdConnectionsConnectionIdDelete successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdConnectionsConnectionIdDelete
        //instance.companiesCompanyIdConnectionsConnectionIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdConnectionsConnectionIdGet', function() {
      it('should call companiesCompanyIdConnectionsConnectionIdGet successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdConnectionsConnectionIdGet
        //instance.companiesCompanyIdConnectionsConnectionIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdConnectionsConnectionIdInfoschemaGet', function() {
      it('should call companiesCompanyIdConnectionsConnectionIdInfoschemaGet successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdConnectionsConnectionIdInfoschemaGet
        //instance.companiesCompanyIdConnectionsConnectionIdInfoschemaGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdConnectionsConnectionIdPatch', function() {
      it('should call companiesCompanyIdConnectionsConnectionIdPatch successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdConnectionsConnectionIdPatch
        //instance.companiesCompanyIdConnectionsConnectionIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdConnectionsConnectionIdTestGet', function() {
      it('should call companiesCompanyIdConnectionsConnectionIdTestGet successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdConnectionsConnectionIdTestGet
        //instance.companiesCompanyIdConnectionsConnectionIdTestGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdConnectionsGet', function() {
      it('should call companiesCompanyIdConnectionsGet successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdConnectionsGet
        //instance.companiesCompanyIdConnectionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdConnectionsPost', function() {
      it('should call companiesCompanyIdConnectionsPost successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdConnectionsPost
        //instance.companiesCompanyIdConnectionsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
