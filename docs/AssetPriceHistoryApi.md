# SparteraApiSdk.AssetPriceHistoryApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAssetPriceHistory**](AssetPriceHistoryApi.md#createAssetPriceHistory) | **POST** /companies/{company_id}/assets/{asset_id}/prices | Create a new price history record for an asset
[**createAssetPriceHistoryPricesCalculateCredits**](AssetPriceHistoryApi.md#createAssetPriceHistoryPricesCalculateCredits) | **POST** /companies/{company_id}/assets/{asset_id}/prices/calculate_credits | Calculate the credit equivalent for a given USD price without saving
[**createAssetPriceHistoryPricesDiscount**](AssetPriceHistoryApi.md#createAssetPriceHistoryPricesDiscount) | **POST** /companies/{company_id}/assets/{asset_id}/prices/discount | POST /companies/{company_id}/assets/{asset_id}/prices/discount
[**deleteAssetPriceHistory**](AssetPriceHistoryApi.md#deleteAssetPriceHistory) | **DELETE** /companies/{company_id}/assets/{asset_id}/prices/{aph_id} | Delete single price history record by ID
[**getAssetPriceHistoryById**](AssetPriceHistoryApi.md#getAssetPriceHistoryById) | **GET** /companies/{company_id}/assets/{asset_id}/prices | Get all price history records for a specific asset
[**getAssetPriceHistoryByIdAssetsPrices**](AssetPriceHistoryApi.md#getAssetPriceHistoryByIdAssetsPrices) | **GET** /companies/{company_id}/assets/{asset_id}/prices/{aph_id} | Get single price history record by ID
[**getAssetPriceHistoryByIdPricesActive**](AssetPriceHistoryApi.md#getAssetPriceHistoryByIdPricesActive) | **GET** /companies/{company_id}/assets/{asset_id}/prices/active | Get the currently active price for an asset
[**updateAssetPriceHistory**](AssetPriceHistoryApi.md#updateAssetPriceHistory) | **PATCH** /companies/{company_id}/assets/{asset_id}/prices/{aph_id} | Update an existing price history record by ID



## createAssetPriceHistory

> CreateAssetPriceHistory200Response createAssetPriceHistory(companyId, assetId, assetPriceHistoryInput)

Create a new price history record for an asset

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
let assetPriceHistoryInput = new SparteraApiSdk.AssetPriceHistoryInput(); // AssetPriceHistoryInput | 
apiInstance.createAssetPriceHistory(companyId, assetId, assetPriceHistoryInput, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Unique identifier for the Company | 
 **assetId** | **String**| Unique identifier for the Asset | 
 **assetPriceHistoryInput** | [**AssetPriceHistoryInput**](AssetPriceHistoryInput.md)|  | 

### Return type

[**CreateAssetPriceHistory200Response**](CreateAssetPriceHistory200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAssetPriceHistoryPricesCalculateCredits

> CreateAssetPriceHistory200Response createAssetPriceHistoryPricesCalculateCredits(companyId, assetId, assetPriceHistoryInput)

Calculate the credit equivalent for a given USD price without saving

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
let assetPriceHistoryInput = new SparteraApiSdk.AssetPriceHistoryInput(); // AssetPriceHistoryInput | 
apiInstance.createAssetPriceHistoryPricesCalculateCredits(companyId, assetId, assetPriceHistoryInput, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Unique identifier for the Company | 
 **assetId** | **String**| Unique identifier for the Asset | 
 **assetPriceHistoryInput** | [**AssetPriceHistoryInput**](AssetPriceHistoryInput.md)|  | 

### Return type

[**CreateAssetPriceHistory200Response**](CreateAssetPriceHistory200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAssetPriceHistoryPricesDiscount

> CreateAssetPriceHistory200Response createAssetPriceHistoryPricesDiscount(companyId, assetId, assetPriceHistoryInput)

POST /companies/{company_id}/assets/{asset_id}/prices/discount

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
let assetPriceHistoryInput = new SparteraApiSdk.AssetPriceHistoryInput(); // AssetPriceHistoryInput | 
apiInstance.createAssetPriceHistoryPricesDiscount(companyId, assetId, assetPriceHistoryInput, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Unique identifier for the Company | 
 **assetId** | **String**| Unique identifier for the Asset | 
 **assetPriceHistoryInput** | [**AssetPriceHistoryInput**](AssetPriceHistoryInput.md)|  | 

### Return type

[**CreateAssetPriceHistory200Response**](CreateAssetPriceHistory200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAssetPriceHistory

> DeleteAssetPriceHistory200Response deleteAssetPriceHistory(companyId, assetId, aphId)

Delete single price history record by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
let aphId = "aphId_example"; // String | Unique identifier for the Aph
apiInstance.deleteAssetPriceHistory(companyId, assetId, aphId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Unique identifier for the Company | 
 **assetId** | **String**| Unique identifier for the Asset | 
 **aphId** | **String**| Unique identifier for the Aph | 

### Return type

[**DeleteAssetPriceHistory200Response**](DeleteAssetPriceHistory200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetPriceHistoryById

> GetAssetPriceHistoryById200Response getAssetPriceHistoryById(companyId, assetId)

Get all price history records for a specific asset

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
apiInstance.getAssetPriceHistoryById(companyId, assetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Unique identifier for the Company | 
 **assetId** | **String**| Unique identifier for the Asset | 

### Return type

[**GetAssetPriceHistoryById200Response**](GetAssetPriceHistoryById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetPriceHistoryByIdAssetsPrices

> GetAssetPriceHistoryById200Response getAssetPriceHistoryByIdAssetsPrices(companyId, assetId, aphId)

Get single price history record by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
let aphId = "aphId_example"; // String | Unique identifier for the Aph
apiInstance.getAssetPriceHistoryByIdAssetsPrices(companyId, assetId, aphId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Unique identifier for the Company | 
 **assetId** | **String**| Unique identifier for the Asset | 
 **aphId** | **String**| Unique identifier for the Aph | 

### Return type

[**GetAssetPriceHistoryById200Response**](GetAssetPriceHistoryById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetPriceHistoryByIdPricesActive

> GetAssetPriceHistoryById200Response getAssetPriceHistoryByIdPricesActive(companyId, assetId)

Get the currently active price for an asset

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
apiInstance.getAssetPriceHistoryByIdPricesActive(companyId, assetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Unique identifier for the Company | 
 **assetId** | **String**| Unique identifier for the Asset | 

### Return type

[**GetAssetPriceHistoryById200Response**](GetAssetPriceHistoryById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAssetPriceHistory

> UpdateAssetPriceHistory200Response updateAssetPriceHistory(companyId, assetId, aphId, assetPriceHistoryUpdate)

Update an existing price history record by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetPriceHistoryApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
let aphId = "aphId_example"; // String | Unique identifier for the Aph
let assetPriceHistoryUpdate = new SparteraApiSdk.AssetPriceHistoryUpdate(); // AssetPriceHistoryUpdate | 
apiInstance.updateAssetPriceHistory(companyId, assetId, aphId, assetPriceHistoryUpdate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**| Unique identifier for the Company | 
 **assetId** | **String**| Unique identifier for the Asset | 
 **aphId** | **String**| Unique identifier for the Aph | 
 **assetPriceHistoryUpdate** | [**AssetPriceHistoryUpdate**](AssetPriceHistoryUpdate.md)|  | 

### Return type

[**UpdateAssetPriceHistory200Response**](UpdateAssetPriceHistory200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

