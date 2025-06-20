# SparteraApiDocumentation.StorageEnginesApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudProvidersProviderIdStorageEnginesEngineIdGet**](StorageEnginesApi.md#cloudProvidersProviderIdStorageEnginesEngineIdGet) | **GET** /cloud-providers/{provider_id}/storage-engines/{engine_id} | Get single storage engine by ID
[**cloudProvidersProviderIdStorageEnginesGet**](StorageEnginesApi.md#cloudProvidersProviderIdStorageEnginesGet) | **GET** /cloud-providers/{provider_id}/storage-engines | Get a list of all storage engines



## cloudProvidersProviderIdStorageEnginesEngineIdGet

> Object cloudProvidersProviderIdStorageEnginesEngineIdGet(providerId, engineId)

Get single storage engine by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.StorageEnginesApi();
let providerId = "providerId_example"; // String | 
let engineId = "engineId_example"; // String | 
apiInstance.cloudProvidersProviderIdStorageEnginesEngineIdGet(providerId, engineId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **String**|  | 
 **engineId** | **String**|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cloudProvidersProviderIdStorageEnginesGet

> Object cloudProvidersProviderIdStorageEnginesGet(providerId)

Get a list of all storage engines

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.StorageEnginesApi();
let providerId = "providerId_example"; // String | 
apiInstance.cloudProvidersProviderIdStorageEnginesGet(providerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **String**|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

