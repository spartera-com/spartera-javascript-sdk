# SparteraApiDocumentation.ConnectionsApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companiesCompanyIdConnectionsConnectionIdDelete**](ConnectionsApi.md#companiesCompanyIdConnectionsConnectionIdDelete) | **DELETE** /companies/{company_id}/connections/{connection_id} | Delete single connection by ID
[**companiesCompanyIdConnectionsConnectionIdGet**](ConnectionsApi.md#companiesCompanyIdConnectionsConnectionIdGet) | **GET** /companies/{company_id}/connections/{connection_id} | Get single connection by ID
[**companiesCompanyIdConnectionsConnectionIdInfoschemaGet**](ConnectionsApi.md#companiesCompanyIdConnectionsConnectionIdInfoschemaGet) | **GET** /companies/{company_id}/connections/{connection_id}/infoschema | Retrieve the information schema for the specified connection
[**companiesCompanyIdConnectionsConnectionIdPatch**](ConnectionsApi.md#companiesCompanyIdConnectionsConnectionIdPatch) | **PATCH** /companies/{company_id}/connections/{connection_id} | Update an existing connection by ID
[**companiesCompanyIdConnectionsConnectionIdTestGet**](ConnectionsApi.md#companiesCompanyIdConnectionsConnectionIdTestGet) | **GET** /companies/{company_id}/connections/{connection_id}/test | Test the specified connection
[**companiesCompanyIdConnectionsGet**](ConnectionsApi.md#companiesCompanyIdConnectionsGet) | **GET** /companies/{company_id}/connections | Get all connections for a specific company
[**companiesCompanyIdConnectionsPost**](ConnectionsApi.md#companiesCompanyIdConnectionsPost) | **POST** /companies/{company_id}/connections | Create a new connection by ID



## companiesCompanyIdConnectionsConnectionIdDelete

> CompaniesCompanyIdConnectionsConnectionIdDelete200Response companiesCompanyIdConnectionsConnectionIdDelete(companyId, connectionId)

Delete single connection by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.ConnectionsApi();
let companyId = "companyId_example"; // String | 
let connectionId = "connectionId_example"; // String | 
apiInstance.companiesCompanyIdConnectionsConnectionIdDelete(companyId, connectionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **connectionId** | **String**|  | 

### Return type

[**CompaniesCompanyIdConnectionsConnectionIdDelete200Response**](CompaniesCompanyIdConnectionsConnectionIdDelete200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdConnectionsConnectionIdGet

> CompaniesCompanyIdConnectionsConnectionIdGet200Response companiesCompanyIdConnectionsConnectionIdGet(companyId, connectionId)

Get single connection by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.ConnectionsApi();
let companyId = "companyId_example"; // String | 
let connectionId = "connectionId_example"; // String | 
apiInstance.companiesCompanyIdConnectionsConnectionIdGet(companyId, connectionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **connectionId** | **String**|  | 

### Return type

[**CompaniesCompanyIdConnectionsConnectionIdGet200Response**](CompaniesCompanyIdConnectionsConnectionIdGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdConnectionsConnectionIdInfoschemaGet

> CompaniesCompanyIdConnectionsGet200Response companiesCompanyIdConnectionsConnectionIdInfoschemaGet(companyId, connectionId)

Retrieve the information schema for the specified connection

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.ConnectionsApi();
let companyId = "companyId_example"; // String | 
let connectionId = "connectionId_example"; // String | 
apiInstance.companiesCompanyIdConnectionsConnectionIdInfoschemaGet(companyId, connectionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **connectionId** | **String**|  | 

### Return type

[**CompaniesCompanyIdConnectionsGet200Response**](CompaniesCompanyIdConnectionsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdConnectionsConnectionIdPatch

> CompaniesCompanyIdConnectionsConnectionIdPatch200Response companiesCompanyIdConnectionsConnectionIdPatch(companyId, connectionId, connection)

Update an existing connection by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.ConnectionsApi();
let companyId = "companyId_example"; // String | 
let connectionId = "connectionId_example"; // String | 
let connection = new SparteraApiDocumentation.Connection(); // Connection | 
apiInstance.companiesCompanyIdConnectionsConnectionIdPatch(companyId, connectionId, connection).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **connectionId** | **String**|  | 
 **connection** | [**Connection**](Connection.md)|  | 

### Return type

[**CompaniesCompanyIdConnectionsConnectionIdPatch200Response**](CompaniesCompanyIdConnectionsConnectionIdPatch200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdConnectionsConnectionIdTestGet

> CompaniesCompanyIdConnectionsGet200Response companiesCompanyIdConnectionsConnectionIdTestGet(companyId, connectionId)

Test the specified connection

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.ConnectionsApi();
let companyId = "companyId_example"; // String | 
let connectionId = "connectionId_example"; // String | 
apiInstance.companiesCompanyIdConnectionsConnectionIdTestGet(companyId, connectionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **connectionId** | **String**|  | 

### Return type

[**CompaniesCompanyIdConnectionsGet200Response**](CompaniesCompanyIdConnectionsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdConnectionsGet

> CompaniesCompanyIdConnectionsGet200Response companiesCompanyIdConnectionsGet(companyId)

Get all connections for a specific company

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.ConnectionsApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdConnectionsGet(companyId).then((data) => {
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

[**CompaniesCompanyIdConnectionsGet200Response**](CompaniesCompanyIdConnectionsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdConnectionsPost

> CompaniesCompanyIdConnectionsPost200Response companiesCompanyIdConnectionsPost(companyId, connection)

Create a new connection by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.ConnectionsApi();
let companyId = "companyId_example"; // String | 
let connection = new SparteraApiDocumentation.Connection(); // Connection | 
apiInstance.companiesCompanyIdConnectionsPost(companyId, connection).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **connection** | [**Connection**](Connection.md)|  | 

### Return type

[**CompaniesCompanyIdConnectionsPost200Response**](CompaniesCompanyIdConnectionsPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

