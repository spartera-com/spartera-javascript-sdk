# SparteraApiDocumentation.UsersApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companiesCompanyIdUsersGet**](UsersApi.md#companiesCompanyIdUsersGet) | **GET** /companies/{company_id}/users | Get a list of all users in a company
[**companiesCompanyIdUsersPost**](UsersApi.md#companiesCompanyIdUsersPost) | **POST** /companies/{company_id}/users | Create a new user
[**companiesCompanyIdUsersUserIdDelete**](UsersApi.md#companiesCompanyIdUsersUserIdDelete) | **DELETE** /companies/{company_id}/users/{user_id} | Delete single user by ID
[**companiesCompanyIdUsersUserIdGet**](UsersApi.md#companiesCompanyIdUsersUserIdGet) | **GET** /companies/{company_id}/users/{user_id} | Get single user by ID
[**companiesCompanyIdUsersUserIdPatch**](UsersApi.md#companiesCompanyIdUsersUserIdPatch) | **PATCH** /companies/{company_id}/users/{user_id} | Update an existing user by ID



## companiesCompanyIdUsersGet

> Object companiesCompanyIdUsersGet(companyId)

Get a list of all users in a company

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.UsersApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdUsersGet(companyId).then((data) => {
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

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersPost

> Object companiesCompanyIdUsersPost(companyId, user)

Create a new user

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.UsersApi();
let companyId = "companyId_example"; // String | 
let user = new SparteraApiDocumentation.User(); // User | 
apiInstance.companiesCompanyIdUsersPost(companyId, user).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **user** | [**User**](User.md)|  | 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdUsersUserIdDelete

> Object companiesCompanyIdUsersUserIdDelete(companyId, userId)

Delete single user by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.UsersApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.companiesCompanyIdUsersUserIdDelete(companyId, userId).then((data) => {
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

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdGet

> Object companiesCompanyIdUsersUserIdGet(companyId, userId)

Get single user by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.UsersApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.companiesCompanyIdUsersUserIdGet(companyId, userId).then((data) => {
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

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdPatch

> Object companiesCompanyIdUsersUserIdPatch(companyId, userId, user)

Update an existing user by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.UsersApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
let user = new SparteraApiDocumentation.User(); // User | 
apiInstance.companiesCompanyIdUsersUserIdPatch(companyId, userId, user).then((data) => {
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
 **user** | [**User**](User.md)|  | 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

