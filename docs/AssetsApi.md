# SparteraApiDocumentation.AssetsApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyzeCompanyHandleAssetsAssetSlugGet**](AssetsApi.md#analyzeCompanyHandleAssetsAssetSlugGet) | **GET** /analyze/{company_handle}/assets/{asset_slug} | Process assets route that handles both owned and purchased assets.             Minimal route function that passes all logic to crudder.process_asset              Args:                 asset_path: The path after /analyze/ containing asset information                 company_handle: The subdomain from Flask&#39;s routing (if available)
[**companiesCompanyIdAssetsAssetIdDelete**](AssetsApi.md#companiesCompanyIdAssetsAssetIdDelete) | **DELETE** /companies/{company_id}/assets/{asset_id} | Delete single asset by ID
[**companiesCompanyIdAssetsAssetIdGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdGet) | **GET** /companies/{company_id}/assets/{asset_id} | Get single asset by ID
[**companiesCompanyIdAssetsAssetIdInfoschemaGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdInfoschemaGet) | **GET** /companies/{company_id}/assets/{asset_id}/infoschema | Get the information schema for a specific asset&#39;s table
[**companiesCompanyIdAssetsAssetIdInfoschemaSaveGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdInfoschemaSaveGet) | **GET** /companies/{company_id}/assets/{asset_id}/infoschema/save | Get the information schema for a specific asset and save it to the asset&#39;s asset_schema field
[**companiesCompanyIdAssetsAssetIdPatch**](AssetsApi.md#companiesCompanyIdAssetsAssetIdPatch) | **PATCH** /companies/{company_id}/assets/{asset_id} | Update an existing asset by ID
[**companiesCompanyIdAssetsAssetIdPredictedPriceGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdPredictedPriceGet) | **GET** /companies/{company_id}/assets/{asset_id}/predicted_price | Get AI-predicted pricing for a specific asset
[**companiesCompanyIdAssetsAssetIdRecommendationsExplainGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdRecommendationsExplainGet) | **GET** /companies/{company_id}/assets/{asset_id}/recommendations/explain | Get detailed explanation of how asset recommendations are calculated for debugging purposes.
[**companiesCompanyIdAssetsAssetIdRecommendationsGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdRecommendationsGet) | **GET** /companies/{company_id}/assets/{asset_id}/recommendations | Get asset recommendations for a specific asset using heuristic waterfall matching     Returns list of similar assets based on industry, company, connection, tags, etc.      Query Parameters:     - limit: Number of recommendations to return (default: 12, max: 50)     - min_score: Minimum similarity score threshold (default: 0.1)     - include_details: Include component similarity scores (default: false)
[**companiesCompanyIdAssetsAssetIdStatisticsGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdStatisticsGet) | **GET** /companies/{company_id}/assets/{asset_id}/statistics | Get statistics for a specific asset (public endpoint)
[**companiesCompanyIdAssetsAssetIdTestGet**](AssetsApi.md#companiesCompanyIdAssetsAssetIdTestGet) | **GET** /companies/{company_id}/assets/{asset_id}/test | Test out an Asset (on a subset of data)
[**companiesCompanyIdAssetsGet**](AssetsApi.md#companiesCompanyIdAssetsGet) | **GET** /companies/{company_id}/assets | Get all assets for a specific company
[**companiesCompanyIdAssetsPost**](AssetsApi.md#companiesCompanyIdAssetsPost) | **POST** /companies/{company_id}/assets | Create a new asset
[**companiesCompanyIdAssetsRecommendationsBulkPost**](AssetsApi.md#companiesCompanyIdAssetsRecommendationsBulkPost) | **POST** /companies/{company_id}/assets/recommendations/bulk | Get recommendations for multiple assets in a single request. Useful for pre-loading recommendations.
[**companiesCompanyIdAssetsRecommendationsHealthGet**](AssetsApi.md#companiesCompanyIdAssetsRecommendationsHealthGet) | **GET** /companies/{company_id}/assets/recommendations/health | Health check for the recommendations system with sample data and performance metrics.
[**companiesCompanyIdAssetsStatisticsGet**](AssetsApi.md#companiesCompanyIdAssetsStatisticsGet) | **GET** /companies/{company_id}/assets/statistics | Get statistics for all assets the user has access to



## analyzeCompanyHandleAssetsAssetSlugGet

> Object analyzeCompanyHandleAssetsAssetSlugGet(companyHandle, assetSlug)

Process assets route that handles both owned and purchased assets.             Minimal route function that passes all logic to crudder.process_asset              Args:                 asset_path: The path after /analyze/ containing asset information                 company_handle: The subdomain from Flask&#39;s routing (if available)

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdDelete

> Object companiesCompanyIdAssetsAssetIdDelete(companyId, assetId)

Delete single asset by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdGet

> Object companiesCompanyIdAssetsAssetIdGet(companyId, assetId)

Get single asset by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdInfoschemaGet

> Object companiesCompanyIdAssetsAssetIdInfoschemaGet(companyId, assetId)

Get the information schema for a specific asset&#39;s table

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdInfoschemaSaveGet

> Object companiesCompanyIdAssetsAssetIdInfoschemaSaveGet(companyId, assetId)

Get the information schema for a specific asset and save it to the asset&#39;s asset_schema field

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdPatch

> Object companiesCompanyIdAssetsAssetIdPatch(companyId, assetId, asset)

Update an existing asset by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdPredictedPriceGet

> Object companiesCompanyIdAssetsAssetIdPredictedPriceGet(companyId, assetId)

Get AI-predicted pricing for a specific asset

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdRecommendationsExplainGet

> Object companiesCompanyIdAssetsAssetIdRecommendationsExplainGet(companyId, assetId)

Get detailed explanation of how asset recommendations are calculated for debugging purposes.

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdAssetsAssetIdRecommendationsExplainGet(companyId, assetId).then((data) => {
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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdRecommendationsGet

> Object companiesCompanyIdAssetsAssetIdRecommendationsGet(companyId, assetId, opts)

Get asset recommendations for a specific asset using heuristic waterfall matching     Returns list of similar assets based on industry, company, connection, tags, etc.      Query Parameters:     - limit: Number of recommendations to return (default: 12, max: 50)     - min_score: Minimum similarity score threshold (default: 0.1)     - include_details: Include component similarity scores (default: false)

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
let assetId = "assetId_example"; // String | 
let opts = {
  'limit': "limit_example", // String | 
  'minScore': "minScore_example", // String | 
  'includeDetails': "includeDetails_example" // String | 
};
apiInstance.companiesCompanyIdAssetsAssetIdRecommendationsGet(companyId, assetId, opts).then((data) => {
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
 **limit** | **String**|  | [optional] 
 **minScore** | **String**|  | [optional] 
 **includeDetails** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdStatisticsGet

> Object companiesCompanyIdAssetsAssetIdStatisticsGet(companyId, assetId)

Get statistics for a specific asset (public endpoint)

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsAssetIdTestGet

> Object companiesCompanyIdAssetsAssetIdTestGet(companyId, assetId)

Test out an Asset (on a subset of data)

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsGet

> Object companiesCompanyIdAssetsGet(companyId)

Get all assets for a specific company

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsPost

> Object companiesCompanyIdAssetsPost(companyId, asset)

Create a new asset

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdAssetsRecommendationsBulkPost

> Object companiesCompanyIdAssetsRecommendationsBulkPost(companyId, asset)

Get recommendations for multiple assets in a single request. Useful for pre-loading recommendations.

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
let asset = new SparteraApiDocumentation.Asset(); // Asset | 
apiInstance.companiesCompanyIdAssetsRecommendationsBulkPost(companyId, asset).then((data) => {
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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdAssetsRecommendationsHealthGet

> Object companiesCompanyIdAssetsRecommendationsHealthGet(companyId)

Health check for the recommendations system with sample data and performance metrics.

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.AssetsApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdAssetsRecommendationsHealthGet(companyId).then((data) => {
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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAssetsStatisticsGet

> Object companiesCompanyIdAssetsStatisticsGet(companyId)

Get statistics for all assets the user has access to

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

