# JavaScript/Node.js SDK Documentation

## Overview
The JavaScript SDK for Spartera API provides a convenient way to interact with the Spartera platform from Node.js applications and browsers.

**Install:** `npm install spartera-api-sdk`

## Requirements
- Node.js 14.0 or higher
- npm package manager

## 🚀 Sell Your First Data Product in 4 API Calls

Transform your data into revenue in under 5 minutes! Here's how to create and sell a data product on the Spartera marketplace:

```javascript
const SparteraApiSdk = require('spartera-api-sdk');

// Configure client
const client = SparteraApiSdk.ApiClient.instance;
client.basePath = 'https://api.spartera.com';
client.defaultHeaders = {'X-API-Key': 'your-api-key-here'};

const COMPANY_ID = 'your-company-id';
const USER_ID = 'your-user-id';

async function sellDataProduct() {
    // Step 1: Discover available data platforms
    console.log('🔍 Step 1: Discovering available platforms...');
    const cloudProvidersApi = new SparteraApiSdk.CloudProvidersApi();
    
    const engines = await new Promise((resolve, reject) => {
        cloudProvidersApi.cloudProvidersGet((error, data) => {
            if (error) reject(error);
            else resolve(data);
        });
    });
    
    const bigqueryEngineId = 1; // BigQuery engine ID
    console.log(`✅ Found ${engines.length} supported platforms`);

    // Step 2: Create a data connection (with credentials in one call!)
    console.log('🔗 Step 2: Creating BigQuery connection...');
    const connectionsApi = new SparteraApiSdk.ConnectionsApi();
    
    // Your BigQuery service account JSON (replace with your actual credentials)
    const serviceAccountJson = {
        "type": "service_account",
        "project_id": "your-project-id",
        "private_key_id": "key-id",
        "private_key": "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n",
        "client_email": "your-service@your-project.iam.gserviceaccount.com",
        "client_id": "client-id",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token"
    };

    const connectionData = {
        company_id: COMPANY_ID,
        user_id: USER_ID,
        engine_id: bigqueryEngineId,
        name: "My BigQuery Data Warehouse",
        description: "Connection to our company's analytics data",
        visibility: "PRIVATE",
        credential_type: "SERVICE_ACCOUNT",
        credentials: JSON.stringify(serviceAccountJson),
        verified_usage_ability: true // Legal compliance - you have rights to this data
    };

    const connection = await new Promise((resolve, reject) => {
        connectionsApi.companiesCompanyIdConnectionsPost(COMPANY_ID, connectionData, (error, data) => {
            if (error) reject(error);
            else resolve(data);
        });
    });
    
    const connectionId = connection.connection_id;
    console.log(`✅ Created connection: ${connectionId}`);

    // Step 3: Create a marketplace asset
    console.log('📊 Step 3: Creating marketplace asset...');
    const assetsApi = new SparteraApiSdk.AssetsApi();

    const assetData = {
        name: "Average Temperature Analytics",
        description: "Real-time weather temperature analytics from our IoT sensors across major cities",
        company_id: COMPANY_ID,
        connection_id: connectionId,
        asset_type: "CALCULATION",
        sql_logic: "SELECT AVERAGE(temperature) AS avg_temp, city, COUNT(*) AS readings FROM `your-project.weather.sensor_data` WHERE timestamp >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 24 HOUR) GROUP BY city ORDER BY avg_temp DESC",
        sell_in_marketplace: true, // 🔥 This makes it available for purchase!
        source: "MANUAL",
        visibility: "PUBLIC"
    };

    const asset = await new Promise((resolve, reject) => {
        assetsApi.companiesCompanyIdAssetsPost(COMPANY_ID, assetData, (error, data) => {
            if (error) reject(error);
            else resolve(data);
        });
    });
    
    const assetId = asset.asset_id;
    console.log(`✅ Created marketplace asset: ${assetId}`);

    // Step 4: Set your price and start earning!
    console.log('💰 Step 4: Setting price...');
    const pricingApi = new SparteraApiSdk.AssetPriceHistoryApi();

    const priceData = {
        price_usd: 2.00 // $2.00 per analysis (credits calculated automatically)
    };

    const price = await new Promise((resolve, reject) => {
        pricingApi.companiesCompanyIdAssetsAssetIdPricesPost(COMPANY_ID, assetId, priceData, (error, data) => {
            if (error) reject(error);
            else resolve(data);
        });
    });
    
    console.log(`✅ Price set: $${price.price_usd} (≈${price.price_credits} credits)`);

    console.log('\n🎉 SUCCESS! Your data product is now live on the Spartera marketplace!');
    console.log(`📈 Asset URL: https://marketplace.spartera.com/assets/${assetId}`);
    console.log('💡 Customers can now discover and purchase your analytics!');
}

