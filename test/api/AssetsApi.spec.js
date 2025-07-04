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
    instance = new SparteraApiDocumentation.AssetsApi();
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

  describe('AssetsApi', function() {
    describe('analyzeCompanyHandleAssetsAssetSlugGet', function() {
      it('should call analyzeCompanyHandleAssetsAssetSlugGet successfully', function(done) {
        //uncomment below and update the code to test analyzeCompanyHandleAssetsAssetSlugGet
        //instance.analyzeCompanyHandleAssetsAssetSlugGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdAssetsAssetIdDelete', function() {
      it('should call companiesCompanyIdAssetsAssetIdDelete successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdAssetsAssetIdDelete
        //instance.companiesCompanyIdAssetsAssetIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdAssetsAssetIdGet', function() {
      it('should call companiesCompanyIdAssetsAssetIdGet successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdAssetsAssetIdGet
        //instance.companiesCompanyIdAssetsAssetIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdAssetsAssetIdInfoschemaGet', function() {
      it('should call companiesCompanyIdAssetsAssetIdInfoschemaGet successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdAssetsAssetIdInfoschemaGet
        //instance.companiesCompanyIdAssetsAssetIdInfoschemaGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdAssetsAssetIdInfoschemaSaveGet', function() {
      it('should call companiesCompanyIdAssetsAssetIdInfoschemaSaveGet successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdAssetsAssetIdInfoschemaSaveGet
        //instance.companiesCompanyIdAssetsAssetIdInfoschemaSaveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdAssetsAssetIdPatch', function() {
      it('should call companiesCompanyIdAssetsAssetIdPatch successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdAssetsAssetIdPatch
        //instance.companiesCompanyIdAssetsAssetIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdAssetsAssetIdPredictedPriceGet', function() {
      it('should call companiesCompanyIdAssetsAssetIdPredictedPriceGet successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdAssetsAssetIdPredictedPriceGet
        //instance.companiesCompanyIdAssetsAssetIdPredictedPriceGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdAssetsAssetIdStatisticsGet', function() {
      it('should call companiesCompanyIdAssetsAssetIdStatisticsGet successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdAssetsAssetIdStatisticsGet
        //instance.companiesCompanyIdAssetsAssetIdStatisticsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdAssetsAssetIdTestGet', function() {
      it('should call companiesCompanyIdAssetsAssetIdTestGet successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdAssetsAssetIdTestGet
        //instance.companiesCompanyIdAssetsAssetIdTestGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdAssetsGet', function() {
      it('should call companiesCompanyIdAssetsGet successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdAssetsGet
        //instance.companiesCompanyIdAssetsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdAssetsPost', function() {
      it('should call companiesCompanyIdAssetsPost successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdAssetsPost
        //instance.companiesCompanyIdAssetsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('companiesCompanyIdAssetsStatisticsGet', function() {
      it('should call companiesCompanyIdAssetsStatisticsGet successfully', function(done) {
        //uncomment below and update the code to test companiesCompanyIdAssetsStatisticsGet
        //instance.companiesCompanyIdAssetsStatisticsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
