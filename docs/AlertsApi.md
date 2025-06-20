# SparteraApiDocumentation.AlertsApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companiesCompanyIdUsersUserIdAlertsAlertIdDelete**](AlertsApi.md#companiesCompanyIdUsersUserIdAlertsAlertIdDelete) | **DELETE** /companies/{company_id}/users/{user_id}/alerts/{alert_id} | Delete single alert by ID
[**companiesCompanyIdUsersUserIdAlertsAlertIdGet**](AlertsApi.md#companiesCompanyIdUsersUserIdAlertsAlertIdGet) | **GET** /companies/{company_id}/users/{user_id}/alerts/{alert_id} | Get single alert by ID
[**companiesCompanyIdUsersUserIdAlertsAlertIdPatch**](AlertsApi.md#companiesCompanyIdUsersUserIdAlertsAlertIdPatch) | **PATCH** /companies/{company_id}/users/{user_id}/alerts/{alert_id} | Update an existing alert by ID
[**companiesCompanyIdUsersUserIdAlertsAssetAssetIdAllGet**](AlertsApi.md#companiesCompanyIdUsersUserIdAlertsAssetAssetIdAllGet) | **GET** /companies/{company_id}/users/{user_id}/alerts/asset/{asset_id}/all | Get all alerts for a specific asset
[**companiesCompanyIdUsersUserIdAlertsAssetAssetIdGet**](AlertsApi.md#companiesCompanyIdUsersUserIdAlertsAssetAssetIdGet) | **GET** /companies/{company_id}/users/{user_id}/alerts/asset/{asset_id} | Get all alerts for a specific asset (by user)
[**companiesCompanyIdUsersUserIdAlertsGet**](AlertsApi.md#companiesCompanyIdUsersUserIdAlertsGet) | **GET** /companies/{company_id}/users/{user_id}/alerts | Get a list of all alerts for a specific user
[**companiesCompanyIdUsersUserIdAlertsPost**](AlertsApi.md#companiesCompanyIdUsersUserIdAlertsPost) | **POST** /companies/{company_id}/users/{user_id}/alerts | POST /companies/{company_id}/users/{user_id}/alerts



## companiesCompanyIdUsersUserIdAlertsAlertIdDelete

> CompaniesCompanyIdUsersUserIdAlertsAlertIdDelete200Response companiesCompanyIdUsersUserIdAlertsAlertIdDelete(companyId, userId, alertId)

Delete single alert by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AlertsApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
let alertId = "alertId_example"; // String | 
apiInstance.companiesCompanyIdUsersUserIdAlertsAlertIdDelete(companyId, userId, alertId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 
 **alertId** | **String**|  | 

### Return type

[**CompaniesCompanyIdUsersUserIdAlertsAlertIdDelete200Response**](CompaniesCompanyIdUsersUserIdAlertsAlertIdDelete200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdAlertsAlertIdGet

> CompaniesCompanyIdUsersUserIdAlertsAlertIdGet200Response companiesCompanyIdUsersUserIdAlertsAlertIdGet(companyId, userId, alertId)

Get single alert by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AlertsApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
let alertId = "alertId_example"; // String | 
apiInstance.companiesCompanyIdUsersUserIdAlertsAlertIdGet(companyId, userId, alertId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 
 **alertId** | **String**|  | 

### Return type

[**CompaniesCompanyIdUsersUserIdAlertsAlertIdGet200Response**](CompaniesCompanyIdUsersUserIdAlertsAlertIdGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdAlertsAlertIdPatch

> CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200Response companiesCompanyIdUsersUserIdAlertsAlertIdPatch(companyId, userId, alertId, alert)

Update an existing alert by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AlertsApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
let alertId = "alertId_example"; // String | 
let alert = new SparteraApiDocumentation.Alert(); // Alert | 
apiInstance.companiesCompanyIdUsersUserIdAlertsAlertIdPatch(companyId, userId, alertId, alert).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 
 **alertId** | **String**|  | 
 **alert** | [**Alert**](Alert.md)|  | 

### Return type

[**CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200Response**](CompaniesCompanyIdUsersUserIdAlertsAlertIdPatch200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdUsersUserIdAlertsAssetAssetIdAllGet

> CompaniesCompanyIdUsersUserIdAlertsGet200Response companiesCompanyIdUsersUserIdAlertsAssetAssetIdAllGet(companyId, userId, assetId)

Get all alerts for a specific asset

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AlertsApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdUsersUserIdAlertsAssetAssetIdAllGet(companyId, userId, assetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 
 **assetId** | **String**|  | 

### Return type

[**CompaniesCompanyIdUsersUserIdAlertsGet200Response**](CompaniesCompanyIdUsersUserIdAlertsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdAlertsAssetAssetIdGet

> CompaniesCompanyIdUsersUserIdAlertsAlertIdGet200Response companiesCompanyIdUsersUserIdAlertsAssetAssetIdGet(companyId, userId, assetId)

Get all alerts for a specific asset (by user)

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AlertsApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdUsersUserIdAlertsAssetAssetIdGet(companyId, userId, assetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 
 **assetId** | **String**|  | 

### Return type

[**CompaniesCompanyIdUsersUserIdAlertsAlertIdGet200Response**](CompaniesCompanyIdUsersUserIdAlertsAlertIdGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdAlertsGet

> CompaniesCompanyIdUsersUserIdAlertsGet200Response companiesCompanyIdUsersUserIdAlertsGet(companyId, userId)

Get a list of all alerts for a specific user

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AlertsApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.companiesCompanyIdUsersUserIdAlertsGet(companyId, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

[**CompaniesCompanyIdUsersUserIdAlertsGet200Response**](CompaniesCompanyIdUsersUserIdAlertsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdAlertsPost

> CompaniesCompanyIdUsersUserIdAlertsPost200Response companiesCompanyIdUsersUserIdAlertsPost(companyId, userId, alert)

POST /companies/{company_id}/users/{user_id}/alerts

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.AlertsApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
let alert = new SparteraApiDocumentation.Alert(); // Alert | 
apiInstance.companiesCompanyIdUsersUserIdAlertsPost(companyId, userId, alert).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 
 **alert** | [**Alert**](Alert.md)|  | 

### Return type

[**CompaniesCompanyIdUsersUserIdAlertsPost200Response**](CompaniesCompanyIdUsersUserIdAlertsPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

