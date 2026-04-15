# SparteraApiSdk.FavoritesApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFavorites**](FavoritesApi.md#createFavorites) | **POST** /companies/{company_id}/users/{user_id}/favorites | POST /companies/{company_id}/users/{user_id}/favorites
[**deleteFavorites**](FavoritesApi.md#deleteFavorites) | **DELETE** /companies/{company_id}/users/{user_id}/favorites/{favorite_id} | Delete single favorite by ID (unfavorite an asset)
[**getFavoritesById**](FavoritesApi.md#getFavoritesById) | **GET** /companies/{company_id}/users/{user_id}/favorites | Get a list of all favorites for a specific user
[**getFavoritesByIdUsers**](FavoritesApi.md#getFavoritesByIdUsers) | **GET** /companies/{company_id}/users/{user_id}/favorites/{favorite_id} | Get single favorite by ID
[**getFavoritesByIdUsersCategory**](FavoritesApi.md#getFavoritesByIdUsersCategory) | **GET** /companies/{company_id}/users/{user_id}/favorites/category/{category} | Get all favorites for the specified user in a specific category
[**getFavoritesByIdUsersCheck**](FavoritesApi.md#getFavoritesByIdUsersCheck) | **GET** /companies/{company_id}/users/{user_id}/favorites/check/{asset_id} | Check if the specified user has favorited a specific asset
[**getFavoritesByIdUsersUncategorized**](FavoritesApi.md#getFavoritesByIdUsersUncategorized) | **GET** /companies/{company_id}/users/{user_id}/favorites/uncategorized | Get all favorites for the specified user that don&#39;t have a category
[**updateFavorites**](FavoritesApi.md#updateFavorites) | **PATCH** /companies/{company_id}/users/{user_id}/favorites/{favorite_id} | Update an existing favorite by ID



## createFavorites

> CreateFavorites200Response createFavorites(companyId, userId, favoritesInput)

POST /companies/{company_id}/users/{user_id}/favorites

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.FavoritesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
let favoritesInput = new SparteraApiSdk.FavoritesInput(); // FavoritesInput | 
apiInstance.createFavorites(companyId, userId, favoritesInput, (error, data, response) => {
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
 **favoritesInput** | [**FavoritesInput**](FavoritesInput.md)|  | 

### Return type

[**CreateFavorites200Response**](CreateFavorites200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFavorites

> DeleteFavorites200Response deleteFavorites(companyId, userId, favoriteId)

Delete single favorite by ID (unfavorite an asset)

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.FavoritesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
let favoriteId = "favoriteId_example"; // String | Unique identifier for the Favorite
apiInstance.deleteFavorites(companyId, userId, favoriteId, (error, data, response) => {
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
 **favoriteId** | **String**| Unique identifier for the Favorite | 

### Return type

[**DeleteFavorites200Response**](DeleteFavorites200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFavoritesById

> GetFavoritesById200Response getFavoritesById(companyId, userId)

Get a list of all favorites for a specific user

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.FavoritesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
apiInstance.getFavoritesById(companyId, userId, (error, data, response) => {
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

[**GetFavoritesById200Response**](GetFavoritesById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFavoritesByIdUsers

> GetFavoritesById200Response getFavoritesByIdUsers(companyId, userId, favoriteId)

Get single favorite by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.FavoritesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
let favoriteId = "favoriteId_example"; // String | Unique identifier for the Favorite
apiInstance.getFavoritesByIdUsers(companyId, userId, favoriteId, (error, data, response) => {
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
 **favoriteId** | **String**| Unique identifier for the Favorite | 

### Return type

[**GetFavoritesById200Response**](GetFavoritesById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFavoritesByIdUsersCategory

> GetFavoritesById200Response getFavoritesByIdUsersCategory(companyId, userId, category)

Get all favorites for the specified user in a specific category

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.FavoritesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
let category = "category_example"; // String | Parameter for category
apiInstance.getFavoritesByIdUsersCategory(companyId, userId, category, (error, data, response) => {
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
 **category** | **String**| Parameter for category | 

### Return type

[**GetFavoritesById200Response**](GetFavoritesById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFavoritesByIdUsersCheck

> GetFavoritesById200Response getFavoritesByIdUsersCheck(companyId, userId, assetId)

Check if the specified user has favorited a specific asset

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.FavoritesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
let assetId = "assetId_example"; // String | Unique identifier for the Asset
apiInstance.getFavoritesByIdUsersCheck(companyId, userId, assetId, (error, data, response) => {
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

[**GetFavoritesById200Response**](GetFavoritesById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFavoritesByIdUsersUncategorized

> GetFavoritesById200Response getFavoritesByIdUsersUncategorized(companyId, userId)

Get all favorites for the specified user that don&#39;t have a category

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.FavoritesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
apiInstance.getFavoritesByIdUsersUncategorized(companyId, userId, (error, data, response) => {
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

[**GetFavoritesById200Response**](GetFavoritesById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFavorites

> UpdateFavorites200Response updateFavorites(companyId, userId, favoriteId, favoritesUpdate)

Update an existing favorite by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.FavoritesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let userId = "userId_example"; // String | Unique identifier for the User
let favoriteId = "favoriteId_example"; // String | Unique identifier for the Favorite
let favoritesUpdate = new SparteraApiSdk.FavoritesUpdate(); // FavoritesUpdate | 
apiInstance.updateFavorites(companyId, userId, favoriteId, favoritesUpdate, (error, data, response) => {
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
 **favoriteId** | **String**| Unique identifier for the Favorite | 
 **favoritesUpdate** | [**FavoritesUpdate**](FavoritesUpdate.md)|  | 

### Return type

[**UpdateFavorites200Response**](UpdateFavorites200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

