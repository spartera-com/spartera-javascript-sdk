# SparteraApiSdk.StorageEnginesApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStorageEnginesById**](StorageEnginesApi.md#getStorageEnginesById) | **GET** /cloud-providers/{provider_id}/storage-engines/{engine_id} | Get single storage engine by ID
[**listStorageEngines**](StorageEnginesApi.md#listStorageEngines) | **GET** /cloud-providers/{provider_id}/storage-engines | Get a list of all storage engines



## getStorageEnginesById

> GetStorageEnginesById200Response getStorageEnginesById(providerId, engineId)

Get single storage engine by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.StorageEnginesApi();
let providerId = "providerId_example"; // String | Unique identifier for the Provider
let engineId = "engineId_example"; // String | Unique identifier for the Engine
apiInstance.getStorageEnginesById(providerId, engineId, (error, data, response) => {
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
 **providerId** | **String**| Unique identifier for the Provider | 
 **engineId** | **String**| Unique identifier for the Engine | 

### Return type

[**GetStorageEnginesById200Response**](GetStorageEnginesById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listStorageEngines

> ListStorageEngines200Response listStorageEngines(providerId, opts)

Get a list of all storage engines

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.StorageEnginesApi();
let providerId = "providerId_example"; // String | Unique identifier for the Provider
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listStorageEngines(providerId, opts, (error, data, response) => {
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
 **providerId** | **String**| Unique identifier for the Provider | 
 **page** | **Number**| Page number for pagination | [optional] [default to 1]
 **limit** | **Number**| Number of items per page | [optional] [default to 20]
 **sortBy** | **String**| Field to sort by | [optional] 
 **sortOrder** | **String**| Sort order (ascending or descending) | [optional] [default to &#39;desc&#39;]
 **search** | **String**| Search term to filter results | [optional] 

### Return type

[**ListStorageEngines200Response**](ListStorageEngines200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

