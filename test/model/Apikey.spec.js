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
    instance = new SparteraApiDocumentation.Apikey();
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

  describe('Apikey', function() {
    it('should create an instance of Apikey', function() {
      // uncomment below and update the code to test Apikey
      //var instance = new SparteraApiDocumentation.Apikey();
      //expect(instance).to.be.a(SparteraApiDocumentation.Apikey);
    });

    it('should have the property apiKeyId (base name: "api_key_id")', function() {
      // uncomment below and update the code to test the property apiKeyId
      //var instance = new SparteraApiDocumentation.Apikey();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new SparteraApiDocumentation.Apikey();
      //expect(instance).to.be();
    });

    it('should have the property companyId (base name: "company_id")', function() {
      // uncomment below and update the code to test the property companyId
      //var instance = new SparteraApiDocumentation.Apikey();
      //expect(instance).to.be();
    });

    it('should have the property roleId (base name: "role_id")', function() {
      // uncomment below and update the code to test the property roleId
      //var instance = new SparteraApiDocumentation.Apikey();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new SparteraApiDocumentation.Apikey();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SparteraApiDocumentation.Apikey();
      //expect(instance).to.be();
    });

    it('should have the property expirationDateUtc (base name: "expiration_date_utc")', function() {
      // uncomment below and update the code to test the property expirationDateUtc
      //var instance = new SparteraApiDocumentation.Apikey();
      //expect(instance).to.be();
    });

    it('should have the property dateCreated (base name: "date_created")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instance = new SparteraApiDocumentation.Apikey();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdated (base name: "last_updated")', function() {
      // uncomment below and update the code to test the property lastUpdated
      //var instance = new SparteraApiDocumentation.Apikey();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new SparteraApiDocumentation.Apikey();
      //expect(instance).to.be();
    });

  });

}));
