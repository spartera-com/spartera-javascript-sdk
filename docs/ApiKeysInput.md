# SparteraApiSdk.ApiKeysInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | User who owns this API key | [optional] 
**companyId** | **String** | Company this API key belongs to | 
**roleId** | **Number** | Role/permission level for this API key | 
**keyType** | **String** | Type of API key (analytics, mcp, or endpoint) | [optional] 
**isSystemGenerated** | **Boolean** | True if key was auto-generated for MCP deployment | [optional] 
**mcpDeploymentId** | **String** | MCP deployment this key is tied to (NULL for analytics/endpoint keys) | [optional] 
**endpointId** | **String** | Endpoint this key is tied to (NULL for analytics/mcp keys) | [optional] 
**name** | **String** | Human-readable name for this API key | [optional] 
**expirationDateUtc** | **Date** | When this API key expires (NULL &#x3D; never expires) | [optional] 


