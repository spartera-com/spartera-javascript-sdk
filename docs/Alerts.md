# SparteraApiSdk.Alerts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateCreated** | **Date** | Optional. | [optional] 
**lastUpdated** | **Date** | Optional. | [optional] 
**alertId** | **Number** | Auto-generated unique identifier. | [optional] 
**assetId** | **String** | References assets.asset_id — A published analytics asset — a calculation or visualization built on a data connection. See GET /assets for valid values. Required. | 
**userId** | **String** | References users.user_id — An individual user account within a company. See GET /users for valid values. Optional. | [optional] 
**companyId** | **String** | References companies.company_id — A Spartera seller or buyer company account. See GET /companies for valid values. Required. | 
**isActive** | **Boolean** | Whether this alert is currently active | 


