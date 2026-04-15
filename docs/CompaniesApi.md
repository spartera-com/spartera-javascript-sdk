# SparteraApiSdk.CompaniesApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompaniesById**](CompaniesApi.md#getCompaniesById) | **GET** /companies/{company_id} | Get details of the requestor&#39;s own company
[**listCompanies**](CompaniesApi.md#listCompanies) | **GET** /companies/{company_id}/requests/plan | Get the total number of requests allocated in the company&#39;s current subscription plan.
[**listCompaniesAnalyticsAssets**](CompaniesApi.md#listCompaniesAnalyticsAssets) | **GET** /companies/{company_id}/analytics/assets | Get asset performance analytics.     Query params: start_date, end_date, limit, sort_by, include
[**listCompaniesAnalyticsCustomers**](CompaniesApi.md#listCompaniesAnalyticsCustomers) | **GET** /companies/{company_id}/analytics/customers | Get customer analytics including growth and segmentation.     Query params: start_date, end_date, group_by, segment_by
[**listCompaniesAnalyticsDashboard**](CompaniesApi.md#listCompaniesAnalyticsDashboard) | **GET** /companies/{company_id}/analytics/dashboard | Get comprehensive dashboard analytics for seller dashboard.     Query params: start_date, end_date, period (day/week/month/quarter)
[**listCompaniesAnalyticsMetrics**](CompaniesApi.md#listCompaniesAnalyticsMetrics) | **GET** /companies/{company_id}/analytics/metrics | Get summary metrics (counts only). No date params needed — returns all-time totals.     Performance: &lt; 0.1s
[**listCompaniesAnalyticsSales**](CompaniesApi.md#listCompaniesAnalyticsSales) | **GET** /companies/{company_id}/analytics/sales | Get sales over time analytics.     Query params: start_date, end_date, group_by (day/week/month/quarter), metrics
[**listCompaniesObjects**](CompaniesApi.md#listCompaniesObjects) | **GET** /companies/{company_id}/objects | Get all objects (connections, assets) of a single company
[**listCompaniesRequestsUsage**](CompaniesApi.md#listCompaniesRequestsUsage) | **GET** /companies/{company_id}/requests/usage | Get company request usage data for a specific month.
[**updateCompanies**](CompaniesApi.md#updateCompanies) | **PATCH** /companies/{company_id} | Update an existing company by ID



## getCompaniesById

> GetCompaniesById200Response getCompaniesById(companyId)

Get details of the requestor&#39;s own company

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.CompaniesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
apiInstance.getCompaniesById(companyId, (error, data, response) => {
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

### Return type

[**GetCompaniesById200Response**](GetCompaniesById200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCompanies

> ListCompaniesAnalyticsAssets200Response listCompanies(companyId, opts)

Get the total number of requests allocated in the company&#39;s current subscription plan.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.CompaniesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listCompanies(companyId, opts, (error, data, response) => {
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

[**ListCompaniesAnalyticsAssets200Response**](ListCompaniesAnalyticsAssets200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCompaniesAnalyticsAssets

> ListCompaniesAnalyticsAssets200Response listCompaniesAnalyticsAssets(companyId, opts)

Get asset performance analytics.     Query params: start_date, end_date, limit, sort_by, include

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.CompaniesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listCompaniesAnalyticsAssets(companyId, opts, (error, data, response) => {
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

[**ListCompaniesAnalyticsAssets200Response**](ListCompaniesAnalyticsAssets200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCompaniesAnalyticsCustomers

> ListCompaniesAnalyticsAssets200Response listCompaniesAnalyticsCustomers(companyId, opts)

Get customer analytics including growth and segmentation.     Query params: start_date, end_date, group_by, segment_by

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.CompaniesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listCompaniesAnalyticsCustomers(companyId, opts, (error, data, response) => {
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

[**ListCompaniesAnalyticsAssets200Response**](ListCompaniesAnalyticsAssets200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCompaniesAnalyticsDashboard

> ListCompaniesAnalyticsAssets200Response listCompaniesAnalyticsDashboard(companyId, opts)

Get comprehensive dashboard analytics for seller dashboard.     Query params: start_date, end_date, period (day/week/month/quarter)

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.CompaniesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listCompaniesAnalyticsDashboard(companyId, opts, (error, data, response) => {
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

[**ListCompaniesAnalyticsAssets200Response**](ListCompaniesAnalyticsAssets200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCompaniesAnalyticsMetrics

> ListCompaniesAnalyticsAssets200Response listCompaniesAnalyticsMetrics(companyId, opts)

Get summary metrics (counts only). No date params needed — returns all-time totals.     Performance: &lt; 0.1s

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.CompaniesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listCompaniesAnalyticsMetrics(companyId, opts, (error, data, response) => {
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

[**ListCompaniesAnalyticsAssets200Response**](ListCompaniesAnalyticsAssets200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCompaniesAnalyticsSales

> ListCompaniesAnalyticsAssets200Response listCompaniesAnalyticsSales(companyId, opts)

Get sales over time analytics.     Query params: start_date, end_date, group_by (day/week/month/quarter), metrics

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.CompaniesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listCompaniesAnalyticsSales(companyId, opts, (error, data, response) => {
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

[**ListCompaniesAnalyticsAssets200Response**](ListCompaniesAnalyticsAssets200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCompaniesObjects

> ListCompaniesAnalyticsAssets200Response listCompaniesObjects(companyId, opts)

Get all objects (connections, assets) of a single company

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.CompaniesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listCompaniesObjects(companyId, opts, (error, data, response) => {
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

[**ListCompaniesAnalyticsAssets200Response**](ListCompaniesAnalyticsAssets200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCompaniesRequestsUsage

> ListCompaniesAnalyticsAssets200Response listCompaniesRequestsUsage(companyId, opts)

Get company request usage data for a specific month.

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.CompaniesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let opts = {
  'page': 1, // Number | Page number for pagination
  'limit': 20, // Number | Number of items per page
  'sortBy': "sortBy_example", // String | Field to sort by
  'sortOrder': "'desc'", // String | Sort order (ascending or descending)
  'search': "search_example" // String | Search term to filter results
};
apiInstance.listCompaniesRequestsUsage(companyId, opts, (error, data, response) => {
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

[**ListCompaniesAnalyticsAssets200Response**](ListCompaniesAnalyticsAssets200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCompanies

> UpdateCompanies200Response updateCompanies(companyId, companiesUpdate)

Update an existing company by ID

### Example

```javascript
import SparteraApiSdk from 'spartera-api-sdk';
let defaultClient = SparteraApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SparteraApiSdk.CompaniesApi();
let companyId = "companyId_example"; // String | Unique identifier for the Company
let companiesUpdate = new SparteraApiSdk.CompaniesUpdate(); // CompaniesUpdate | 
apiInstance.updateCompanies(companyId, companiesUpdate, (error, data, response) => {
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
 **companiesUpdate** | [**CompaniesUpdate**](CompaniesUpdate.md)|  | 

### Return type

[**UpdateCompanies200Response**](UpdateCompanies200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

