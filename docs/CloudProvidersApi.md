# SparteraApiSdk.CloudProvidersApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCloudProvidersById**](CloudProvidersApi.md#getCloudProvidersById) | **GET** /cloud-providers/{provider_id} | Get single cloud provider by ID
[**listCloudProviders**](CloudProvidersApi.md#listCloudProviders) | **GET** /cloud-providers | Get a list of all cloud providers



## getCloudProvidersById

> GetCloudProvidersById200Response getCloudProvidersById(providerId)

Get single cloud provider by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.CloudProvidersApi();
let providerId = "providerId_example"; // String | Unique identifier for the Provider
apiInstance.getCloudProvidersById(providerId, (error, data, response) => {
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

### Return type

[**GetCloudProvidersById200Response**](GetCloudProvidersById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCloudProviders

> ListCloudProviders200Response listCloudProviders(opts)

Get a list of all cloud providers

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.CloudProvidersApi();
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listCloudProviders(opts, (error, data, response) => {
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

[**ListCloudProviders200Response**](ListCloudProviders200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

