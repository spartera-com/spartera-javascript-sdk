# SparteraApiSdk.APIKeysApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApiKeys**](APIKeysApi.md#createApiKeys) | **POST** /companies/{company_id}/api-keys | Create single API key.     Returns the actual sk_ key (only time it&#39;s exposed) and api_key_id for future operations.
[**createApiKeysApiKeysRevoke**](APIKeysApi.md#createApiKeysApiKeysRevoke) | **POST** /companies/{company_id}/api-keys/{api_key_id}/revoke | Explicitly revoke an API key with reason tracking.     This is different from delete as it includes revocation metadata.
[**deleteApiKeys**](APIKeysApi.md#deleteApiKeys) | **DELETE** /companies/{company_id}/api-keys/{api_key_id} | Delete (deactivate) single API key by api_key_id.     Uses the api_key_id returned during creation for clean identification.     Fixed to use correct primary key lookup.
[**getApiKeysById**](APIKeysApi.md#getApiKeysById) | **GET** /companies/{company_id}/api-keys/{api_key_id} | Get single API key by ID.     Returns masked API key for security (sk_****1234).
[**getApiKeysByIdApiKeysStats**](APIKeysApi.md#getApiKeysByIdApiKeysStats) | **GET** /companies/{company_id}/api-keys/{api_key_id}/stats | Get usage statistics for a specific API key.     Returns usage count, last used date, failed attempts, etc.
[**listApiKeys**](APIKeysApi.md#listApiKeys) | **GET** /companies/{company_id}/api-keys | Get all API keys for a company.     Returns masked API keys for security (sk_****1234).
[**updateApiKeys**](APIKeysApi.md#updateApiKeys) | **PATCH** /companies/{company_id}/api-keys/{api_key_id} | Update an existing API key by ID.     Can update metadata like name, expiration, rate limits, etc.     Cannot update the actual key value (for security).



## createApiKeys

> CreateApiKeys200Response createApiKeys(companyId, apiKeysInput, opts)

Create single API key.     Returns the actual sk_ key (only time it&#39;s exposed) and api_key_id for future operations.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.APIKeysApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let apiKeysInput = new SparteraApiSdk.ApiKeysInput(); // ApiKeysInput | 
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.createApiKeys(companyId, apiKeysInput, opts, (error, data, response) => {
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
 **companyId** | **String**| Unique identifier for the Company | 
 **apiKeysInput** | [**ApiKeysInput**](ApiKeysInput.md)|  | 
 **page** | **Number**| Page number for pagination | [optional] [default to 1]
 **limit** | **Number**| Number of items per page | [optional] [default to 20]
 **sortBy** | **String**| Field to sort by | [optional] 
 **sortOrder** | **String**| Sort order (ascending or descending) | [optional] [default to &#39;desc&#39;]
 **search** | **String**| Search term to filter results | [optional] 

### Return type

[**CreateApiKeys200Response**](CreateApiKeys200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createApiKeysApiKeysRevoke

> CreateApiKeys200Response createApiKeysApiKeysRevoke(companyId, apiKeyId, apiKeysInput)

Explicitly revoke an API key with reason tracking.     This is different from delete as it includes revocation metadata.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.APIKeysApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let apiKeyId = "apiKeyId_example"; // String | Unique identifier for the Api Key
let apiKeysInput = new SparteraApiSdk.ApiKeysInput(); // ApiKeysInput | 
apiInstance.createApiKeysApiKeysRevoke(companyId, apiKeyId, apiKeysInput, (error, data, response) => {
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
 **companyId** | **String**| Unique identifier for the Company | 
 **apiKeyId** | **String**| Unique identifier for the Api Key | 
 **apiKeysInput** | [**ApiKeysInput**](ApiKeysInput.md)|  | 

### Return type

[**CreateApiKeys200Response**](CreateApiKeys200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApiKeys

> DeleteApiKeys200Response deleteApiKeys(companyId, apiKeyId)

Delete (deactivate) single API key by api_key_id.     Uses the api_key_id returned during creation for clean identification.     Fixed to use correct primary key lookup.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.APIKeysApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let apiKeyId = "apiKeyId_example"; // String | Unique identifier for the Api Key
apiInstance.deleteApiKeys(companyId, apiKeyId, (error, data, response) => {
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
 **companyId** | **String**| Unique identifier for the Company | 
 **apiKeyId** | **String**| Unique identifier for the Api Key | 

### Return type

[**DeleteApiKeys200Response**](DeleteApiKeys200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApiKeysById

> GetApiKeysById200Response getApiKeysById(companyId, apiKeyId)

Get single API key by ID.     Returns masked API key for security (sk_****1234).

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.APIKeysApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let apiKeyId = "apiKeyId_example"; // String | Unique identifier for the Api Key
apiInstance.getApiKeysById(companyId, apiKeyId, (error, data, response) => {
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
 **companyId** | **String**| Unique identifier for the Company | 
 **apiKeyId** | **String**| Unique identifier for the Api Key | 

### Return type

[**GetApiKeysById200Response**](GetApiKeysById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApiKeysByIdApiKeysStats

> GetApiKeysById200Response getApiKeysByIdApiKeysStats(companyId, apiKeyId)

Get usage statistics for a specific API key.     Returns usage count, last used date, failed attempts, etc.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.APIKeysApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let apiKeyId = "apiKeyId_example"; // String | Unique identifier for the Api Key
apiInstance.getApiKeysByIdApiKeysStats(companyId, apiKeyId, (error, data, response) => {
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
 **companyId** | **String**| Unique identifier for the Company | 
 **apiKeyId** | **String**| Unique identifier for the Api Key | 

### Return type

[**GetApiKeysById200Response**](GetApiKeysById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listApiKeys

> ListApiKeys200Response listApiKeys(companyId, opts)

Get all API keys for a company.     Returns masked API keys for security (sk_****1234).

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.APIKeysApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listApiKeys(companyId, opts, (error, data, response) => {
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
 **companyId** | **String**| Unique identifier for the Company | 
 **page** | **Number**| Page number for pagination | [optional] [default to 1]
 **limit** | **Number**| Number of items per page | [optional] [default to 20]
 **sortBy** | **String**| Field to sort by | [optional] 
 **sortOrder** | **String**| Sort order (ascending or descending) | [optional] [default to &#39;desc&#39;]
 **search** | **String**| Search term to filter results | [optional] 

### Return type

[**ListApiKeys200Response**](ListApiKeys200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateApiKeys

> UpdateApiKeys200Response updateApiKeys(companyId, apiKeyId, apiKeysUpdate)

Update an existing API key by ID.     Can update metadata like name, expiration, rate limits, etc.     Cannot update the actual key value (for security).

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.APIKeysApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let apiKeyId = "apiKeyId_example"; // String | Unique identifier for the Api Key
let apiKeysUpdate = new SparteraApiSdk.ApiKeysUpdate(); // ApiKeysUpdate | 
apiInstance.updateApiKeys(companyId, apiKeyId, apiKeysUpdate, (error, data, response) => {
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
 **companyId** | **String**| Unique identifier for the Company | 
 **apiKeyId** | **String**| Unique identifier for the Api Key | 
 **apiKeysUpdate** | [**ApiKeysUpdate**](ApiKeysUpdate.md)|  | 

### Return type

[**UpdateApiKeys200Response**](UpdateApiKeys200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

