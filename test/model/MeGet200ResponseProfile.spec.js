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
    instance = new SparteraApiDocumentation.MeGet200ResponseProfile();
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

  describe('MeGet200ResponseProfile', function() {
    it('should create an instance of MeGet200ResponseProfile', function() {
      // uncomment below and update the code to test MeGet200ResponseProfile
      //var instance = new SparteraApiDocumentation.MeGet200ResponseProfile();
      //expect(instance).to.be.a(SparteraApiDocumentation.MeGet200ResponseProfile);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SparteraApiDocumentation.MeGet200ResponseProfile();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new SparteraApiDocumentation.MeGet200ResponseProfile();
      //expect(instance).to.be();
    });

    it('should have the property companyId (base name: "company_id")', function() {
      // uncomment below and update the code to test the property companyId
      //var instance = new SparteraApiDocumentation.MeGet200ResponseProfile();
      //expect(instance).to.be();
    });

    it('should have the property functionId (base name: "function_id")', function() {
      // uncomment below and update the code to test the property functionId
      //var instance = new SparteraApiDocumentation.MeGet200ResponseProfile();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new SparteraApiDocumentation.MeGet200ResponseProfile();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "email_address")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instance = new SparteraApiDocumentation.MeGet200ResponseProfile();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new SparteraApiDocumentation.MeGet200ResponseProfile();
      //expect(instance).to.be();
    });

    it('should have the property dateCreated (base name: "date_created")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instance = new SparteraApiDocumentation.MeGet200ResponseProfile();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdated (base name: "last_updated")', function() {
      // uncomment below and update the code to test the property lastUpdated
      //var instance = new SparteraApiDocumentation.MeGet200ResponseProfile();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new SparteraApiDocumentation.MeGet200ResponseProfile();
      //expect(instance).to.be();
    });

  });

}));
