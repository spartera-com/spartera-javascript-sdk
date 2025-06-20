# SparteraApiDocumentation.AssetsApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyzeCompanyHandleAssetsAssetSlugGet**](AssetsApi.md#analyzeCompanyHandleAssetsAssetSlugGet) | **GET** /analyze/{company_handle}/assets/{asset_slug} | Process (analyze) an asset. Attempt to process an analytic on a backend warehouse/AI model.
[**companiesCompanyIdAssetsAssetIdDelete**](AssetsApi.md#companiesCompanyIdAssetsAssetIdDelete) | **DELETE** /companies/{company_id}/assets/{asset_id} | Delete single asset by ID
[**companiesCompanyIdAssetsAssetIdGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdGet) | **GET** /companies/{company_id}/assets/{asset_id} | Get single asset by ID
[**companiesCompanyIdAssetsAssetIdInfoschemaGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdInfoschemaGet) | **GET** /companies/{company_id}/assets/{asset_id}/infoschema | Get the information schema for a specific asset&#39;s table
[**companiesCompanyIdAssetsAssetIdInfoschemaSaveGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdInfoschemaSaveGet) | **GET** /companies/{company_id}/assets/{asset_id}/infoschema/save | Retrieve and save an asset&#39;s information schema
[**companiesCompanyIdAssetsAssetIdPatch**](AssetsApi.md#companiesCompanyIdAssetsAssetIdPatch) | **PATCH** /companies/{company_id}/assets/{asset_id} | Update an existing asset by ID
[**companiesCompanyIdAssetsAssetIdPredictedPriceGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdPredictedPriceGet) | **GET** /companies/{company_id}/assets/{asset_id}/predicted_price | Get AI-predicted pricing for a specific asset
[**companiesCompanyIdAssetsAssetIdStatisticsGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdStatisticsGet) | **GET** /companies/{company_id}/assets/{asset_id}/statistics | Get statistics for a specific asset (public endpoint)
[**companiesCompanyIdAssetsAssetIdTestGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdTestGet) | **GET** /companies/{company_id}/assets/{asset_id}/test | Test out an Asset (on a subset of data)
[**companiesCompanyIdAssetsGet**](AssetsApi.md#companiesCompanyIdAssetsGet) | **GET** /companies/{company_id}/assets | Get all assets for a specific company
[**companiesCompanyIdAssetsPost**](AssetsApi.md#companiesCompanyIdAssetsPost) | **POST** /companies/{company_id}/assets | Create a new asset
[**companiesCompanyIdAssetsStatisticsGet**](AssetsApi.md#companiesCompanyIdAssetsStatisticsGet) | **GET** /companies/{company_id}/assets/statistics | Get statistics for all assets the user has access to



## analyzeCompanyHandleAssetsAssetSlugGet

> CompaniesCompanyIdAssetsAssetIdGet200Response analyzeCompanyHandleAssetsAssetSlugGet(companyHandle, assetSlug)

Process (analyze) an asset. Attempt to process an analytic on a backend warehouse/AI model.

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyHandle = "companyHandle_example"; // String | 
let assetSlug = "assetSlug_example"; // String | 
apiInstance.analyzeCompanyHandleAssetsAssetSlugGet(companyHandle, assetSlug).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyHandle** | **String**|  | 
 **assetSlug** | **String**|  | 

### Return type

[**CompaniesCompanyIdAssetsAssetIdGet200Response**](CompaniesCompanyIdAssetsAssetIdGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdDelete

> CompaniesCompanyIdAssetsAssetIdDelete200Response companiesCompanyIdAssetsAssetIdDelete(companyId, assetId)

Delete single asset by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdDelete(companyId, assetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **assetId** | **String**|  | 

### Return type

[**CompaniesCompanyIdAssetsAssetIdDelete200Response**](CompaniesCompanyIdAssetsAssetIdDelete200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdGet

> CompaniesCompanyIdAssetsAssetIdGet200Response companiesCompanyIdAssetsAssetIdGet(companyId, assetId)

Get single asset by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdGet(companyId, assetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **assetId** | **String**|  | 

### Return type

[**CompaniesCompanyIdAssetsAssetIdGet200Response**](CompaniesCompanyIdAssetsAssetIdGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdInfoschemaGet

> CompaniesCompanyIdAssetsGet200Response companiesCompanyIdAssetsAssetIdInfoschemaGet(companyId, assetId)

Get the information schema for a specific asset&#39;s table

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdInfoschemaGet(companyId, assetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **assetId** | **String**|  | 

### Return type

[**CompaniesCompanyIdAssetsGet200Response**](CompaniesCompanyIdAssetsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdInfoschemaSaveGet

> CompaniesCompanyIdAssetsGet200Response companiesCompanyIdAssetsAssetIdInfoschemaSaveGet(companyId, assetId)

Retrieve and save an asset&#39;s information schema

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdInfoschemaSaveGet(companyId, assetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **assetId** | **String**|  | 

### Return type

[**CompaniesCompanyIdAssetsGet200Response**](CompaniesCompanyIdAssetsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdPatch

> CompaniesCompanyIdAssetsAssetIdPatch200Response companiesCompanyIdAssetsAssetIdPatch(companyId, assetId, asset)

Update an existing asset by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
let asset = new SparteraApiDocumentation.Asset(); // Asset | 
apiInstance.companiesCompanyIdAssetsAssetIdPatch(companyId, assetId, asset).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **assetId** | **String**|  | 
 **asset** | [**Asset**](Asset.md)|  | 

### Return type

[**CompaniesCompanyIdAssetsAssetIdPatch200Response**](CompaniesCompanyIdAssetsAssetIdPatch200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdPredictedPriceGet

> CompaniesCompanyIdAssetsGet200Response companiesCompanyIdAssetsAssetIdPredictedPriceGet(companyId, assetId)

Get AI-predicted pricing for a specific asset

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdPredictedPriceGet(companyId, assetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **assetId** | **String**|  | 

### Return type

[**CompaniesCompanyIdAssetsGet200Response**](CompaniesCompanyIdAssetsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdStatisticsGet

> CompaniesCompanyIdAssetsGet200Response companiesCompanyIdAssetsAssetIdStatisticsGet(companyId, assetId)

Get statistics for a specific asset (public endpoint)

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdStatisticsGet(companyId, assetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **assetId** | **String**|  | 

### Return type

[**CompaniesCompanyIdAssetsGet200Response**](CompaniesCompanyIdAssetsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdTestGet

> CompaniesCompanyIdAssetsGet200Response companiesCompanyIdAssetsAssetIdTestGet(companyId, assetId)

Test out an Asset (on a subset of data)

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdTestGet(companyId, assetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **assetId** | **String**|  | 

### Return type

[**CompaniesCompanyIdAssetsGet200Response**](CompaniesCompanyIdAssetsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsGet

> CompaniesCompanyIdAssetsGet200Response companiesCompanyIdAssetsGet(companyId)

Get all assets for a specific company

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdAssetsGet(companyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 

### Return type

[**CompaniesCompanyIdAssetsGet200Response**](CompaniesCompanyIdAssetsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsPost

> CompaniesCompanyIdAssetsPost200Response companiesCompanyIdAssetsPost(companyId, asset)

Create a new asset

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
let asset = new SparteraApiDocumentation.Asset(); // Asset | 
apiInstance.companiesCompanyIdAssetsPost(companyId, asset).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **asset** | [**Asset**](Asset.md)|  | 

### Return type

[**CompaniesCompanyIdAssetsPost200Response**](CompaniesCompanyIdAssetsPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdAssetsStatisticsGet

> CompaniesCompanyIdAssetsGet200Response companiesCompanyIdAssetsStatisticsGet(companyId)

Get statistics for all assets the user has access to

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdAssetsStatisticsGet(companyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 

### Return type

[**CompaniesCompanyIdAssetsGet200Response**](CompaniesCompanyIdAssetsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

