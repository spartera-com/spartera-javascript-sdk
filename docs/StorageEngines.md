# SparteraApiSdk.StorageEngines

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateCreated** | **Date** | Optional. | [optional] 
**lastUpdated** | **Date** | Optional. | [optional] 
**engineId** | **Number** | Unique identifier. | [optional] 
**providerId** | **Number** | References cloud_providers.provider_id — Supported cloud platforms and database engines available for connections. See GET /cloud_providers for valid values. Required. | 
**serviceName** | **String** | Required. | 
**engineType** | **String** | Required. One of: EDW, LLM, RDBMS, OBJ, API_MODEL, … (6 total). | 
**integrationComplete** | **Boolean** | Optional. | [optional] 
**testFuncComplete** | **Boolean** | Optional. | [optional] 



## Enum: EngineTypeEnum


* `EDW` (value: `"EDW"`)

* `LLM` (value: `"LLM"`)

* `RDBMS` (value: `"RDBMS"`)

* `OBJ` (value: `"OBJ"`)

* `API_MODEL` (value: `"API_MODEL"`)

* `EXTERNAL_API` (value: `"EXTERNAL_API"`)




