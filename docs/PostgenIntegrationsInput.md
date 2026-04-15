# SparteraApiSdk.PostgenIntegrationsInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyId** | **String** | Company this integration belongs to | 
**userId** | **String** | User who created this integration | 
**platform** | **String** | Platform identifier (beehiiv, wordpress, medium, etc) | 
**platformName** | **String** | Display name of the platform | 
**credentialsSecretName** | **String** | GCP Secret Manager secret name containing encrypted credentials | 
**isActive** | **Boolean** | Whether this integration is currently active | [optional] 
**lastUsedAt** | **Date** | Last time this integration was used for publishing | [optional] 


