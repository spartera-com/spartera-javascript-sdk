# SparteraApiDocumentation.StorageEnginesApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudProvidersProviderIdStorageEnginesEngineIdGet**](StorageEnginesApi.md#cloudProvidersProviderIdStorageEnginesEngineIdGet) | **GET** /cloud-providers/{provider_id}/storage-engines/{engine_id} | Get single storage engine by ID
[**cloudProvidersProviderIdStorageEnginesGet**](StorageEnginesApi.md#cloudProvidersProviderIdStorageEnginesGet) | **GET** /cloud-providers/{provider_id}/storage-engines | Get a list of all storage engines



## cloudProvidersProviderIdStorageEnginesEngineIdGet

> CompaniesCompanyIdApiKeysGet200Response cloudProvidersProviderIdStorageEnginesEngineIdGet(providerId, engineId)

Get single storage engine by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

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

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cloudProvidersProviderIdStorageEnginesGet

> CompaniesCompanyIdApiKeysGet200Response cloudProvidersProviderIdStorageEnginesGet(providerId)

Get a list of all storage engines

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

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

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

