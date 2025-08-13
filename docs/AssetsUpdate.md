# SparteraApiDocumentation.AssetsUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** |  | [optional] 
**companyId** | **String** |  | [optional] 
**connectionId** | **String** |  | [optional] 
**industryId** | **Number** |  | [optional] 
**approvalStatus** | **String** | Approval status for AI-generated assets | [optional] 
**approvedByUserId** | **String** | User who approved this asset for marketplace | [optional] 
**approvedAt** | **Date** | When this asset was approved for marketplace | [optional] 
**name** | **String** |  | [optional] 
**slug** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**source** | **String** | Enum type: Source | [optional] 
**assetType** | **String** | Enum type: AssetType | [optional] 
**assetSchema** | **Object** | Stores database table schema data including columns, types, and metadata | [optional] 
**tags** | **String** |  | [optional] 
**sqlLogic** | **String** |  | [optional] 
**sourceSchemaName** | **String** |  | [optional] 
**sourceTableName** | **String** |  | [optional] 
**sellInMarketplace** | **Boolean** |  | [optional] 
**vizChartLibrary** | **String** | Enum type: PlottingLibrary | [optional] 
**vizChartType** | **String** | Enum type: ChartType | [optional] 
**vizDepVarColName** | **String** |  | [optional] 
**vizIndepVarColName** | **String** |  | [optional] 
**vizSizeColName** | **String** |  | [optional] 
**vizColorColName** | **String** |  | [optional] 
**vizDataAggregation** | **String** | Enum type: AggregationType | [optional] 
**vizSortDirection** | **String** | Enum type: SortDirection | [optional] 
**vizDataLimit** | **Number** |  | [optional] 
**vizColorScheme** | **String** | Enum type: ColorScheme | [optional] 
**allowParams** | **Boolean** |  | [optional] 
**acceptTerms** | **Boolean** |  | [optional] 
**cached** | **Boolean** |  | [optional] 
**schedule** | **String** |  | [optional] 
**nextRun** | **Date** |  | [optional] 
**dataTimePeriodStart** | **Date** | Start date of the data time period covered | [optional] 
**dataTimePeriodEnd** | **Date** | End date of the data time period covered | [optional] 
**geographicCoverageType** | **String** | Type of geographic coverage (Enum type: GeographicCoverage) | [optional] 
**geographicCoverageDetails** | **String** | Specific regions/countries covered (e.g., &#39;United States, Canada, Mexico&#39;) | [optional] 
**dataSourceRefreshFrequency** | **String** | How often the source data is refreshed (Enum type: DataRefreshFrequency) | [optional] 
**dataSourceLastRefreshed** | **Date** | When the source data was last refreshed | [optional] 



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

* `HORIZONTALBAR` (value: `"HORIZONTALBAR"`)

* `PIE` (value: `"PIE"`)

* `DOUGHNUT` (value: `"DOUGHNUT"`)

* `POLAR` (value: `"POLAR"`)

* `RADAR` (value: `"RADAR"`)

* `BUBBLE` (value: `"BUBBLE"`)

* `SCATTER` (value: `"SCATTER"`)

* `NA` (value: `"NA"`)





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




