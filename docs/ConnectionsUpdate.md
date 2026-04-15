# SparteraApiSdk.ConnectionsUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | References users.user_id — An individual user account within a company. See GET /users for valid values. Optional. | [optional] 
**engineId** | **Number** | References storage_engines.engine_id — Fact table of all the different storage engines we support. See GET /storage_engines for valid values. Required. | [optional] 
**companyId** | **String** | References companies.company_id — A Spartera seller or buyer company account. See GET /companies for valid values. Required. | [optional] 
**credentialType** | **String** | Optional. One of: SERVICE_ACCOUNT, USERNAME_PASSWORD, API_KEY, SERVICE_IDENTITY, ACCESS_KEY, … (8 total). | [optional] 
**name** | **String** | Optional. | [optional] 
**description** | **String** | Optional. | [optional] 
**providerDomain** | **String** | Domain of the external API provider (e.g., &#39;api.weather.com&#39;) | [optional] 
**verifiedUsageAbility** | **Boolean** | Optional. | [optional] 



## Enum: CredentialTypeEnum


* `SERVICE_ACCOUNT` (value: `"SERVICE_ACCOUNT"`)

* `USERNAME_PASSWORD` (value: `"USERNAME_PASSWORD"`)

* `API_KEY` (value: `"API_KEY"`)

* `SERVICE_IDENTITY` (value: `"SERVICE_IDENTITY"`)

* `ACCESS_KEY` (value: `"ACCESS_KEY"`)

* `NONE` (value: `"NONE"`)

* `OAUTH` (value: `"OAUTH"`)

* `JSON` (value: `"JSON"`)




