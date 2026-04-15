# SparteraApiSdk.EndpointsInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateCreated** | **Date** | Required. | [optional] 
**lastUpdated** | **Date** | Required. | [optional] 
**userId** | **String** | User who created this endpoint | [optional] 
**companyId** | **String** | References companies.company_id — A Spartera seller or buyer company account. See GET /companies for valid values. Required. | 
**connectionId** | **String** | Connection to the data source | 
**industryId** | **Number** | Industry / category for marketplace discovery | [optional] 
**aucId** | **Number** | Primary use case for marketplace discovery | [optional] 
**approvalStatus** | **String** | Approval status before marketplace publication | [optional] 
**approvedByUserId** | **String** | User who approved this endpoint for marketplace | [optional] 
**approvedAt** | **Date** | Timestamp of marketplace approval | [optional] 
**sellInMarketplace** | **Boolean** | Whether this endpoint appears in the public marketplace | [optional] 
**priceCredits** | **Number** | Credits deducted from the buyer&#39;s pool per successful (200 OK) request. Same credit pool as assets. price_usd kept for billing records / dashboards. | [optional] 
**name** | **String** | Human-readable name for the endpoint | 
**slug** | **String** | Human-readable, URL-safe slug derived from name at creation time. e.g. &#39;NFL Live Moneyline &amp; Spread Odds&#39; → &#39;nfl-live-moneyline-spread-odds&#39;. Never changes after creation. Unique within company (DB constraint). Creation fails with 409 if a duplicate name exists in the same company. | [optional] 
**description** | **String** | Description of what this endpoint provides | [optional] 
**sourceSchemaName** | **String** | Schema/database name where the table resides | [optional] 
**sourceTableName** | **String** | Table name to query from | [optional] 
**customerName** | **String** | Named customer for B2B deals (marketplace uses price_credits instead) | [optional] 
**priceUsd** | **Number** | USD reference price for billing records and seller dashboards | [optional] 
**endpointSchema** | **Object** | Column configurations including aggregations, filters, and visibility. Format: {columns: [{name, type, aggregation, filter, is_hidden, alias, ...}]}. This is the source of truth — SQL is generated at runtime from this configuration. | [optional] 
**rateLimitRequests** | **Number** | Number of requests allowed per rate_limit_period | [optional] 
**rateLimitPeriod** | **String** | Time period for rate limiting (HOUR, DAY, MONTH) | [optional] 
**rateLimitGranularity** | **String** | How to group rate limits (IP, USER, COMPANY, API_KEY, GLOBAL) | [optional] 
**accessMethod** | **String** | Access control method (OPEN, API_KEY, IP, EMAIL, DOMAIN) | [optional] 
**accessWhitelist** | **Object** | List of allowed IPs, emails, or domains based on access_method. Format: {type: &#39;ip&#39;|&#39;email&#39;|&#39;domain&#39;, values: [&#39;192.168.1.1&#39;, ...]} | [optional] 
**status** | **String** | Current status of the endpoint (ACTIVE, INACTIVE, DEPRECATED) | [optional] 
**tags** | **String** | Comma-separated tags for organizing endpoints | [optional] 
**lastAccessed** | **Date** | When this endpoint was last called | [optional] 
**maxRecordsPerRequest** | **Number** | Seller-enforced row cap per request. Buyers cannot exceed this. Default 1000. | [optional] 
**sampleResponse** | **Object** | Last successful {spartera, request, response} envelope. Saved on each successful marketplace run. Displayed as preview on product page load. | [optional] 
**active** | **Boolean** | Required. | [optional] 



## Enum: ApprovalStatusEnum


* `PENDING` (value: `"PENDING"`)

* `APPROVED` (value: `"APPROVED"`)

* `REJECTED` (value: `"REJECTED"`)

* `NEEDS_REVISION` (value: `"NEEDS_REVISION"`)





## Enum: RateLimitPeriodEnum


* `SECOND` (value: `"SECOND"`)

* `MINUTE` (value: `"MINUTE"`)

* `HOUR` (value: `"HOUR"`)

* `DAY` (value: `"DAY"`)





## Enum: RateLimitGranularityEnum


* `USER` (value: `"USER"`)

* `COMPANY` (value: `"COMPANY"`)

* `IP` (value: `"IP"`)

* `GLOBAL` (value: `"GLOBAL"`)





## Enum: AccessMethodEnum


* `OPEN` (value: `"OPEN"`)

* `API_KEY` (value: `"API_KEY"`)

* `IP` (value: `"IP"`)

* `EMAIL` (value: `"EMAIL"`)

* `DOMAIN` (value: `"DOMAIN"`)





## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)

* `DEPRECATED` (value: `"DEPRECATED"`)