// Run the function
sellDataProduct().catch(console.error);
```

**That's it!** You're now selling data analytics. Every time someone runs your analysis, you earn money! 

### 🎯 What You Just Built
- **Data Connection**: Secure link to your BigQuery warehouse
- **Analytics Product**: Temperature analysis that buyers can purchase
- **Marketplace Listing**: Your product is discoverable by thousands of potential customers
- **Automated Pricing**: Credits are calculated automatically based on your USD price

### 💰 Revenue Model
- You set the price ($2.00 in this example)
- Customers pay in credits (auto-converted)
- You earn revenue each time someone uses your analytics
- Spartera handles billing, payments, and customer support

---

## 📚 Detailed Documentation

### Authentication

Get your API key from the [Spartera Dashboard](https://app.spartera.com/settings/api-keys):

```javascript
const SparteraApiSdk = require('spartera-api-sdk');

// Option 1: Direct configuration
const client = SparteraApiSdk.ApiClient.instance;
client.basePath = 'https://api.spartera.com';
client.defaultHeaders = {'X-API-Key': 'your-api-key-here'};

// Option 2: Environment variables (recommended)
process.env.SPARTERA_API_KEY = "your-api-key";
process.env.SPARTERA_COMPANY_ID = "your-company-id";

client.defaultHeaders = {'X-API-Key': process.env.SPARTERA_API_KEY};

// Create API instances
const companiesApi = new SparteraApiSdk.CompaniesApi();
const assetsApi = new SparteraApiSdk.AssetsApi();
```

### Environment Variables

```bash
export SPARTERA_API_KEY="your-api-key"
export SPARTERA_COMPANY_ID="your-company-id"
export SPARTERA_API_BASE_URL="https://api.spartera.com"
```

### Modern Promise Pattern

```javascript
// Utility function to promisify API calls
function promisifyApiCall(apiCall) {
    return new Promise((resolve, reject) => {
        apiCall((error, data, response) => {
            if (error) reject(error);
            else resolve(data);
        });
    });
}

