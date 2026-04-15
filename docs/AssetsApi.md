# SparteraApiSdk.AssetsApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAssets**](AssetsApi.md#createAssets) | **POST** /companies/{company_id}/assets | Create a new asset
[**createAssetsAnalyze**](AssetsApi.md#createAssetsAnalyze) | **POST** /analyze/{company_handle}/assets/{asset_slug} | Process (analyze) an asset with dynamic rate limiting applied via decorator.
[**createAssetsScanColumn**](AssetsApi.md#createAssetsScanColumn) | **POST** /companies/{company_id}/assets/{asset_id}/scan_column | Scan a column in the asset&#39;s table to retrieve distinct values      Request Body:         column (str): Column name to scan         limit (int, optional): Maximum distinct values to return (default 1000, max 5000)      Returns:         Flask Response with scan results
[**createAssetsTest**](AssetsApi.md#createAssetsTest) | **POST** /companies/{company_id}/assets/{asset_id}/test | POST /companies/{company_id}/assets/{asset_id}/test
[**deleteAssets**](AssetsApi.md#deleteAssets) | **DELETE** /companies/{company_id}/assets/{asset_id} | Delete single asset by ID
[**getAssetsById**](AssetsApi.md#getAssetsById) | **GET** /companies/{company_id}/assets/{asset_id} | Get single asset by ID
[**getAssetsById2**](AssetsApi.md#getAssetsById2) | **GET** /companies/{company_id}/assets/{asset_id}/statistics | Get statistics for a specific asset (public endpoint)
[**getAssetsByIdAnalyze**](AssetsApi.md#getAssetsByIdAnalyze) | **GET** /analyze/{company_handle}/assets/{asset_slug} | Process (analyze) an asset with dynamic rate limiting applied via decorator.
[**getAssetsByIdInfoschema**](AssetsApi.md#getAssetsByIdInfoschema) | **GET** /companies/{company_id}/assets/{asset_id}/infoschema | Get the information schema for a specific asset&#39;s table
[**getAssetsByIdInfoschemaSave**](AssetsApi.md#getAssetsByIdInfoschemaSave) | **GET** /companies/{company_id}/assets/{asset_id}/infoschema/save | Retrieve and save an asset&#39;s information schema
[**getAssetsByIdPredictedPrice**](AssetsApi.md#getAssetsByIdPredictedPrice) | **GET** /companies/{company_id}/assets/{asset_id}/predicted_price | Get AI-predicted pricing for a specific asset
[**getAssetsByIdStatistics**](AssetsApi.md#getAssetsByIdStatistics) | **GET** /companies/{company_id}/assets/statistics | Get statistics for all assets the user has access to
[**getAssetsByIdTest**](AssetsApi.md#getAssetsByIdTest) | **GET** /companies/{company_id}/assets/{asset_id}/test | GET /companies/{company_id}/assets/{asset_id}/test
[**listAssets**](AssetsApi.md#listAssets) | **GET** /companies/{company_id}/assets | Get all assets for a specific company
[**listAssetsSearch**](AssetsApi.md#listAssetsSearch) | **GET** /companies/{company_id}/assets/search | Search and filter assets with advanced options      Query Parameters:         q: Search query string         category: Filter by category         sport: Filter by sport tag         sort_by: Sort field (name|recent|popular|trending)         limit: Number of results (default 20, max 100)         offset: Offset for pagination         include_recommended: Include recommendations (true/false)         include_schema: Include asset_schema in response (true/false, default false)
[**updateAssets**](AssetsApi.md#updateAssets) | **PATCH** /companies/{company_id}/assets/{asset_id} | Update an existing asset by ID



## createAssets

> CreateAssetsAnalyze200Response createAssets(companyId, assetsInput, opts)

Create a new asset

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetsInput = new SparteraApiSdk.AssetsInput(); // AssetsInput | 
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.createAssets(companyId, assetsInput, opts, (error, data, response) => {
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
 **assetsInput** | [**AssetsInput**](AssetsInput.md)|  | 
 **page** | **Number**| Page number for pagination | [optional] [default to 1]
 **limit** | **Number**| Number of items per page | [optional] [default to 20]
 **sortBy** | **String**| Field to sort by | [optional] 
 **sortOrder** | **String**| Sort order (ascending or descending) | [optional] [default to &#39;desc&#39;]
 **search** | **String**| Search term to filter results | [optional] 

### Return type

[**CreateAssetsAnalyze200Response**](CreateAssetsAnalyze200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAssetsAnalyze

> CreateAssetsAnalyze200Response createAssetsAnalyze(assetSlug, companyHandle, assetsInput)

Process (analyze) an asset with dynamic rate limiting applied via decorator.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let assetSlug = "assetSlug_example"; // String | URL-friendly slug for the Asset
let companyHandle = "companyHandle_example"; // String | Human-readable handle for the Company
let assetsInput = new SparteraApiSdk.AssetsInput(); // AssetsInput | 
apiInstance.createAssetsAnalyze(assetSlug, companyHandle, assetsInput, (error, data, response) => {
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
 **assetSlug** | **String**| URL-friendly slug for the Asset | 
 **companyHandle** | **String**| Human-readable handle for the Company | 
 **assetsInput** | [**AssetsInput**](AssetsInput.md)|  | 

### Return type

[**CreateAssetsAnalyze200Response**](CreateAssetsAnalyze200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAssetsScanColumn

> CreateAssetsAnalyze200Response createAssetsScanColumn(companyId, assetId, assetsInput)

Scan a column in the asset&#39;s table to retrieve distinct values      Request Body:         column (str): Column name to scan         limit (int, optional): Maximum distinct values to return (default 1000, max 5000)      Returns:         Flask Response with scan results

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
let assetsInput = new SparteraApiSdk.AssetsInput(); // AssetsInput | 
apiInstance.createAssetsScanColumn(companyId, assetId, assetsInput, (error, data, response) => {
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
 **assetsInput** | [**AssetsInput**](AssetsInput.md)|  | 

### Return type

[**CreateAssetsAnalyze200Response**](CreateAssetsAnalyze200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAssetsTest

> CreateAssetsAnalyze200Response createAssetsTest(companyId, assetId, assetsInput)

POST /companies/{company_id}/assets/{asset_id}/test

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
let assetsInput = new SparteraApiSdk.AssetsInput(); // AssetsInput | 
apiInstance.createAssetsTest(companyId, assetId, assetsInput, (error, data, response) => {
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
 **assetsInput** | [**AssetsInput**](AssetsInput.md)|  | 

### Return type

[**CreateAssetsAnalyze200Response**](CreateAssetsAnalyze200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAssets

> DeleteAssets200Response deleteAssets(companyId, assetId)

Delete single asset by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
apiInstance.deleteAssets(companyId, assetId, (error, data, response) => {
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

[**DeleteAssets200Response**](DeleteAssets200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetsById

> GetAssetsByIdAnalyze200Response getAssetsById(companyId, assetId)

Get single asset by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
apiInstance.getAssetsById(companyId, assetId, (error, data, response) => {
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

[**GetAssetsByIdAnalyze200Response**](GetAssetsByIdAnalyze200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetsById2

> GetAssetsByIdAnalyze200Response getAssetsById2(companyId, assetId)

Get statistics for a specific asset (public endpoint)

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
apiInstance.getAssetsById2(companyId, assetId, (error, data, response) => {
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

[**GetAssetsByIdAnalyze200Response**](GetAssetsByIdAnalyze200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetsByIdAnalyze

> GetAssetsByIdAnalyze200Response getAssetsByIdAnalyze(assetSlug, companyHandle)

Process (analyze) an asset with dynamic rate limiting applied via decorator.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let assetSlug = "assetSlug_example"; // String | URL-friendly slug for the Asset
let companyHandle = "companyHandle_example"; // String | Human-readable handle for the Company
apiInstance.getAssetsByIdAnalyze(assetSlug, companyHandle, (error, data, response) => {
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
 **assetSlug** | **String**| URL-friendly slug for the Asset | 
 **companyHandle** | **String**| Human-readable handle for the Company | 

### Return type

[**GetAssetsByIdAnalyze200Response**](GetAssetsByIdAnalyze200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetsByIdInfoschema

> GetAssetsByIdAnalyze200Response getAssetsByIdInfoschema(companyId, assetId)

Get the information schema for a specific asset&#39;s table

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
apiInstance.getAssetsByIdInfoschema(companyId, assetId, (error, data, response) => {
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

[**GetAssetsByIdAnalyze200Response**](GetAssetsByIdAnalyze200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetsByIdInfoschemaSave

> GetAssetsByIdAnalyze200Response getAssetsByIdInfoschemaSave(companyId, assetId)

Retrieve and save an asset&#39;s information schema

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
apiInstance.getAssetsByIdInfoschemaSave(companyId, assetId, (error, data, response) => {
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

[**GetAssetsByIdAnalyze200Response**](GetAssetsByIdAnalyze200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetsByIdPredictedPrice

> GetAssetsByIdAnalyze200Response getAssetsByIdPredictedPrice(companyId, assetId)

Get AI-predicted pricing for a specific asset

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
apiInstance.getAssetsByIdPredictedPrice(companyId, assetId, (error, data, response) => {
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

[**GetAssetsByIdAnalyze200Response**](GetAssetsByIdAnalyze200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetsByIdStatistics

> GetAssetsByIdAnalyze200Response getAssetsByIdStatistics(companyId)

Get statistics for all assets the user has access to

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
apiInstance.getAssetsByIdStatistics(companyId, (error, data, response) => {
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

### Return type

[**GetAssetsByIdAnalyze200Response**](GetAssetsByIdAnalyze200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetsByIdTest

> GetAssetsByIdAnalyze200Response getAssetsByIdTest(companyId, assetId)

GET /companies/{company_id}/assets/{asset_id}/test

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
apiInstance.getAssetsByIdTest(companyId, assetId, (error, data, response) => {
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

[**GetAssetsByIdAnalyze200Response**](GetAssetsByIdAnalyze200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAssets

> ListAssets200Response listAssets(companyId, opts)

Get all assets for a specific company

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listAssets(companyId, opts, (error, data, response) => {
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
 **page** | **Number**| Page number for pagination | [optional] [default to 1]
 **limit** | **Number**| Number of items per page | [optional] [default to 20]
 **sortBy** | **String**| Field to sort by | [optional] 
 **sortOrder** | **String**| Sort order (ascending or descending) | [optional] [default to &#39;desc&#39;]
 **search** | **String**| Search term to filter results | [optional] 

### Return type

[**ListAssets200Response**](ListAssets200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAssetsSearch

> ListAssets200Response listAssetsSearch(companyId, opts)

Search and filter assets with advanced options      Query Parameters:         q: Search query string         category: Filter by category         sport: Filter by sport tag         sort_by: Sort field (name|recent|popular|trending)         limit: Number of results (default 20, max 100)         offset: Offset for pagination         include_recommended: Include recommendations (true/false)         include_schema: Include asset_schema in response (true/false, default false)

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listAssetsSearch(companyId, opts, (error, data, response) => {
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
 **page** | **Number**| Page number for pagination | [optional] [default to 1]
 **limit** | **Number**| Number of items per page | [optional] [default to 20]
 **sortBy** | **String**| Field to sort by | [optional] 
 **sortOrder** | **String**| Sort order (ascending or descending) | [optional] [default to &#39;desc&#39;]
 **search** | **String**| Search term to filter results | [optional] 

### Return type

[**ListAssets200Response**](ListAssets200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAssets

> UpdateAssets200Response updateAssets(companyId, assetId, assetsUpdate)

Update an existing asset by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let assetId = "assetId_example"; // String | Unique identifier for the Asset
let assetsUpdate = new SparteraApiSdk.AssetsUpdate(); // AssetsUpdate | 
apiInstance.updateAssets(companyId, assetId, assetsUpdate, (error, data, response) => {
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
 **assetsUpdate** | [**AssetsUpdate**](AssetsUpdate.md)|  | 

### Return type

[**UpdateAssets200Response**](UpdateAssets200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

