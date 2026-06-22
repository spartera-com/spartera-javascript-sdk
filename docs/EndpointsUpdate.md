# SparteraApiSdk.EndpointsUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateCreated** | **Date** | Required. | [optional] 
**lastUpdated** | **Date** | Required. | [optional] 
**userId** | **String** | User who created this endpoint | [optional] 
**companyId** | **String** | References companies.company_id — A Spartera seller or buyer company account. See GET /companies for valid values. Required. | [optional] 
**connectionId** | **String** | Connection to the data source | [optional] 
**industryId** | **Number** | Industry / category for marketplace discovery | [optional] 
**aucId** | **Number** | Primary use case for marketplace discovery | [optional] 
**approvalStatus** | **String** | Approval status before marketplace publication | [optional] 
**approvedByUserId** | **String** | User who approved this endpoint for marketplace | [optional] 
**approvedAt** | **Date** | Timestamp of marketplace approval | [optional] 
**sellInMarketplace** | **Boolean** | Whether this endpoint appears in the public marketplace | [optional] 
**name** | **String** | Human-readable name for the endpoint | [optional] 
**slug** | **String** | Human-readable, URL-safe slug derived from name at creation time. e.g. &#39;NFL Live Moneyline &amp; Spread Odds&#39; → &#39;nfl-live-moneyline-spread-odds&#39;. Never changes after creation. Unique within company (DB constraint). Creation fails with 409 if a duplicate name exists in the same company. | [optional] 
**description** | **String** | Description of what this endpoint provides | [optional] 
**detailedDescription** | **String** | Long-form HTML description for product pages and SEO | [optional] 
**topQuestions** | **String** | Top 3 questions this endpoint can help answer, in English. Stored as JSON array of strings (1-3 items, 15-200 chars each). Strongly encouraged for marketplace endpoints but not required — nudge via UI completeness score, not hard validation. | [optional] 
**sourceSchemaName** | **String** | Schema/database name where the table resides | [optional] 
**sourceTableName** | **String** | Table name to query from | [optional] 
**customerName** | **String** | Named customer for B2B deals (pricing handled via asset_price_history) | [optional] 
**endpointSchema** | **Object** | Column configurations including aggregations, filters, and visibility. Format: {columns: [{name, type, aggregation, filter, is_hidden, alias, ...}]}. This is the source of truth — SQL is generated at runtime from this configuration. | [optional] 
**rateLimitNumber** | **Number** | Number of requests allowed per rate_limit_period | [optional] 
**rateLimitPeriod** | **String** | Time period for rate limiting (HOUR, DAY, MONTH) | [optional] 
**rateLimitGranularity** | **String** | How to group rate limits (IP, USER, COMPANY, API_KEY, GLOBAL) | [optional] 
**accessMethod** | **String** | Access control method (OPEN, API_KEY, IP, EMAIL, DOMAIN) | [optional] 
**accessWhitelist** | **Object** | List of allowed IPs, emails, or domains based on access_method. Format: {type: &#39;ip&#39;|&#39;email&#39;|&#39;domain&#39;, values: [&#39;192.168.1.1&#39;, ...]} | [optional] 
**status** | **String** | Current status of the endpoint (ACTIVE, INACTIVE, DEPRECATED) | [optional] 
**dataTimePeriodStart** | **Date** | Start date of the data time period covered | [optional] 
**dataTimePeriodEnd** | **Date** | End date of the data time period covered | [optional] 
**dateCollectionStart** | **Date** | When the seller began actively collecting this data. Distinct from data_time_period_start, which describes when the records themselves begin. Backfilled historical data will have date_collection_start &gt; data_time_period_start. | [optional] 
**geographicCoverageType** | **String** | Type of geographic coverage | [optional] 
**geographicCoverageDetails** | **String** | Specific regions/countries covered (e.g., &#39;United States, Canada, Mexico&#39;) | [optional] 
**dataSourceRefreshFrequency** | **String** | How often the source data is refreshed | [optional] 
**tags** | **String** | Comma-separated tags for organizing endpoints | [optional] 
**lastAccessed** | **Date** | When this endpoint was last called | [optional] 
**maxRecordsPerRequest** | **Number** | Seller-enforced row cap per request. Buyers cannot exceed this. Default 1000. | [optional] 
**exportEnabled** | **Boolean** | Whether this endpoint supports bulk export to GCS. When True, buyers can request delivery&#x3D;gcs with format&#x3D;csv|parquet. Independent of max_records_per_request, which only governs inline JSON. | [optional] 
**maxRecordsPerExport** | **Number** | Hard ceiling on rows returned per GCS export. Separate from max_records_per_request so sellers can offer larger downloads via file delivery without expanding inline JSON responses. | [optional] 
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





## Enum: GeographicCoverageTypeEnum


* `GLOBAL` (value: `"GLOBAL"`)

* `CONTINENTAL` (value: `"CONTINENTAL"`)

* `REGIONAL` (value: `"REGIONAL"`)

* `NATIONAL` (value: `"NATIONAL"`)

* `STATE` (value: `"STATE"`)

* `LOCAL` (value: `"LOCAL"`)

* `CUSTOM` (value: `"CUSTOM"`)

* `UNKNOWN` (value: `"UNKNOWN"`)





## Enum: DataSourceRefreshFrequencyEnum


* `EVERY_SECOND` (value: `"EVERY_SECOND"`)

* `EVERY_MINUTE` (value: `"EVERY_MINUTE"`)

* `EVERY_HOUR` (value: `"EVERY_HOUR"`)

* `EVERY_DAY` (value: `"EVERY_DAY"`)

* `EVERY_WEEK` (value: `"EVERY_WEEK"`)

* `EVERY_MONTH` (value: `"EVERY_MONTH"`)

* `EVERY_QUARTER` (value: `"EVERY_QUARTER"`)

* `EVERY_YEAR` (value: `"EVERY_YEAR"`)

* `NEVER` (value: `"NEVER"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




