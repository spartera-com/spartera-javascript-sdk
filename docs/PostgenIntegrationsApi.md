# SparteraApiSdk.PostgenIntegrationsApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPostgenIntegrations**](PostgenIntegrationsApi.md#createPostgenIntegrations) | **POST** /companies/{company_id}/postgen_integrations | POST /companies/{company_id}/postgen_integrations
[**createPostgenIntegrationsTest**](PostgenIntegrationsApi.md#createPostgenIntegrationsTest) | **POST** /companies/{company_id}/postgen_integrations/test | POST /companies/{company_id}/postgen_integrations/test
[**deletePostgenIntegrations**](PostgenIntegrationsApi.md#deletePostgenIntegrations) | **DELETE** /companies/{company_id}/postgen_integrations/{integration_id} | Delete single integration by ID.     Also deletes credentials from GCP Secret Manager.
[**getPostgenIntegrationsById**](PostgenIntegrationsApi.md#getPostgenIntegrationsById) | **GET** /companies/{company_id}/postgen_integrations/{integration_id} | Get single integration by ID.
[**listPostgenIntegrations**](PostgenIntegrationsApi.md#listPostgenIntegrations) | **GET** /companies/{company_id}/postgen_integrations | Get a list of all postgen integrations for the company.     All company users can view integrations.
[**updatePostgenIntegrations**](PostgenIntegrationsApi.md#updatePostgenIntegrations) | **PATCH** /companies/{company_id}/postgen_integrations/{integration_id} | Update an existing integration by ID.      Can update credentials, is_active status, etc.



## createPostgenIntegrations

> CreatePostgenIntegrations200Response createPostgenIntegrations(companyId, postgenIntegrationsInput, opts)

POST /companies/{company_id}/postgen_integrations

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostgenIntegrationsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let postgenIntegrationsInput = new SparteraApiSdk.PostgenIntegrationsInput(); // PostgenIntegrationsInput | 
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.createPostgenIntegrations(companyId, postgenIntegrationsInput, opts, (error, data, response) => {
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
 **postgenIntegrationsInput** | [**PostgenIntegrationsInput**](PostgenIntegrationsInput.md)|  | 
 **page** | **Number**| Page number for pagination | [optional] [default to 1]
 **limit** | **Number**| Number of items per page | [optional] [default to 20]
 **sortBy** | **String**| Field to sort by | [optional] 
 **sortOrder** | **String**| Sort order (ascending or descending) | [optional] [default to &#39;desc&#39;]
 **search** | **String**| Search term to filter results | [optional] 

### Return type

[**CreatePostgenIntegrations200Response**](CreatePostgenIntegrations200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPostgenIntegrationsTest

> CreatePostgenIntegrations200Response createPostgenIntegrationsTest(companyId, postgenIntegrationsInput)

POST /companies/{company_id}/postgen_integrations/test

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostgenIntegrationsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let postgenIntegrationsInput = new SparteraApiSdk.PostgenIntegrationsInput(); // PostgenIntegrationsInput | 
apiInstance.createPostgenIntegrationsTest(companyId, postgenIntegrationsInput, (error, data, response) => {
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
 **postgenIntegrationsInput** | [**PostgenIntegrationsInput**](PostgenIntegrationsInput.md)|  | 

### Return type

[**CreatePostgenIntegrations200Response**](CreatePostgenIntegrations200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePostgenIntegrations

> DeletePostgenIntegrations200Response deletePostgenIntegrations(companyId, integrationId)

Delete single integration by ID.     Also deletes credentials from GCP Secret Manager.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostgenIntegrationsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let integrationId = "integrationId_example"; // String | Unique identifier for the Integration
apiInstance.deletePostgenIntegrations(companyId, integrationId, (error, data, response) => {
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
 **integrationId** | **String**| Unique identifier for the Integration | 

### Return type

[**DeletePostgenIntegrations200Response**](DeletePostgenIntegrations200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPostgenIntegrationsById

> GetPostgenIntegrationsById200Response getPostgenIntegrationsById(companyId, integrationId)

Get single integration by ID.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostgenIntegrationsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let integrationId = "integrationId_example"; // String | Unique identifier for the Integration
apiInstance.getPostgenIntegrationsById(companyId, integrationId, (error, data, response) => {
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
 **integrationId** | **String**| Unique identifier for the Integration | 

### Return type

[**GetPostgenIntegrationsById200Response**](GetPostgenIntegrationsById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPostgenIntegrations

> ListPostgenIntegrations200Response listPostgenIntegrations(companyId, opts)

Get a list of all postgen integrations for the company.     All company users can view integrations.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostgenIntegrationsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listPostgenIntegrations(companyId, opts, (error, data, response) => {
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

[**ListPostgenIntegrations200Response**](ListPostgenIntegrations200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePostgenIntegrations

> UpdatePostgenIntegrations200Response updatePostgenIntegrations(companyId, integrationId, postgenIntegrationsUpdate)

Update an existing integration by ID.      Can update credentials, is_active status, etc.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostgenIntegrationsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let integrationId = "integrationId_example"; // String | Unique identifier for the Integration
let postgenIntegrationsUpdate = new SparteraApiSdk.PostgenIntegrationsUpdate(); // PostgenIntegrationsUpdate | 
apiInstance.updatePostgenIntegrations(companyId, integrationId, postgenIntegrationsUpdate, (error, data, response) => {
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
 **integrationId** | **String**| Unique identifier for the Integration | 
 **postgenIntegrationsUpdate** | [**PostgenIntegrationsUpdate**](PostgenIntegrationsUpdate.md)|  | 

### Return type

[**UpdatePostgenIntegrations200Response**](UpdatePostgenIntegrations200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

