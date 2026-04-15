# SparteraApiSdk.ConnectionsApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConnections**](ConnectionsApi.md#createConnections) | **POST** /companies/{company_id}/connections | Create a new connection by ID
[**deleteConnections**](ConnectionsApi.md#deleteConnections) | **DELETE** /companies/{company_id}/connections/{connection_id} | Delete single connection by ID
[**getConnectionsById**](ConnectionsApi.md#getConnectionsById) | **GET** /companies/{company_id}/connections/{connection_id} | Get single connection by ID
[**getConnectionsById2**](ConnectionsApi.md#getConnectionsById2) | **GET** /companies/{company_id}/connections/{connection_id}/test | Test the specified connection
[**getConnectionsByIdInfoschema**](ConnectionsApi.md#getConnectionsByIdInfoschema) | **GET** /companies/{company_id}/connections/{connection_id}/infoschema | Retrieve the information schema for the specified connection
[**listConnections**](ConnectionsApi.md#listConnections) | **GET** /companies/{company_id}/connections | Get all connections for a specific company
[**updateConnections**](ConnectionsApi.md#updateConnections) | **PATCH** /companies/{company_id}/connections/{connection_id} | Update an existing connection by ID



## createConnections

> CreateConnections200Response createConnections(companyId, connectionsInput, opts)

Create a new connection by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.ConnectionsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let connectionsInput = new SparteraApiSdk.ConnectionsInput(); // ConnectionsInput | 
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.createConnections(companyId, connectionsInput, opts, (error, data, response) => {
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
 **connectionsInput** | [**ConnectionsInput**](ConnectionsInput.md)|  | 
 **page** | **Number**| Page number for pagination | [optional] [default to 1]
 **limit** | **Number**| Number of items per page | [optional] [default to 20]
 **sortBy** | **String**| Field to sort by | [optional] 
 **sortOrder** | **String**| Sort order (ascending or descending) | [optional] [default to &#39;desc&#39;]
 **search** | **String**| Search term to filter results | [optional] 

### Return type

[**CreateConnections200Response**](CreateConnections200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteConnections

> DeleteConnections200Response deleteConnections(companyId, connectionId)

Delete single connection by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.ConnectionsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let connectionId = "connectionId_example"; // String | Unique identifier for the Connection
apiInstance.deleteConnections(companyId, connectionId, (error, data, response) => {
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

[**DeleteConnections200Response**](DeleteConnections200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConnectionsById

> GetConnectionsById200Response getConnectionsById(companyId, connectionId)

Get single connection by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.ConnectionsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let connectionId = "connectionId_example"; // String | Unique identifier for the Connection
apiInstance.getConnectionsById(companyId, connectionId, (error, data, response) => {
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

[**GetConnectionsById200Response**](GetConnectionsById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConnectionsById2

> GetConnectionsById200Response getConnectionsById2(companyId, connectionId)

Test the specified connection

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.ConnectionsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let connectionId = "connectionId_example"; // String | Unique identifier for the Connection
apiInstance.getConnectionsById2(companyId, connectionId, (error, data, response) => {
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

[**GetConnectionsById200Response**](GetConnectionsById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConnectionsByIdInfoschema

> GetConnectionsById200Response getConnectionsByIdInfoschema(companyId, connectionId)

Retrieve the information schema for the specified connection

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.ConnectionsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let connectionId = "connectionId_example"; // String | Unique identifier for the Connection
apiInstance.getConnectionsByIdInfoschema(companyId, connectionId, (error, data, response) => {
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

[**GetConnectionsById200Response**](GetConnectionsById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listConnections

> ListConnections200Response listConnections(companyId, opts)

Get all connections for a specific company

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.ConnectionsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listConnections(companyId, opts, (error, data, response) => {
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

[**ListConnections200Response**](ListConnections200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateConnections

> UpdateConnections200Response updateConnections(companyId, connectionId, connectionsUpdate)

Update an existing connection by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.ConnectionsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let connectionId = "connectionId_example"; // String | Unique identifier for the Connection
let connectionsUpdate = new SparteraApiSdk.ConnectionsUpdate(); // ConnectionsUpdate | 
apiInstance.updateConnections(companyId, connectionId, connectionsUpdate, (error, data, response) => {
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
 **connectionsUpdate** | [**ConnectionsUpdate**](ConnectionsUpdate.md)|  | 

### Return type

[**UpdateConnections200Response**](UpdateConnections200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

