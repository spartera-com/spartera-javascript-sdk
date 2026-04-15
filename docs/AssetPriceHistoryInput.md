# SparteraApiSdk.AssetPriceHistoryInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetId** | **String** | FK to assets. NULL when this record belongs to an endpoint. | [optional] 
**endpointId** | **String** | FK to endpoints. NULL when this record belongs to an asset. | [optional] 
**priceUsd** | **Number** | Optional. | [optional] 
**dateEnded** | **Date** | SCD Type 2 — when this price record was superseded | [optional] 


