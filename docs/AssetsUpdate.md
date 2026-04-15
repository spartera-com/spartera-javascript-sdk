# SparteraApiSdk.AssetsUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | References users.user_id — An individual user account within a company. See GET /users for valid values. Optional. | [optional] 
**companyId** | **String** | References companies.company_id — A Spartera seller or buyer company account. See GET /companies for valid values. Required. | [optional] 
**connectionId** | **String** | Optional. | [optional] 
**industryId** | **Number** | References industries.industry_id — Available industry categories for asset classification. Based on US NAISC codes.. See GET /industries for valid values. Optional. | [optional] 
**aucId** | **Number** | Primary use case for this asset, from clustering analysis | [optional] 
**functionId** | **String** | Optional identifier for routing to specific functions/models at seller endpoint. For GET: appended to URL path. For POST: included in JSON body. | [optional] 
**approvalStatus** | **String** | Approval status for AI-generated assets | [optional] 
**approvedByUserId** | **String** | User who approved this asset for marketplace | [optional] 
**approvedAt** | **Date** | When this asset was approved for marketplace | [optional] 
**name** | **String** | Required. | [optional] 
**slug** | **String** | Optional. | [optional] 
**description** | **String** | Optional. | [optional] 
**detailedDescription** | **String** | Long-form HTML description for product pages and SEO | [optional] 
**source** | **String** | Required. One of: MANUAL, AUTOMATIC. | [optional] 
**assetType** | **String** | Optional. One of: CALCULATION, VISUALIZATION, DATA. | [optional] 
**assetSchema** | **Object** | Stores database table schema data including columns, types, and metadata | [optional] 
**tags** | **String** | Optional. | [optional] 
**shortCode** | **String** | Short code for tera.ac URL shortener (e.g., &#39;f78zq1&#39;) | [optional] 
**restrictedDomains** | **String** | Semicolon or comma-separated list of domains restricted from accessing this asset | [optional] 
**sqlLogic** | **String** | Optional. | [optional] 
**sourceSchemaName** | **String** | Optional. | [optional] 
**sourceTableName** | **String** | Optional. | [optional] 
**sellInMarketplace** | **Boolean** | Required. | [optional] 
**requireCustomization** | **Boolean** | Whether this asset requires customization before use | [optional] 
**vizChartLibrary** | **String** | Optional. One of: PLOTLY, MATPLOTLIB, SEABORN. | [optional] 
**vizChartType** | **String** | Optional. One of: LINE, BAR, PIE, DOUGHNUT, POLAR, … (8 total). | [optional] 
**vizDepVarColName** | **String** | Optional. | [optional] 
**vizIndepVarColName** | **String** | Optional. | [optional] 
**vizSizeColName** | **String** | Optional. | [optional] 
**vizColorColName** | **String** | Optional. | [optional] 
**vizDataAggregation** | **String** | Optional. One of: No Aggregation, Sum, Average, Count, Minimum, … (6 total). | [optional] 
**vizSortDirection** | **String** | Optional. One of: No Sorting, Ascending, Descending. | [optional] 
**vizDataLimit** | **Number** | Optional. | [optional] 
**vizColorScheme** | **String** | Optional. One of: Default, Sequential, Diverging, Categorical, Monochrome, … (8 total). | [optional] 
**vizShowLegend** | **Boolean** | Show/hide chart legend | [optional] 
**vizShowGrid** | **Boolean** | Show/hide grid lines | [optional] 
**vizShowTrendline** | **Boolean** | Show trendline for scatter/line charts | [optional] 
**vizLineSmoothing** | **Boolean** | Enable smoothing for line charts | [optional] 
**vizBarStacked** | **Boolean** | Stack bars instead of grouping | [optional] 
**vizFilterDirection** | **String** | Whether data_limit shows TOP or BOTTOM N | [optional] 
**allowParams** | **Boolean** | Required. | [optional] 
**acceptTerms** | **Boolean** | Required. | [optional] 
**cached** | **Boolean** | Optional. | [optional] 
**schedule** | **String** | Optional. | [optional] 
**nextRun** | **Date** | Optional. | [optional] 
**dataTimePeriodStart** | **Date** | Start date of the data time period covered | [optional] 
**dataTimePeriodEnd** | **Date** | End date of the data time period covered | [optional] 
**geographicCoverageType** | **String** | Type of geographic coverage | [optional] 
**geographicCoverageDetails** | **String** | Specific regions/countries covered (e.g., &#39;United States, Canada, Mexico&#39;) | [optional] 
**dataSourceRefreshFrequency** | **String** | How often the source data is refreshed | [optional] 
**dataSourceLastRefreshed** | **Date** | When the source data was last refreshed | [optional] 
**rateLimitNumber** | **Number** | Number of requests allowed per period (e.g., 100) | [optional] 
**rateLimitPeriod** | **String** | Time period for rate limiting (second, minute, hour, day) | [optional] 
**rateLimitGranularity** | **String** | Granularity level for rate limiting (USER, COMPANY, IP) | [optional] 



## Enum: ApprovalStatusEnum


* `PENDING` (value: `"PENDING"`)

* `APPROVED` (value: `"APPROVED"`)

* `REJECTED` (value: `"REJECTED"`)

* `NEEDS_REVISION` (value: `"NEEDS_REVISION"`)





## Enum: SourceEnum


* `MANUAL` (value: `"MANUAL"`)

* `AUTOMATIC` (value: `"AUTOMATIC"`)





## Enum: AssetTypeEnum


* `CALCULATION` (value: `"CALCULATION"`)

* `VISUALIZATION` (value: `"VISUALIZATION"`)

* `DATA` (value: `"DATA"`)





## Enum: VizChartLibraryEnum


* `PLOTLY` (value: `"PLOTLY"`)

* `MATPLOTLIB` (value: `"MATPLOTLIB"`)

* `SEABORN` (value: `"SEABORN"`)





## Enum: VizChartTypeEnum


* `LINE` (value: `"LINE"`)

* `BAR` (value: `"BAR"`)

* `PIE` (value: `"PIE"`)

* `DOUGHNUT` (value: `"DOUGHNUT"`)

* `POLAR` (value: `"POLAR"`)

* `RADAR` (value: `"RADAR"`)

* `BUBBLE` (value: `"BUBBLE"`)

* `SCATTER` (value: `"SCATTER"`)





## Enum: VizDataAggregationEnum


* `No Aggregation` (value: `"No Aggregation"`)

* `Sum` (value: `"Sum"`)

* `Average` (value: `"Average"`)

* `Count` (value: `"Count"`)

* `Minimum` (value: `"Minimum"`)

* `Maximum` (value: `"Maximum"`)





## Enum: VizSortDirectionEnum


* `No Sorting` (value: `"No Sorting"`)

* `Ascending` (value: `"Ascending"`)

* `Descending` (value: `"Descending"`)





## Enum: VizColorSchemeEnum


* `Default` (value: `"Default"`)

* `Sequential` (value: `"Sequential"`)

* `Diverging` (value: `"Diverging"`)

* `Categorical` (value: `"Categorical"`)

* `Monochrome` (value: `"Monochrome"`)

* `Pastel` (value: `"Pastel"`)

* `Dark` (value: `"Dark"`)

* `Light` (value: `"Light"`)





## Enum: VizFilterDirectionEnum


* `TOP` (value: `"TOP"`)

* `BOTTOM` (value: `"BOTTOM"`)





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


* `REAL_TIME` (value: `"REAL_TIME"`)

* `HOURLY` (value: `"HOURLY"`)

* `DAILY` (value: `"DAILY"`)

* `WEEKLY` (value: `"WEEKLY"`)

* `MONTHLY` (value: `"MONTHLY"`)

* `QUARTERLY` (value: `"QUARTERLY"`)

* `ANNUAL` (value: `"ANNUAL"`)

* `ONE_TIME` (value: `"ONE_TIME"`)

* `CUSTOM` (value: `"CUSTOM"`)

* `UNKNOWN` (value: `"UNKNOWN"`)





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




