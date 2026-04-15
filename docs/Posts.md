# SparteraApiSdk.Posts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateCreated** | **Date** | Optional. | [optional] 
**lastUpdated** | **Date** | Optional. | [optional] 
**postId** | **String** | Unique identifier. | [optional] 
**userId** | **String** | User who created this post | 
**companyId** | **String** | Company this post belongs to | 
**title** | **String** | Article title | 
**category** | **String** | Article category (e.g., &#39;Sports&#39;, &#39;Business&#39;) | [optional] 
**teaser** | **String** | Article teaser/subtitle | [optional] 
**contentHtml** | **String** | Generated article HTML content | 
**insightsUsed** | **Object** | Array of insights used: [{asset_id, asset_name, value, runtime, success}] | [optional] 
**generationCreativity** | **Number** | Creativity level (0-100), maps to AI temperature | [optional] 
**generationTargetWordCount** | **Number** | Target word count (null &#x3D; auto) | [optional] 
**generationTone** | **String** | Writing tone: professional, casual, technical, conversational | [optional] 
**generationIncludeCitations** | **Boolean** | Whether to include data source citations | [optional] 
**generationSubheadingCount** | **Number** | Number of subheadings (2-5) | [optional] 
**generationTemperature** | **Number** | Actual temperature used for generation (0.0-2.0) | [optional] 
**dataCostCredits** | **Number** | Cost in credits for data insights | 
**serviceCostCredits** | **Number** | Cost in credits for AI generation service | 
**totalCostCredits** | **Number** | Total cost in credits (data + service) | 
**successfulInsightsCount** | **Number** | Number of insights that succeeded | 
**failedInsightsCount** | **Number** | Number of insights that failed | 
**generationTimeMs** | **Number** | Time taken to generate article in milliseconds | [optional] 
**isPublished** | **Boolean** | Whether this post has been published | 
**publishedAt** | **Date** | When this post was published | [optional] 
**viewCount** | **Number** | Number of times this post has been viewed | 
**lastEditedAt** | **Date** | When this post was last edited | [optional] 


