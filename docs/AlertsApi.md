# SparteraApiSdk.AlertsApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAlerts**](AlertsApi.md#createAlerts) | **POST** /companies/{company_id}/users/{user_id}/alerts | POST /companies/{company_id}/users/{user_id}/alerts
[**deleteAlerts**](AlertsApi.md#deleteAlerts) | **DELETE** /companies/{company_id}/users/{user_id}/alerts/{alert_id} | Delete single alert by ID
[**getAlertsById**](AlertsApi.md#getAlertsById) | **GET** /companies/{company_id}/users/{user_id}/alerts | Get a list of all alerts for a specific user
[**getAlertsByIdAssetAll**](AlertsApi.md#getAlertsByIdAssetAll) | **GET** /companies/{company_id}/users/{user_id}/alerts/asset/{asset_id}/all | Get all alerts for a specific asset
[**getAlertsByIdUsers**](AlertsApi.md#getAlertsByIdUsers) | **GET** /companies/{company_id}/users/{user_id}/alerts/{alert_id} | Get single alert by ID
[**getAlertsByIdUsersAsset**](AlertsApi.md#getAlertsByIdUsersAsset) | **GET** /companies/{company_id}/users/{user_id}/alerts/asset/{asset_id} | Get all alerts for a specific asset (by user)
[**updateAlerts**](AlertsApi.md#updateAlerts) | **PATCH** /companies/{company_id}/users/{user_id}/alerts/{alert_id} | Update an existing alert by ID



## createAlerts

> CreateAlerts200Response createAlerts(companyId, userId, alertsInput)

POST /companies/{company_id}/users/{user_id}/alerts

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AlertsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
let alertsInput = new SparteraApiSdk.AlertsInput(); // AlertsInput | 
apiInstance.createAlerts(companyId, userId, alertsInput, (error, data, response) => {
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
 **userId** | **String**| Unique identifier for the User | 
 **alertsInput** | [**AlertsInput**](AlertsInput.md)|  | 

### Return type

[**CreateAlerts200Response**](CreateAlerts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAlerts

> DeleteAlerts200Response deleteAlerts(companyId, userId, alertId)

Delete single alert by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AlertsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
let alertId = "alertId_example"; // String | Unique identifier for the Alert
apiInstance.deleteAlerts(companyId, userId, alertId, (error, data, response) => {
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
 **userId** | **String**| Unique identifier for the User | 
 **alertId** | **String**| Unique identifier for the Alert | 

### Return type

[**DeleteAlerts200Response**](DeleteAlerts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAlertsById

> GetAlertsById200Response getAlertsById(companyId, userId)

Get a list of all alerts for a specific user

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AlertsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
apiInstance.getAlertsById(companyId, userId, (error, data, response) => {
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
 **userId** | **String**| Unique identifier for the User | 

### Return type

[**GetAlertsById200Response**](GetAlertsById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAlertsByIdAssetAll

> GetAlertsById200Response getAlertsByIdAssetAll(companyId, userId, assetId)

Get all alerts for a specific asset

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AlertsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
let assetId = "assetId_example"; // String | Unique identifier for the Asset
apiInstance.getAlertsByIdAssetAll(companyId, userId, assetId, (error, data, response) => {
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
 **userId** | **String**| Unique identifier for the User | 
 **assetId** | **String**| Unique identifier for the Asset | 

### Return type

[**GetAlertsById200Response**](GetAlertsById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAlertsByIdUsers

> GetAlertsById200Response getAlertsByIdUsers(companyId, userId, alertId)

Get single alert by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AlertsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
let alertId = "alertId_example"; // String | Unique identifier for the Alert
apiInstance.getAlertsByIdUsers(companyId, userId, alertId, (error, data, response) => {
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
 **userId** | **String**| Unique identifier for the User | 
 **alertId** | **String**| Unique identifier for the Alert | 

### Return type

[**GetAlertsById200Response**](GetAlertsById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAlertsByIdUsersAsset

> GetAlertsById200Response getAlertsByIdUsersAsset(companyId, userId, assetId)

Get all alerts for a specific asset (by user)

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AlertsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
let assetId = "assetId_example"; // String | Unique identifier for the Asset
apiInstance.getAlertsByIdUsersAsset(companyId, userId, assetId, (error, data, response) => {
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
 **userId** | **String**| Unique identifier for the User | 
 **assetId** | **String**| Unique identifier for the Asset | 

### Return type

[**GetAlertsById200Response**](GetAlertsById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAlerts

> UpdateAlerts200Response updateAlerts(companyId, userId, alertId, alertsUpdate)

Update an existing alert by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.AlertsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
let alertId = "alertId_example"; // String | Unique identifier for the Alert
let alertsUpdate = new SparteraApiSdk.AlertsUpdate(); // AlertsUpdate | 
apiInstance.updateAlerts(companyId, userId, alertId, alertsUpdate, (error, data, response) => {
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
 **userId** | **String**| Unique identifier for the User | 
 **alertId** | **String**| Unique identifier for the Alert | 
 **alertsUpdate** | [**AlertsUpdate**](AlertsUpdate.md)|  | 

### Return type

[**UpdateAlerts200Response**](UpdateAlerts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

