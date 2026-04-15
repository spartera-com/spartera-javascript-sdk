# SparteraApiSdk.EndpointsApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEndpoints**](EndpointsApi.md#createEndpoints) | **POST** /companies/{company_id}/endpoints | Create a new endpoint
[**createEndpointsKeys**](EndpointsApi.md#createEndpointsKeys) | **POST** /companies/{company_id}/endpoints/{endpoint_id}/keys | POST /companies/{company_id}/endpoints/{endpoint_id}/keys
[**deleteEndpoints**](EndpointsApi.md#deleteEndpoints) | **DELETE** /companies/{company_id}/endpoints/{endpoint_id} | Delete single endpoint by ID
[**deleteEndpointsKeys**](EndpointsApi.md#deleteEndpointsKeys) | **DELETE** /companies/{company_id}/endpoints/{endpoint_id}/keys/{api_key_id} | DELETE /companies/{company_id}/endpoints/{endpoint_id}/keys/{api_key_id}
[**getEndpointsById**](EndpointsApi.md#getEndpointsById) | **GET** /companies/{company_id}/endpoints/{endpoint_id} | Get single endpoint by ID
[**getEndpointsByIdAvailableEndpoints**](EndpointsApi.md#getEndpointsByIdAvailableEndpoints) | **GET** /companies/{company_id}/endpoints/{endpoint_id}/available-endpoints | GET /companies/{company_id}/endpoints/{endpoint_id}/available-endpoints
[**getEndpointsByIdConnectionsDescribe**](EndpointsApi.md#getEndpointsByIdConnectionsDescribe) | **GET** /companies/{company_id}/endpoints/../connections/{connection_id}/describe | Get schema information for a connection      Query parameters:         include_fields: Whether to include field information (default: true)         schemas: Optional comma-separated schemas to include         tables: Optional comma-separated tables to include
[**getEndpointsByIdExecute**](EndpointsApi.md#getEndpointsByIdExecute) | **GET** /companies/{company_id}/endpoints/{endpoint_id}/execute | Execute an endpoint with pagination support.      Customer-facing route that returns paginated data.     Query params: ?start&#x3D;0&amp;limit&#x3D;100
[**getEndpointsByIdKeys**](EndpointsApi.md#getEndpointsByIdKeys) | **GET** /companies/{company_id}/endpoints/{endpoint_id}/keys | GET /companies/{company_id}/endpoints/{endpoint_id}/keys
[**getEndpointsByIdStats**](EndpointsApi.md#getEndpointsByIdStats) | **GET** /companies/{company_id}/endpoints/{endpoint_id}/stats | Get usage statistics for an endpoint      Query parameters:         days: Number of days to analyze (default: 30)
[**getEndpointsByIdTest**](EndpointsApi.md#getEndpointsByIdTest) | **GET** /companies/{company_id}/endpoints/{endpoint_id}/test | Test an endpoint with sample data      Request body (optional):         limit: Number of sample rows to return (default: 10)
[**getEndpointsByIdUrl**](EndpointsApi.md#getEndpointsByIdUrl) | **GET** /companies/{company_id}/endpoints/{endpoint_id}/url | GET /companies/{company_id}/endpoints/{endpoint_id}/url
[**listEndpoints**](EndpointsApi.md#listEndpoints) | **GET** /companies/{company_id}/endpoints | Get all endpoints for a specific company with pagination, filtering, and sorting
[**updateEndpoints**](EndpointsApi.md#updateEndpoints) | **PATCH** /companies/{company_id}/endpoints/{endpoint_id} | Update an existing endpoint by ID



## createEndpoints

> CreateEndpoints200Response createEndpoints(companyId, endpointsInput, opts)

Create a new endpoint

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let endpointsInput = new SparteraApiSdk.EndpointsInput(); // EndpointsInput | 
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.createEndpoints(companyId, endpointsInput, opts, (error, data, response) => {
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
 **endpointsInput** | [**EndpointsInput**](EndpointsInput.md)|  | 
 **page** | **Number**| Page number for pagination | [optional] [default to 1]
 **limit** | **Number**| Number of items per page | [optional] [default to 20]
 **sortBy** | **String**| Field to sort by | [optional] 
 **sortOrder** | **String**| Sort order (ascending or descending) | [optional] [default to &#39;desc&#39;]
 **search** | **String**| Search term to filter results | [optional] 

### Return type

[**CreateEndpoints200Response**](CreateEndpoints200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEndpointsKeys

> CreateEndpoints200Response createEndpointsKeys(companyId, endpointId, endpointsInput)

POST /companies/{company_id}/endpoints/{endpoint_id}/keys

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let endpointId = "endpointId_example"; // String | Unique identifier for the Endpoint
let endpointsInput = new SparteraApiSdk.EndpointsInput(); // EndpointsInput | 
apiInstance.createEndpointsKeys(companyId, endpointId, endpointsInput, (error, data, response) => {
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
 **endpointId** | **String**| Unique identifier for the Endpoint | 
 **endpointsInput** | [**EndpointsInput**](EndpointsInput.md)|  | 

### Return type

[**CreateEndpoints200Response**](CreateEndpoints200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEndpoints

> DeleteEndpoints200Response deleteEndpoints(companyId, endpointId)

Delete single endpoint by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let endpointId = "endpointId_example"; // String | Unique identifier for the Endpoint
apiInstance.deleteEndpoints(companyId, endpointId, (error, data, response) => {
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
 **endpointId** | **String**| Unique identifier for the Endpoint | 

### Return type

[**DeleteEndpoints200Response**](DeleteEndpoints200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEndpointsKeys

> DeleteEndpoints200Response deleteEndpointsKeys(companyId, endpointId, apiKeyId)

DELETE /companies/{company_id}/endpoints/{endpoint_id}/keys/{api_key_id}

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let endpointId = "endpointId_example"; // String | Unique identifier for the Endpoint
let apiKeyId = "apiKeyId_example"; // String | Unique identifier for the Api Key
apiInstance.deleteEndpointsKeys(companyId, endpointId, apiKeyId, (error, data, response) => {
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
 **endpointId** | **String**| Unique identifier for the Endpoint | 
 **apiKeyId** | **String**| Unique identifier for the Api Key | 

### Return type

[**DeleteEndpoints200Response**](DeleteEndpoints200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEndpointsById

> GetEndpointsByIdConnectionsDescribe200Response getEndpointsById(companyId, endpointId)

Get single endpoint by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let endpointId = "endpointId_example"; // String | Unique identifier for the Endpoint
apiInstance.getEndpointsById(companyId, endpointId, (error, data, response) => {
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
 **endpointId** | **String**| Unique identifier for the Endpoint | 

### Return type

[**GetEndpointsByIdConnectionsDescribe200Response**](GetEndpointsByIdConnectionsDescribe200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEndpointsByIdAvailableEndpoints

> GetEndpointsByIdConnectionsDescribe200Response getEndpointsByIdAvailableEndpoints(companyId, endpointId)

GET /companies/{company_id}/endpoints/{endpoint_id}/available-endpoints

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let endpointId = "endpointId_example"; // String | Unique identifier for the Endpoint
apiInstance.getEndpointsByIdAvailableEndpoints(companyId, endpointId, (error, data, response) => {
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
 **endpointId** | **String**| Unique identifier for the Endpoint | 

### Return type

[**GetEndpointsByIdConnectionsDescribe200Response**](GetEndpointsByIdConnectionsDescribe200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEndpointsByIdConnectionsDescribe

> GetEndpointsByIdConnectionsDescribe200Response getEndpointsByIdConnectionsDescribe(companyId, connectionId)

Get schema information for a connection      Query parameters:         include_fields: Whether to include field information (default: true)         schemas: Optional comma-separated schemas to include         tables: Optional comma-separated tables to include

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let connectionId = "connectionId_example"; // String | Unique identifier for the Connection
apiInstance.getEndpointsByIdConnectionsDescribe(companyId, connectionId, (error, data, response) => {
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
 **connectionId** | **String**| Unique identifier for the Connection | 

### Return type

[**GetEndpointsByIdConnectionsDescribe200Response**](GetEndpointsByIdConnectionsDescribe200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEndpointsByIdExecute

> GetEndpointsByIdConnectionsDescribe200Response getEndpointsByIdExecute(companyId, endpointId)

Execute an endpoint with pagination support.      Customer-facing route that returns paginated data.     Query params: ?start&#x3D;0&amp;limit&#x3D;100

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let endpointId = "endpointId_example"; // String | Unique identifier for the Endpoint
apiInstance.getEndpointsByIdExecute(companyId, endpointId, (error, data, response) => {
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
 **endpointId** | **String**| Unique identifier for the Endpoint | 

### Return type

[**GetEndpointsByIdConnectionsDescribe200Response**](GetEndpointsByIdConnectionsDescribe200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEndpointsByIdKeys

> GetEndpointsByIdConnectionsDescribe200Response getEndpointsByIdKeys(companyId, endpointId)

GET /companies/{company_id}/endpoints/{endpoint_id}/keys

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let endpointId = "endpointId_example"; // String | Unique identifier for the Endpoint
apiInstance.getEndpointsByIdKeys(companyId, endpointId, (error, data, response) => {
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
 **endpointId** | **String**| Unique identifier for the Endpoint | 

### Return type

[**GetEndpointsByIdConnectionsDescribe200Response**](GetEndpointsByIdConnectionsDescribe200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEndpointsByIdStats

> GetEndpointsByIdConnectionsDescribe200Response getEndpointsByIdStats(companyId, endpointId)

Get usage statistics for an endpoint      Query parameters:         days: Number of days to analyze (default: 30)

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let endpointId = "endpointId_example"; // String | Unique identifier for the Endpoint
apiInstance.getEndpointsByIdStats(companyId, endpointId, (error, data, response) => {
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
 **endpointId** | **String**| Unique identifier for the Endpoint | 

### Return type

[**GetEndpointsByIdConnectionsDescribe200Response**](GetEndpointsByIdConnectionsDescribe200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEndpointsByIdTest

> GetEndpointsByIdConnectionsDescribe200Response getEndpointsByIdTest(companyId, endpointId)

Test an endpoint with sample data      Request body (optional):         limit: Number of sample rows to return (default: 10)

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let endpointId = "endpointId_example"; // String | Unique identifier for the Endpoint
apiInstance.getEndpointsByIdTest(companyId, endpointId, (error, data, response) => {
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
 **endpointId** | **String**| Unique identifier for the Endpoint | 

### Return type

[**GetEndpointsByIdConnectionsDescribe200Response**](GetEndpointsByIdConnectionsDescribe200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEndpointsByIdUrl

> GetEndpointsByIdConnectionsDescribe200Response getEndpointsByIdUrl(companyId, endpointId)

GET /companies/{company_id}/endpoints/{endpoint_id}/url

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let endpointId = "endpointId_example"; // String | Unique identifier for the Endpoint
apiInstance.getEndpointsByIdUrl(companyId, endpointId, (error, data, response) => {
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
 **endpointId** | **String**| Unique identifier for the Endpoint | 

### Return type

[**GetEndpointsByIdConnectionsDescribe200Response**](GetEndpointsByIdConnectionsDescribe200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEndpoints

> ListEndpoints200Response listEndpoints(companyId, opts)

Get all endpoints for a specific company with pagination, filtering, and sorting

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listEndpoints(companyId, opts, (error, data, response) => {
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

[**ListEndpoints200Response**](ListEndpoints200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateEndpoints

> UpdateEndpoints200Response updateEndpoints(companyId, endpointId, endpointsUpdate)

Update an existing endpoint by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.EndpointsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let endpointId = "endpointId_example"; // String | Unique identifier for the Endpoint
let endpointsUpdate = new SparteraApiSdk.EndpointsUpdate(); // EndpointsUpdate | 
apiInstance.updateEndpoints(companyId, endpointId, endpointsUpdate, (error, data, response) => {
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
 **endpointId** | **String**| Unique identifier for the Endpoint | 
 **endpointsUpdate** | [**EndpointsUpdate**](EndpointsUpdate.md)|  | 

### Return type

[**UpdateEndpoints200Response**](UpdateEndpoints200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

