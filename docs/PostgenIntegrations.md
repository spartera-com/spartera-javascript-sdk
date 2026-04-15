# SparteraApiSdk.PostgenIntegrations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateCreated** | **Date** | Optional. | [optional] 
**lastUpdated** | **Date** | Optional. | [optional] 
**integrationId** | **String** | Unique identifier. | [optional] 
**companyId** | **String** | Company this integration belongs to | 
**userId** | **String** | User who created this integration | 
**platform** | **String** | Platform identifier (beehiiv, wordpress, medium, etc) | 
**platformName** | **String** | Display name of the platform | 
**credentialsSecretName** | **String** | GCP Secret Manager secret name containing encrypted credentials | 
**isActive** | **Boolean** | Whether this integration is currently active | 
**lastUsedAt** | **Date** | Last time this integration was used for publishing | [optional] 


