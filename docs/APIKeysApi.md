# SparteraApiDocumentation.APIKeysApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companiesCompanyIdApiKeysApiKeyIdGet**](APIKeysApi.md#companiesCompanyIdApiKeysApiKeyIdGet) | **GET** /companies/{company_id}/api-keys/{api_key_id} | Get single API key by ID
[**companiesCompanyIdApiKeysApiKeyIdPatch**](APIKeysApi.md#companiesCompanyIdApiKeysApiKeyIdPatch) | **PATCH** /companies/{company_id}/api-keys/{api_key_id} | Update an existing API key by ID
[**companiesCompanyIdApiKeysGet**](APIKeysApi.md#companiesCompanyIdApiKeysGet) | **GET** /companies/{company_id}/api-keys | Get all API keys
[**companiesCompanyIdApiKeysPost**](APIKeysApi.md#companiesCompanyIdApiKeysPost) | **POST** /companies/{company_id}/api-keys | Create single API key
[**companiesCompanyIdApiKeysTokenDelete**](APIKeysApi.md#companiesCompanyIdApiKeysTokenDelete) | **DELETE** /companies/{company_id}/api-keys/{token} | Delete single API key by token



## companiesCompanyIdApiKeysApiKeyIdGet

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdApiKeysApiKeyIdGet(companyId, apiKeyId)

Get single API key by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.APIKeysApi();
let companyId = "companyId_example"; // String | 
let apiKeyId = "apiKeyId_example"; // String | 
apiInstance.companiesCompanyIdApiKeysApiKeyIdGet(companyId, apiKeyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **apiKeyId** | **String**|  | 

### Return type

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdApiKeysApiKeyIdPatch

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdApiKeysApiKeyIdPatch(companyId, apiKeyId)

Update an existing API key by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.APIKeysApi();
let companyId = "companyId_example"; // String | 
let apiKeyId = "apiKeyId_example"; // String | 
apiInstance.companiesCompanyIdApiKeysApiKeyIdPatch(companyId, apiKeyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **apiKeyId** | **String**|  | 

### Return type

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdApiKeysGet

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdApiKeysGet(companyId)

Get all API keys

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.APIKeysApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdApiKeysGet(companyId).then((data) => {
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

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdApiKeysPost

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdApiKeysPost(companyId)

Create single API key

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.APIKeysApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdApiKeysPost(companyId).then((data) => {
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

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdApiKeysTokenDelete

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdApiKeysTokenDelete(companyId, token)

Delete single API key by token

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.APIKeysApi();
let companyId = "companyId_example"; // String | 
let token = "token_example"; // String | 
apiInstance.companiesCompanyIdApiKeysTokenDelete(companyId, token).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **token** | **String**|  | 

### Return type

[**CompaniesCompanyIdApiKeysGet200Response**](CompaniesCompanyIdApiKeysGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

