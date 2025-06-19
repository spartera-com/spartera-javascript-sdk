# SparteraApiDocumentation.CompaniesApi

All URIs are relative to *https://api.spartera.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companiesCompanyIdAnalyticsAssetsGet**](CompaniesApi.md#companiesCompanyIdAnalyticsAssetsGet) | **GET** /companies/{company_id}/analytics/assets | Get asset performance analytics     Query params: start_date, end_date, limit, sort_by, include
[**companiesCompanyIdAnalyticsCustomersGet**](CompaniesApi.md#companiesCompanyIdAnalyticsCustomersGet) | **GET** /companies/{company_id}/analytics/customers | Get customer analytics including growth and segmentation     Query params: start_date, end_date, group_by, segment_by
[**companiesCompanyIdAnalyticsDashboardGet**](CompaniesApi.md#companiesCompanyIdAnalyticsDashboardGet) | **GET** /companies/{company_id}/analytics/dashboard | Get comprehensive dashboard analytics for seller dashboard     Includes all metrics needed for dashboard charts in one call     Query params: start_date, end_date, period (day/week/month/quarter)
[**companiesCompanyIdAnalyticsSalesGet**](CompaniesApi.md#companiesCompanyIdAnalyticsSalesGet) | **GET** /companies/{company_id}/analytics/sales | Get sales over time analytics     Query params: start_date, end_date, group_by (day/week/month/quarter), metrics
[**companiesCompanyIdGet**](CompaniesApi.md#companiesCompanyIdGet) | **GET** /companies/{company_id} | Get details of the requestor&#39;s own company
[**companiesCompanyIdObjectsGet**](CompaniesApi.md#companiesCompanyIdObjectsGet) | **GET** /companies/{company_id}/objects | Get all objects (connections, assets) of a single company
[**companiesCompanyIdPatch**](CompaniesApi.md#companiesCompanyIdPatch) | **PATCH** /companies/{company_id} | Update an existing company by ID
[**companiesCompanyIdRequestsPlanGet**](CompaniesApi.md#companiesCompanyIdRequestsPlanGet) | **GET** /companies/{company_id}/requests/plan | Get the total number of requests allocated in the company&#39;s current subscription plan.
[**companiesCompanyIdRequestsUsageGet**](CompaniesApi.md#companiesCompanyIdRequestsUsageGet) | **GET** /companies/{company_id}/requests/usage | Get company request usage data for a specific month. Returns JSON metrics by default or CSV logs when download parameter is included.



## companiesCompanyIdAnalyticsAssetsGet

> Object companiesCompanyIdAnalyticsAssetsGet(companyId)

Get asset performance analytics     Query params: start_date, end_date, limit, sort_by, include

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CompaniesApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdAnalyticsAssetsGet(companyId).then((data) => {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAnalyticsCustomersGet

> Object companiesCompanyIdAnalyticsCustomersGet(companyId)

Get customer analytics including growth and segmentation     Query params: start_date, end_date, group_by, segment_by

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CompaniesApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdAnalyticsCustomersGet(companyId).then((data) => {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAnalyticsDashboardGet

> Object companiesCompanyIdAnalyticsDashboardGet(companyId)

Get comprehensive dashboard analytics for seller dashboard     Includes all metrics needed for dashboard charts in one call     Query params: start_date, end_date, period (day/week/month/quarter)

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CompaniesApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdAnalyticsDashboardGet(companyId).then((data) => {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdAnalyticsSalesGet

> Object companiesCompanyIdAnalyticsSalesGet(companyId)

Get sales over time analytics     Query params: start_date, end_date, group_by (day/week/month/quarter), metrics

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CompaniesApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdAnalyticsSalesGet(companyId).then((data) => {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdGet

> Object companiesCompanyIdGet(companyId)

Get details of the requestor&#39;s own company

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CompaniesApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdGet(companyId).then((data) => {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdObjectsGet

> Object companiesCompanyIdObjectsGet(companyId)

Get all objects (connections, assets) of a single company

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CompaniesApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdObjectsGet(companyId).then((data) => {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdPatch

> Object companiesCompanyIdPatch(companyId)

Update an existing company by ID

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CompaniesApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdPatch(companyId).then((data) => {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdRequestsPlanGet

> Object companiesCompanyIdRequestsPlanGet(companyId)

Get the total number of requests allocated in the company&#39;s current subscription plan.

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CompaniesApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdRequestsPlanGet(companyId).then((data) => {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companiesCompanyIdRequestsUsageGet

> Object companiesCompanyIdRequestsUsageGet(companyId)

Get company request usage data for a specific month. Returns JSON metrics by default or CSV logs when download parameter is included.

### Example

```javascript
import SparteraApiDocumentation from 'spartera_api_documentation';
let defaultClient = SparteraApiDocumentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SparteraApiDocumentation.CompaniesApi();
let companyId = "companyId_example"; // String | 
apiInstance.companiesCompanyIdRequestsUsageGet(companyId).then((data) => {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

