# SparteraApiDocumentation.JobFunctionsApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobFunctionsFunctionIdGet**](JobFunctionsApi.md#jobFunctionsFunctionIdGet) | **GET** /job-functions/{function_id} | Get single job function by ID
[**jobFunctionsGet**](JobFunctionsApi.md#jobFunctionsGet) | **GET** /job-functions | Get a list of all job functions



## jobFunctionsFunctionIdGet

> JobFunctionsFunctionIdGet200Response jobFunctionsFunctionIdGet(functionId)

Get single job function by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.JobFunctionsApi();
let functionId = "functionId_example"; // String | 
apiInstance.jobFunctionsFunctionIdGet(functionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | **String**|  | 

### Return type

[**JobFunctionsFunctionIdGet200Response**](JobFunctionsFunctionIdGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## jobFunctionsGet

> JobFunctionsGet200Response jobFunctionsGet()

Get a list of all job functions

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.JobFunctionsApi();
apiInstance.jobFunctionsGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**JobFunctionsGet200Response**](JobFunctionsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

