# SparteraApiDocumentation.FavoritesApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companiesCompanyIdUsersUserIdFavoritesCategoryCategoryGet**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesCategoryCategoryGet) | **GET** /companies/{company_id}/users/{user_id}/favorites/category/{category} | Get all favorites for the specified user in a specific category
[**companiesCompanyIdUsersUserIdFavoritesCheckAssetIdGet**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesCheckAssetIdGet) | **GET** /companies/{company_id}/users/{user_id}/favorites/check/{asset_id} | Check if the specified user has favorited a specific asset     Returns the favorite record if it exists, or empty result if not     Useful for UI to show/hide favorite button states
[**companiesCompanyIdUsersUserIdFavoritesFavoriteIdDelete**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesFavoriteIdDelete) | **DELETE** /companies/{company_id}/users/{user_id}/favorites/{favorite_id} | Delete single favorite by ID (unfavorite an asset)
[**companiesCompanyIdUsersUserIdFavoritesFavoriteIdGet**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesFavoriteIdGet) | **GET** /companies/{company_id}/users/{user_id}/favorites/{favorite_id} | Get single favorite by ID
[**companiesCompanyIdUsersUserIdFavoritesFavoriteIdPatch**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesFavoriteIdPatch) | **PATCH** /companies/{company_id}/users/{user_id}/favorites/{favorite_id} | Update an existing favorite by ID     Can update notes, category, priority
[**companiesCompanyIdUsersUserIdFavoritesGet**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesGet) | **GET** /companies/{company_id}/users/{user_id}/favorites | Get a list of all favorites for a specific user     Query params:     - category: filter by category     - sort: sort field (priority, date_created, etc.)     - order: sort direction (asc, desc)
[**companiesCompanyIdUsersUserIdFavoritesPost**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesPost) | **POST** /companies/{company_id}/users/{user_id}/favorites | POST /companies/{company_id}/users/{user_id}/favorites
[**companiesCompanyIdUsersUserIdFavoritesUncategorizedGet**](FavoritesApi.md#companiesCompanyIdUsersUserIdFavoritesUncategorizedGet) | **GET** /companies/{company_id}/users/{user_id}/favorites/uncategorized | Get all favorites for the specified user that don&#39;t have a category



## companiesCompanyIdUsersUserIdFavoritesCategoryCategoryGet

> Object companiesCompanyIdUsersUserIdFavoritesCategoryCategoryGet(companyId, userId, category)

Get all favorites for the specified user in a specific category

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesCheckAssetIdGet

> Object companiesCompanyIdUsersUserIdFavoritesCheckAssetIdGet(companyId, userId, assetId)

Check if the specified user has favorited a specific asset     Returns the favorite record if it exists, or empty result if not     Useful for UI to show/hide favorite button states

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesFavoriteIdDelete

> Object companiesCompanyIdUsersUserIdFavoritesFavoriteIdDelete(companyId, userId, favoriteId)

Delete single favorite by ID (unfavorite an asset)

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesFavoriteIdGet

> Object companiesCompanyIdUsersUserIdFavoritesFavoriteIdGet(companyId, userId, favoriteId)

Get single favorite by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesFavoriteIdPatch

> Object companiesCompanyIdUsersUserIdFavoritesFavoriteIdPatch(companyId, userId, favoriteId, favorite)

Update an existing favorite by ID     Can update notes, category, priority

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesGet

> Object companiesCompanyIdUsersUserIdFavoritesGet(companyId, userId)

Get a list of all favorites for a specific user     Query params:     - category: filter by category     - sort: sort field (priority, date_created, etc.)     - order: sort direction (asc, desc)

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesPost

> Object companiesCompanyIdUsersUserIdFavoritesPost(companyId, userId, favorite)

POST /companies/{company_id}/users/{user_id}/favorites

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## companiesCompanyIdUsersUserIdFavoritesUncategorizedGet

> Object companiesCompanyIdUsersUserIdFavoritesUncategorizedGet(companyId, userId)

Get all favorites for the specified user that don&#39;t have a category

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

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

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

