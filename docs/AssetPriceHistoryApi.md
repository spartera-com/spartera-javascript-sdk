# SparteraApiDocumentation.AssetPriceHistoryApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companiesCompanyIdAssetsAssetIdPricesActiveGet**](AssetPriceHistoryApi.md#companiesCompanyIdAssetsAssetIdPricesActiveGet) | **GET** /companies/{company_id}/assets/{asset_id}/prices/active | Get the currently active price for an asset
[**companiesCompanyIdAssetsAssetIdPricesAphIdDelete**](AssetPriceHistoryApi.md#companiesCompanyIdAssetsAssetIdPricesAphIdDelete) | **DELETE** /companies/{company_id}/assets/{asset_id}/prices/{aph_id} | Delete single price history record by ID
[**companiesCompanyIdAssetsAssetIdPricesAphIdGet**](AssetPriceHistoryApi.md#companiesCompanyIdAssetsAssetIdPricesAphIdGet) | **GET** /companies/{company_id}/assets/{asset_id}/prices/{aph_id} | Get single price history record by ID
[**companiesCompanyIdAssetsAssetIdPricesAphIdPatch**](AssetPriceHistoryApi.md#companiesCompanyIdAssetsAssetIdPricesAphIdPatch) | **PATCH** /companies/{company_id}/assets/{asset_id}/prices/{aph_id} | Update an existing price history record by ID
[**companiesCompanyIdAssetsAssetIdPricesCalculateCreditsPost**](AssetPriceHistoryApi.md#companiesCompanyIdAssetsAssetIdPricesCalculateCreditsPost) | **POST** /companies/{company_id}/assets/{asset_id}/prices/calculate_credits | POST /companies/{company_id}/assets/{asset_id}/prices/calculate_credits
[**companiesCompanyIdAssetsAssetIdPricesDiscountPost**](AssetPriceHistoryApi.md#companiesCompanyIdAssetsAssetIdPricesDiscountPost) | **POST** /companies/{company_id}/assets/{asset_id}/prices/discount | POST /companies/{company_id}/assets/{asset_id}/prices/discount
[**companiesCompanyIdAssetsAssetIdPricesGet**](AssetPriceHistoryApi.md#companiesCompanyIdAssetsAssetIdPricesGet) | **GET** /companies/{company_id}/assets/{asset_id}/prices | Get all price history records for a specific asset
[**companiesCompanyIdAssetsAssetIdPricesPost**](AssetPriceHistoryApi.md#companiesCompanyIdAssetsAssetIdPricesPost) | **POST** /companies/{company_id}/assets/{asset_id}/prices | Create a new price history record for an asset



## companiesCompanyIdAssetsAssetIdPricesActiveGet

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdAssetsAssetIdPricesActiveGet(companyId, assetId)

Get the currently active price for an asset

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdPricesActiveGet(companyId, assetId).then((data) => {
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

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdPricesAphIdDelete

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdAssetsAssetIdPricesAphIdDelete(companyId, assetId, aphId)

Delete single price history record by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
let aphId = "aphId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdPricesAphIdDelete(companyId, assetId, aphId).then((data) => {
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
 **aphId** | **String**|  | 

### Return type

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdPricesAphIdGet

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdAssetsAssetIdPricesAphIdGet(companyId, assetId, aphId)

Get single price history record by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
let aphId = "aphId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdPricesAphIdGet(companyId, assetId, aphId).then((data) => {
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
 **aphId** | **String**|  | 

### Return type

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdPricesAphIdPatch

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdAssetsAssetIdPricesAphIdPatch(companyId, assetId, aphId)

Update an existing price history record by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
let aphId = "aphId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdPricesAphIdPatch(companyId, assetId, aphId).then((data) => {
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
 **aphId** | **String**|  | 

### Return type

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdPricesCalculateCreditsPost

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdAssetsAssetIdPricesCalculateCreditsPost(companyId, assetId)

POST /companies/{company_id}/assets/{asset_id}/prices/calculate_credits

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdPricesCalculateCreditsPost(companyId, assetId).then((data) => {
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

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdPricesDiscountPost

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdAssetsAssetIdPricesDiscountPost(companyId, assetId)

POST /companies/{company_id}/assets/{asset_id}/prices/discount

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdPricesDiscountPost(companyId, assetId).then((data) => {
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

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdPricesGet

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdAssetsAssetIdPricesGet(companyId, assetId)

Get all price history records for a specific asset

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdPricesGet(companyId, assetId).then((data) => {
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

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdPricesPost

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdAssetsAssetIdPricesPost(companyId, assetId)

Create a new price history record for an asset

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdPricesPost(companyId, assetId).then((data) => {
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

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

