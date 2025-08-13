# SparteraApiDocumentation.APIKeysApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companiesCompanyIdApiKeysApiKeyIdDelete**](APIKeysApi.md#companiesCompanyIdApiKeysApiKeyIdDelete) | **DELETE** /companies/{company_id}/api-keys/{api_key_id} | Delete (deactivate) single API key by api_key_id.     Uses the api_key_id returned during creation for clean identification.     Fixed to use correct primary key lookup.
[**companiesCompanyIdApiKeysApiKeyIdGet**](APIKeysApi.md#companiesCompanyIdApiKeysApiKeyIdGet) | **GET** /companies/{company_id}/api-keys/{api_key_id} | Get single API key by ID.     Returns masked API key for security (sk_****1234).
[**companiesCompanyIdApiKeysApiKeyIdPatch**](APIKeysApi.md#companiesCompanyIdApiKeysApiKeyIdPatch) | **PATCH** /companies/{company_id}/api-keys/{api_key_id} | Update an existing API key by ID.     Can update metadata like name, expiration, rate limits, etc.     Cannot update the actual key value (for security).
[**companiesCompanyIdApiKeysApiKeyIdRevokePost**](APIKeysApi.md#companiesCompanyIdApiKeysApiKeyIdRevokePost) | **POST** /companies/{company_id}/api-keys/{api_key_id}/revoke | Explicitly revoke an API key with reason tracking.     This is different from delete as it includes revocation metadata.
[**companiesCompanyIdApiKeysApiKeyIdStatsGet**](APIKeysApi.md#companiesCompanyIdApiKeysApiKeyIdStatsGet) | **GET** /companies/{company_id}/api-keys/{api_key_id}/stats | Get usage statistics for a specific API key.     Returns usage count, last used date, failed attempts, etc.
[**companiesCompanyIdApiKeysGet**](APIKeysApi.md#companiesCompanyIdApiKeysGet) | **GET** /companies/{company_id}/api-keys | Get all API keys for a company.     Returns masked API keys for security (sk_****1234).
[**companiesCompanyIdApiKeysPost**](APIKeysApi.md#companiesCompanyIdApiKeysPost) | **POST** /companies/{company_id}/api-keys | Create single API key.     Returns the actual sk_ key (only time it&#39;s exposed) and api_key_id for future operations.



## companiesCompanyIdApiKeysApiKeyIdDelete

> CompaniesCompanyIdApiKeysApiKeyIdDelete200Response companiesCompanyIdApiKeysApiKeyIdDelete(companyId, apiKeyId)

Delete (deactivate) single API key by api_key_id.     Uses the api_key_id returned during creation for clean identification.     Fixed to use correct primary key lookup.

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
apiInstance.companiesCompanyIdApiKeysApiKeyIdDelete(companyId, apiKeyId).then((data) => {
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

[**CompaniesCompanyIdApiKeysApiKeyIdDelete200Response**](CompaniesCompanyIdApiKeysApiKeyIdDelete200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdApiKeysApiKeyIdGet

> CompaniesCompanyIdApiKeysApiKeyIdGet200Response companiesCompanyIdApiKeysApiKeyIdGet(companyId, apiKeyId)

Get single API key by ID.     Returns masked API key for security (sk_****1234).

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

[**CompaniesCompanyIdApiKeysApiKeyIdGet200Response**](CompaniesCompanyIdApiKeysApiKeyIdGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdApiKeysApiKeyIdPatch

> CompaniesCompanyIdApiKeysApiKeyIdPatch200Response companiesCompanyIdApiKeysApiKeyIdPatch(companyId, apiKeyId, apiKeysUpdate)

Update an existing API key by ID.     Can update metadata like name, expiration, rate limits, etc.     Cannot update the actual key value (for security).

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
let apiKeysUpdate = new SparteraApiDocumentation.ApiKeysUpdate(); // ApiKeysUpdate | 
apiInstance.companiesCompanyIdApiKeysApiKeyIdPatch(companyId, apiKeyId, apiKeysUpdate).then((data) => {
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
 **apiKeysUpdate** | [**ApiKeysUpdate**](ApiKeysUpdate.md)|  | 

### Return type

[**CompaniesCompanyIdApiKeysApiKeyIdPatch200Response**](CompaniesCompanyIdApiKeysApiKeyIdPatch200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdApiKeysApiKeyIdRevokePost

> CompaniesCompanyIdApiKeysPost200Response companiesCompanyIdApiKeysApiKeyIdRevokePost(companyId, apiKeyId, apiKeysInput)

Explicitly revoke an API key with reason tracking.     This is different from delete as it includes revocation metadata.

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
let apiKeysInput = new SparteraApiDocumentation.ApiKeysInput(); // ApiKeysInput | 
apiInstance.companiesCompanyIdApiKeysApiKeyIdRevokePost(companyId, apiKeyId, apiKeysInput).then((data) => {
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
 **apiKeysInput** | [**ApiKeysInput**](ApiKeysInput.md)|  | 

### Return type

[**CompaniesCompanyIdApiKeysPost200Response**](CompaniesCompanyIdApiKeysPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdApiKeysApiKeyIdStatsGet

> CompaniesCompanyIdApiKeysGet200Response companiesCompanyIdApiKeysApiKeyIdStatsGet(companyId, apiKeyId)

Get usage statistics for a specific API key.     Returns usage count, last used date, failed attempts, etc.

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
apiInstance.companiesCompanyIdApiKeysApiKeyIdStatsGet(companyId, apiKeyId).then((data) => {
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

Get all API keys for a company.     Returns masked API keys for security (sk_****1234).

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

> CompaniesCompanyIdApiKeysPost200Response companiesCompanyIdApiKeysPost(companyId, apiKeysInput)

Create single API key.     Returns the actual sk_ key (only time it&#39;s exposed) and api_key_id for future operations.

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
let apiKeysInput = new SparteraApiDocumentation.ApiKeysInput(); // ApiKeysInput | 
apiInstance.companiesCompanyIdApiKeysPost(companyId, apiKeysInput).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **apiKeysInput** | [**ApiKeysInput**](ApiKeysInput.md)|  | 

### Return type

[**CompaniesCompanyIdApiKeysPost200Response**](CompaniesCompanyIdApiKeysPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