// Usage with async/await
async function getCompany(companyId) {
    try {
        const company = await promisifyApiCall(
            (callback) => companiesApi.companiesCompanyIdGet(companyId, callback)
        );
        console.log('Company:', company.company_name);
        return company;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}
```

### Connection Types

Create connections to different data platforms:

```javascript
// BigQuery
const bigqueryCredentials = {
    type: "service_account",
    project_id: "your-project",
    // ... your service account JSON
};

// Snowflake
const snowflakeConnection = {
    credential_type: "USERNAME_PASSWORD",
    username: "your-username", 
    password: "your-password"
};

// API Data Source
const apiConnection = {
    credential_type: "API_KEY",
    api_endpoint: "https://api.yourcompany.com/data",
    api_key_param: "x-api-key",
    credentials: "your-api-key-value"
};
```

### Asset Types

Create different types of marketplace products:

```javascript
// SQL-based Analytics
const calculationAsset = {
    asset_type: "CALCULATION",
    sql_logic: "SELECT COUNT(*) as total_sales, AVG(amount) as avg_order FROM sales WHERE date >= CURRENT_DATE()"
};

// Visualization/Dashboard
const visualizationAsset = {
    asset_type: "VISUALIZATION",
    viz_chart_type: "BAR",
    viz_dep_var_col_name: "sales_amount",
    viz_indep_var_col_name: "month"
};
```

### Pricing Strategies

Set different pricing models:

```javascript
// Fixed price per analysis
const basicPricing = { price_usd: 1.50 };

// Premium analytics
const premiumPricing = { price_usd: 10.00 };

// Bulk discount with sales
const salePricing = {
    price_usd: 5.00,
    discount_percentage: 20.0,
    sale_start_date: "2024-01-01T00:00:00Z",
    sale_end_date: "2024-01-31T23:59:59Z"
};
```

### Marketplace Management

Manage your products after launch:

```javascript
// Update asset details
await promisifyApiCall((cb) => 
    assetsApi.companiesCompanyIdAssetsAssetIdPatch(
        COMPANY_ID, 
        assetId,
        { description: "Updated description with new features" },
        cb
    )
);

// Change pricing
const newPrice = { price_usd: 3.00 };
await promisifyApiCall((cb) =>
    pricingApi.companiesCompanyIdAssetsAssetIdPricesPost(COMPANY_ID, assetId, newPrice, cb)
);

// Remove from marketplace (but keep private)
await promisifyApiCall((cb) =>
    assetsApi.companiesCompanyIdAssetsAssetIdPatch(
        COMPANY_ID,
        assetId,
        { sell_in_marketplace: false },
        cb
    )
);

// Get sales analytics
const analytics = await promisifyApiCall((cb) =>
    companiesApi.companiesCompanyIdAnalyticsSalesGet(COMPANY_ID, cb)
);
console.log(`Total revenue: $${analytics.total_revenue}`);
```

### Error Handling

```javascript
async function handleApiCall() {
    try {
        const result = await promisifyApiCall((cb) => 
            assetsApi.companiesCompanyIdAssetsPost(COMPANY_ID, assetData, cb)
        );
        return result;
    } catch (error) {
        console.error('API Error:', error.message);
        
        // Handle specific HTTP status codes
        if (error.status) {
            switch (error.status) {
                case 400:
                    console.error('Bad Request: Check your data format');
                    break;
                case 401:
                    console.error('Unauthorized: Check your API key');
                    break;
                case 403:
                    console.error('Forbidden: Check your permissions');
                    break;
                case 404:
                    console.error('Not Found: Check your IDs');
                    break;
                default:
                    console.error(`HTTP ${error.status}: ${error.message}`);
            }
        }
        throw error;
    }
}
```

### Browser Usage

For browser applications:

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/spartera-api-sdk@latest/dist/spartera-api-sdk.min.js"></script>
</head>
<body>
    <script>
        // Configure for browser use
        const client = SparteraApiSdk.ApiClient.instance;
        client.basePath = 'https://api.spartera.com';
        client.defaultHeaders = {'X-API-Key': 'your-api-key-here'};
        
        const companiesApi = new SparteraApiSdk.CompaniesApi();
        
        // Make API calls
        companiesApi.companiesCompanyIdGet('your-company-id', (error, data) => {
            if (error) {
                console.error('Error:', error);
            } else {
                document.getElementById('company-name').textContent = data.company_name;
            }
        });
    </script>
</body>
</html>
```

### Advanced Features

```javascript
// Batch operations
const connectionIds = [];
for (const platform of ['bigquery', 'snowflake', 'redshift']) {
    const conn = await promisifyApiCall((cb) =>
        connectionsApi.companiesCompanyIdConnectionsPost(COMPANY_ID, platformConfig, cb)
    );
    connectionIds.push(conn.connection_id);
}

// Asset recommendations
const recommendations = await promisifyApiCall((cb) =>
    assetsApi.companiesCompanyIdAssetsAssetIdRecommendationsGet(
        COMPANY_ID, assetId, { limit: 10 }, cb
    )
);

// Performance analytics
const performance = await promisifyApiCall((cb) =>
    companiesApi.companiesCompanyIdAnalyticsAssetsGet(
        COMPANY_ID,
        { start_date: "2024-01-01", end_date: "2024-12-31" },
        cb
    )
);
```

## Package Manager
- **Platform**: npm
- **Install**: `npm install spartera-api-sdk`
- **Import**: `const SparteraApiSdk = require('spartera-api-sdk')`

## Publishing
1. Test: `npm pack --dry-run`
2. Publish: `npm publish`
3. Install: `npm install spartera-api-sdk`