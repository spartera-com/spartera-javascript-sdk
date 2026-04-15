# SparteraApiSdk.PostsApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPosts**](PostsApi.md#createPosts) | **POST** /companies/{company_id}/posts | POST /companies/{company_id}/posts
[**createPosts2**](PostsApi.md#createPosts2) | **POST** /companies/{company_id}/posts/{post_id}/publish/{integration_id} | Publish a post to an external platform via an integration.      Args:         post_id: ID of the post to publish         integration_id: ID of the integration to use (from postgen_integrations)      Returns:         Publication record with external_url and external_post_id
[**createPostsPublish**](PostsApi.md#createPostsPublish) | **POST** /companies/{company_id}/posts/{post_id}/publish | Publish a post (make it publicly visible).
[**createPostsUnpublish**](PostsApi.md#createPostsUnpublish) | **POST** /companies/{company_id}/posts/{post_id}/unpublish | Unpublish a post (make it private/draft again).
[**createPostsView**](PostsApi.md#createPostsView) | **POST** /companies/{company_id}/posts/{post_id}/view | Increment view count for a post.     Public endpoint (no authentication required).
[**deletePosts**](PostsApi.md#deletePosts) | **DELETE** /companies/{company_id}/posts/{post_id} | Delete single post by ID.
[**getPostsById**](PostsApi.md#getPostsById) | **GET** /companies/{company_id}/posts/{post_id} | Get single post by ID.
[**getPostsByIdPublications**](PostsApi.md#getPostsByIdPublications) | **GET** /companies/{company_id}/posts/{post_id}/publications | Get all publications for a post.     Shows where this post has been published to external platforms.      Returns:         Array of publication records with platform, URL, status
[**listPosts**](PostsApi.md#listPosts) | **GET** /companies/{company_id}/posts | Get a list of all posts for the user&#39;s company.     Supports filtering, sorting, pagination.
[**listPostsSummary**](PostsApi.md#listPostsSummary) | **GET** /companies/{company_id}/posts/summary | GET /companies/{company_id}/posts/summary
[**updatePosts**](PostsApi.md#updatePosts) | **PATCH** /companies/{company_id}/posts/{post_id} | Update an existing post by ID.      Note: last_edited_at is automatically updated.



## createPosts

> CreatePosts200Response createPosts(companyId, postsInput, opts)

POST /companies/{company_id}/posts

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let postsInput = new SparteraApiSdk.PostsInput(); // PostsInput | 
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.createPosts(companyId, postsInput, opts, (error, data, response) => {
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
 **postsInput** | [**PostsInput**](PostsInput.md)|  | 
 **page** | **Number**| Page number for pagination | [optional] [default to 1]
 **limit** | **Number**| Number of items per page | [optional] [default to 20]
 **sortBy** | **String**| Field to sort by | [optional] 
 **sortOrder** | **String**| Sort order (ascending or descending) | [optional] [default to &#39;desc&#39;]
 **search** | **String**| Search term to filter results | [optional] 

### Return type

[**CreatePosts200Response**](CreatePosts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPosts2

> CreatePosts200Response createPosts2(companyId, postId, integrationId, postsInput)

Publish a post to an external platform via an integration.      Args:         post_id: ID of the post to publish         integration_id: ID of the integration to use (from postgen_integrations)      Returns:         Publication record with external_url and external_post_id

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let postId = "postId_example"; // String | Unique identifier for the Post
let integrationId = "integrationId_example"; // String | Unique identifier for the Integration
let postsInput = new SparteraApiSdk.PostsInput(); // PostsInput | 
apiInstance.createPosts2(companyId, postId, integrationId, postsInput, (error, data, response) => {
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
 **postId** | **String**| Unique identifier for the Post | 
 **integrationId** | **String**| Unique identifier for the Integration | 
 **postsInput** | [**PostsInput**](PostsInput.md)|  | 

### Return type

[**CreatePosts200Response**](CreatePosts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPostsPublish

> CreatePosts200Response createPostsPublish(companyId, postId, postsInput)

Publish a post (make it publicly visible).

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let postId = "postId_example"; // String | Unique identifier for the Post
let postsInput = new SparteraApiSdk.PostsInput(); // PostsInput | 
apiInstance.createPostsPublish(companyId, postId, postsInput, (error, data, response) => {
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
 **postId** | **String**| Unique identifier for the Post | 
 **postsInput** | [**PostsInput**](PostsInput.md)|  | 

### Return type

[**CreatePosts200Response**](CreatePosts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPostsUnpublish

> CreatePosts200Response createPostsUnpublish(companyId, postId, postsInput)

Unpublish a post (make it private/draft again).

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let postId = "postId_example"; // String | Unique identifier for the Post
let postsInput = new SparteraApiSdk.PostsInput(); // PostsInput | 
apiInstance.createPostsUnpublish(companyId, postId, postsInput, (error, data, response) => {
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
 **postId** | **String**| Unique identifier for the Post | 
 **postsInput** | [**PostsInput**](PostsInput.md)|  | 

### Return type

[**CreatePosts200Response**](CreatePosts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPostsView

> CreatePosts200Response createPostsView(companyId, postId, postsInput)

Increment view count for a post.     Public endpoint (no authentication required).

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let postId = "postId_example"; // String | Unique identifier for the Post
let postsInput = new SparteraApiSdk.PostsInput(); // PostsInput | 
apiInstance.createPostsView(companyId, postId, postsInput, (error, data, response) => {
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
 **postId** | **String**| Unique identifier for the Post | 
 **postsInput** | [**PostsInput**](PostsInput.md)|  | 

### Return type

[**CreatePosts200Response**](CreatePosts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePosts

> DeletePosts200Response deletePosts(companyId, postId)

Delete single post by ID.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let postId = "postId_example"; // String | Unique identifier for the Post
apiInstance.deletePosts(companyId, postId, (error, data, response) => {
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
 **postId** | **String**| Unique identifier for the Post | 

### Return type

[**DeletePosts200Response**](DeletePosts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPostsById

> GetPostsById200Response getPostsById(companyId, postId)

Get single post by ID.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let postId = "postId_example"; // String | Unique identifier for the Post
apiInstance.getPostsById(companyId, postId, (error, data, response) => {
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
 **postId** | **String**| Unique identifier for the Post | 

### Return type

[**GetPostsById200Response**](GetPostsById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPostsByIdPublications

> GetPostsById200Response getPostsByIdPublications(companyId, postId)

Get all publications for a post.     Shows where this post has been published to external platforms.      Returns:         Array of publication records with platform, URL, status

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let postId = "postId_example"; // String | Unique identifier for the Post
apiInstance.getPostsByIdPublications(companyId, postId, (error, data, response) => {
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
 **postId** | **String**| Unique identifier for the Post | 

### Return type

[**GetPostsById200Response**](GetPostsById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPosts

> ListPosts200Response listPosts(companyId, opts)

Get a list of all posts for the user&#39;s company.     Supports filtering, sorting, pagination.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listPosts(companyId, opts, (error, data, response) => {
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

[**ListPosts200Response**](ListPosts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPostsSummary

> ListPosts200Response listPostsSummary(companyId, opts)

GET /companies/{company_id}/posts/summary

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listPostsSummary(companyId, opts, (error, data, response) => {
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

[**ListPosts200Response**](ListPosts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePosts

> UpdatePosts200Response updatePosts(companyId, postId, postsUpdate)

Update an existing post by ID.      Note: last_edited_at is automatically updated.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.PostsApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let postId = "postId_example"; // String | Unique identifier for the Post
let postsUpdate = new SparteraApiSdk.PostsUpdate(); // PostsUpdate | 
apiInstance.updatePosts(companyId, postId, postsUpdate, (error, data, response) => {
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
 **postId** | **String**| Unique identifier for the Post | 
 **postsUpdate** | [**PostsUpdate**](PostsUpdate.md)|  | 

### Return type

[**UpdatePosts200Response**](UpdatePosts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

