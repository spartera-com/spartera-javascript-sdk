# SparteraApiSdk.FavoritesUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetId** | **String** | References assets.asset_id — A published analytics asset — a calculation or visualization built on a data connection. See GET /assets for valid values. Required. | [optional] 
**userId** | **String** | References users.user_id — An individual user account within a company. See GET /users for valid values. Optional. | [optional] 
**companyId** | **String** | References companies.company_id — A Spartera seller or buyer company account. See GET /companies for valid values. Required. | [optional] 
**notes** | **String** | Optional user notes about this favorite | [optional] 
**category** | **String** | Optional category for organizing favorites (e.g., &#39;Work&#39;, &#39;Research&#39;) | [optional] 
**priority** | **Number** | User-defined priority for sorting (higher &#x3D; more important) | [optional] 


