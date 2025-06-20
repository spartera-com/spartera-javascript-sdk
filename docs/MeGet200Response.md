# SparteraApiDocumentation.MeGet200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | Firebase user ID | 
**email** | **String** | User email address | [optional] 
**authMethod** | **String** | Authentication method used | 
**platform** | **String** | Platform origin | [optional] 
**originDomain** | **String** | Request origin domain | [optional] 
**profile** | [**MeGet200ResponseProfile**](MeGet200ResponseProfile.md) |  | 
**companyId** | **String** | Company ID from authentication claims | 
**roleId** | **Number** | Role ID from authentication claims | 
**tokenMetadata** | [**MeGet200ResponseTokenMetadata**](MeGet200ResponseTokenMetadata.md) |  | [optional] 
**apiKeyInfo** | [**MeGet200ResponseApiKeyInfo**](MeGet200ResponseApiKeyInfo.md) |  | [optional] 



## Enum: AuthMethodEnum


* `jwt_token` (value: `"jwt_token"`)

* `api_key` (value: `"api_key"`)




