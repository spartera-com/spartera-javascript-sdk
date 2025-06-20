# SparteraApiDocumentation.CloudProvidersApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudProvidersGet**](CloudProvidersApi.md#cloudProvidersGet) | **GET** /cloud-providers | Get a list of all cloud providers
[**cloudProvidersPost**](CloudProvidersApi.md#cloudProvidersPost) | **POST** /cloud-providers | Create single cloud provider
[**cloudProvidersProviderIdDelete**](CloudProvidersApi.md#cloudProvidersProviderIdDelete) | **DELETE** /cloud-providers/{provider_id} | Delete single cloud provider by ID
[**cloudProvidersProviderIdGet**](CloudProvidersApi.md#cloudProvidersProviderIdGet) | **GET** /cloud-providers/{provider_id} | Get single cloud provider by ID
[**cloudProvidersProviderIdPatch**](CloudProvidersApi.md#cloudProvidersProviderIdPatch) | **PATCH** /cloud-providers/{provider_id} | Update an existing cloud provider by ID



## cloudProvidersGet

> Object cloudProvidersGet()

Get a list of all cloud providers

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CloudProvidersApi();
apiInstance.cloudProvidersGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cloudProvidersPost

> Object cloudProvidersPost()

Create single cloud provider

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CloudProvidersApi();
apiInstance.cloudProvidersPost().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cloudProvidersProviderIdDelete

> Object cloudProvidersProviderIdDelete(providerId)

Delete single cloud provider by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CloudProvidersApi();
let providerId = "providerId_example"; // String | 
apiInstance.cloudProvidersProviderIdDelete(providerId).then((data) => {
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


## cloudProvidersProviderIdGet

> Object cloudProvidersProviderIdGet(providerId)

Get single cloud provider by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CloudProvidersApi();
let providerId = "providerId_example"; // String | 
apiInstance.cloudProvidersProviderIdGet(providerId).then((data) => {
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


## cloudProvidersProviderIdPatch

> Object cloudProvidersProviderIdPatch(providerId)

Update an existing cloud provider by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CloudProvidersApi();
let providerId = "providerId_example"; // String | 
apiInstance.cloudProvidersProviderIdPatch(providerId).then((data) => {
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

