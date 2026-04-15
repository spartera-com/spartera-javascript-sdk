# SparteraApiSdk.AssetPriceHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateCreated** | **Date** | Optional. | [optional] 
**lastUpdated** | **Date** | Optional. | [optional] 
**aphId** | **String** | Unique identifier. | [optional] 
**assetId** | **String** | FK to assets. NULL when this record belongs to an endpoint. | [optional] 
**endpointId** | **String** | FK to endpoints. NULL when this record belongs to an asset. | [optional] 
**priceUsd** | **Number** | Optional. | [optional] 
**dateEnded** | **Date** | SCD Type 2 — when this price record was superseded | [optional] 


