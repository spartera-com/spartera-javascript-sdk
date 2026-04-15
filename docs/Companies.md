# SparteraApiSdk.Companies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateCreated** | **Date** | Optional. | [optional] 
**lastUpdated** | **Date** | Optional. | [optional] 
**companyId** | **String** | Unique identifier. | [optional] 
**industryId** | **Number** | References industries.industry_id — Available industry categories for asset classification. Based on US NAISC codes.. See GET /industries for valid values. Optional. | [optional] 
**countryId** | **Number** | References countries.country_id — List of countries of the world. See GET /countries for valid values. Optional. | [optional] 
**companyName** | **String** | Optional. | [optional] 
**companyDescription** | **String** | Optional. | [optional] 
**companyHandle** | **String** | Required. Must be unique. | 
**companyDomain** | **String** | Required. Must be unique. | 
**creditsBalance** | **Number** | Current balance of credits for this company (buyer) | 
**acceptedEula** | **Boolean** | Optional. | [optional] 
**stripeAccountId** | **String** | Stripe Connect account ID for marketplace sellers | [optional] 
**stripeAccountStatus** | **String** | Status of the Stripe account (verified, pending, etc.) | [optional] 
**vendorSharePercent** | **Number** | Negotiated vendor revenue share (e.g. 0.85 &#x3D; 85%). NULL &#x3D; system default 80%. | [optional] 
**partnershipType** | **String** | Partnership type: SELF_MANAGED, CUSTODIAN, or null | [optional] 



## Enum: PartnershipTypeEnum


* `SELF_MANAGED` (value: `"SELF_MANAGED"`)

* `CUSTODIAN` (value: `"CUSTODIAN"`)




