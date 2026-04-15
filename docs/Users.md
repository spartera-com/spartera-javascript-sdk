# SparteraApiSdk.Users

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateCreated** | **Date** | Optional. | [optional] 
**lastUpdated** | **Date** | Optional. | [optional] 
**userId** | **String** | Unique identifier. | [optional] 
**companyId** | **String** | References companies.company_id — A Spartera seller or buyer company account. See GET /companies for valid values. Required. | 
**roleId** | **Number** | User&#39;s role for RBAC - single source of truth | 
**functionId** | **Number** | User&#39;s job function/title | [optional] 
**status** | **String** | Required. One of: ACTIVE, PENDING, INACTIVE, BANNED. | 
**emailAddress** | **String** | Optional. Must be unique. | [optional] 
**timezone** | **String** | Optional. | [optional] 
**marketingOptOut** | **Boolean** | Whether user has opted out of marketing communications. Default false &#x3D; opted in per ToS. | 



## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `PENDING` (value: `"PENDING"`)

* `INACTIVE` (value: `"INACTIVE"`)

* `BANNED` (value: `"BANNED"`)




