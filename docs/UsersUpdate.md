# SparteraApiSdk.UsersUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyId** | **String** | References companies.company_id — A Spartera seller or buyer company account. See GET /companies for valid values. Required. | [optional] 
**roleId** | **Number** | User&#39;s role for RBAC - single source of truth | [optional] 
**functionId** | **Number** | User&#39;s job function/title | [optional] 
**status** | **String** | Required. One of: ACTIVE, PENDING, INACTIVE, BANNED. | [optional] 
**emailAddress** | **String** | Optional. Must be unique. | [optional] 
**timezone** | **String** | Optional. | [optional] 
**marketingOptOut** | **Boolean** | Whether user has opted out of marketing communications. Default false &#x3D; opted in per ToS. | [optional] 



## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `PENDING` (value: `"PENDING"`)

* `INACTIVE` (value: `"INACTIVE"`)

* `BANNED` (value: `"BANNED"`)




