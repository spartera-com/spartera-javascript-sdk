# SparteraApiDocumentation.FavoritesApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companiesCompanyIdUsersUserIdFavoritesCategoryCategoryGet**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesCategoryCategoryGet) | **GET** /companies/{company_id}/users/{user_id}/favorites/category/{category} | Get all favorites for the specified user in a specific category
[**companiesCompanyIdUsersUserIdFavoritesCheckAssetIdGet**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesCheckAssetIdGet) | **GET** /companies/{company_id}/users/{user_id}/favorites/check/{asset_id} | Check if the specified user has favorited a specific asset
[**companiesCompanyIdUsersUserIdFavoritesFavoriteIdDelete**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesFavoriteIdDelete) | **DELETE** /companies/{company_id}/users/{user_id}/favorites/{favorite_id} | Delete single favorite by ID (unfavorite an asset)
[**companiesCompanyIdUsersUserIdFavoritesFavoriteIdGet**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesFavoriteIdGet) | **GET** /companies/{company_id}/users/{user_id}/favorites/{favorite_id} | Get single favorite by ID
[**companiesCompanyIdUsersUserIdFavoritesFavoriteIdPatch**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesFavoriteIdPatch) | **PATCH** /companies/{company_id}/users/{user_id}/favorites/{favorite_id} | Update an existing favorite by ID
[**companiesCompanyIdUsersUserIdFavoritesGet**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesGet) | **GET** /companies/{company_id}/users/{user_id}/favorites | Get a list of all favorites for a specific user
[**companiesCompanyIdUsersUserIdFavoritesPost**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesPost) | **POST** /companies/{company_id}/users/{user_id}/favorites | POST /companies/{company_id}/users/{user_id}/favorites
[**companiesCompanyIdUsersUserIdFavoritesUncategorizedGet**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesUncategorizedGet) | **GET** /companies/{company_id}/users/{user_id}/favorites/uncategorized | Get all favorites for the specified user that don&#39;t have a category



## companiesCompanyIdUsersUserIdFavoritesCategoryCategoryGet

> CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdGet200Response companiesCompanyIdUsersUserIdFavoritesCategoryCategoryGet(companyId, userId, category)

Get all favorites for the specified user in a specific category

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.FavoritesApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
let category = "category_example"; // String | 
apiInstance.companiesCompanyIdUsersUserIdFavoritesCategoryCategoryGet(companyId, userId, category).then((data) => {
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
 **category** | **String**|  | 

### Return type

[**CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdGet200Response**](CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesCheckAssetIdGet

> CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdGet200Response companiesCompanyIdUsersUserIdFavoritesCheckAssetIdGet(companyId, userId, assetId)

Check if the specified user has favorited a specific asset

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.FavoritesApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
let assetId = "assetId_example"; // String | 
apiInstance.companiesCompanyIdUsersUserIdFavoritesCheckAssetIdGet(companyId, userId, assetId).then((data) => {
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

[**CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdGet200Response**](CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesFavoriteIdDelete

> CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdDelete200Response companiesCompanyIdUsersUserIdFavoritesFavoriteIdDelete(companyId, userId, favoriteId)

Delete single favorite by ID (unfavorite an asset)

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.FavoritesApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
let favoriteId = "favoriteId_example"; // String | 
apiInstance.companiesCompanyIdUsersUserIdFavoritesFavoriteIdDelete(companyId, userId, favoriteId).then((data) => {
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
 **favoriteId** | **String**|  | 

### Return type

[**CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdDelete200Response**](CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdDelete200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesFavoriteIdGet

> CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdGet200Response companiesCompanyIdUsersUserIdFavoritesFavoriteIdGet(companyId, userId, favoriteId)

Get single favorite by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.FavoritesApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
let favoriteId = "favoriteId_example"; // String | 
apiInstance.companiesCompanyIdUsersUserIdFavoritesFavoriteIdGet(companyId, userId, favoriteId).then((data) => {
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
 **favoriteId** | **String**|  | 

### Return type

[**CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdGet200Response**](CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesFavoriteIdPatch

> CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdPatch200Response companiesCompanyIdUsersUserIdFavoritesFavoriteIdPatch(companyId, userId, favoriteId, favorite)

Update an existing favorite by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.FavoritesApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
let favoriteId = "favoriteId_example"; // String | 
let favorite = new SparteraApiDocumentation.Favorite(); // Favorite | 
apiInstance.companiesCompanyIdUsersUserIdFavoritesFavoriteIdPatch(companyId, userId, favoriteId, favorite).then((data) => {
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
 **favoriteId** | **String**|  | 
 **favorite** | [**Favorite**](Favorite.md)|  | 

### Return type

[**CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdPatch200Response**](CompaniesCompanyIdUsersUserIdFavoritesFavoriteIdPatch200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesGet

> CompaniesCompanyIdUsersUserIdFavoritesGet200Response companiesCompanyIdUsersUserIdFavoritesGet(companyId, userId)

Get a list of all favorites for a specific user

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.FavoritesApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.companiesCompanyIdUsersUserIdFavoritesGet(companyId, userId).then((data) => {
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

[**CompaniesCompanyIdUsersUserIdFavoritesGet200Response**](CompaniesCompanyIdUsersUserIdFavoritesGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesPost

> CompaniesCompanyIdUsersUserIdFavoritesPost200Response companiesCompanyIdUsersUserIdFavoritesPost(companyId, userId, favorite)

POST /companies/{company_id}/users/{user_id}/favorites

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.FavoritesApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
let favorite = new SparteraApiDocumentation.Favorite(); // Favorite | 
apiInstance.companiesCompanyIdUsersUserIdFavoritesPost(companyId, userId, favorite).then((data) => {
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
 **favorite** | [**Favorite**](Favorite.md)|  | 

### Return type

[**CompaniesCompanyIdUsersUserIdFavoritesPost200Response**](CompaniesCompanyIdUsersUserIdFavoritesPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesUncategorizedGet

> CompaniesCompanyIdUsersUserIdFavoritesGet200Response companiesCompanyIdUsersUserIdFavoritesUncategorizedGet(companyId, userId)

Get all favorites for the specified user that don&#39;t have a category

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiDocumentation.FavoritesApi();
let companyId = "companyId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.companiesCompanyIdUsersUserIdFavoritesUncategorizedGet(companyId, userId).then((data) => {
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

[**CompaniesCompanyIdUsersUserIdFavoritesGet200Response**](CompaniesCompanyIdUsersUserIdFavoritesGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

