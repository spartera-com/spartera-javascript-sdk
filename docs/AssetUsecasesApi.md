# SparteraApiSdk.AssetUsecasesApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAssetUsecasesById**](AssetUsecasesApi.md#getAssetUsecasesById) | **GET** /asset_usecases/{auc_id} | Get single asset use case by ID
[**listAssetUsecases**](AssetUsecasesApi.md#listAssetUsecases) | **GET** /asset_usecases | Get a list of all asset use cases



## getAssetUsecasesById

> GetAssetUsecasesById200Response getAssetUsecasesById(aucId)

Get single asset use case by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetUsecasesApi();
let aucId = "aucId_example"; // String | Unique identifier for the Auc
apiInstance.getAssetUsecasesById(aucId, (error, data, response) => {
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
 **aucId** | **String**| Unique identifier for the Auc | 

### Return type

[**GetAssetUsecasesById200Response**](GetAssetUsecasesById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAssetUsecases

> ListAssetUsecases200Response listAssetUsecases(opts)

Get a list of all asset use cases

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AssetUsecasesApi();
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listAssetUsecases(opts, (error, data, response) => {
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
 **page** | **Number**| Page number for pagination | [optional] [default to 1]
 **limit** | **Number**| Number of items per page | [optional] [default to 20]
 **sortBy** | **String**| Field to sort by | [optional] 
 **sortOrder** | **String**| Sort order (ascending or descending) | [optional] [default to &#39;desc&#39;]
 **search** | **String**| Search term to filter results | [optional] 

### Return type

[**ListAssetUsecases200Response**](ListAssetUsecases200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

