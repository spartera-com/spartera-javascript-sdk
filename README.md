# JavaScript/Node.js SDK Documentation

## Overview
The JavaScript SDK for Spartera API provides a convenient way to interact with the Spartera platform from Node.js applications and browsers.

**Install:** `npm install spartera-api-sdk`

## Requirements
- Node.js 14.0 or higher
- npm package manager

## Quick Start

```javascript
const SparteraApiSdk = require('spartera-api-sdk');

// Configure client
const client = SparteraApiSdk.ApiClient.instance;
client.basePath = 'https://api.spartera.com';
client.defaultHeaders = {'X-API-Key': 'your-api-key-here'};

// Create API instance
const companiesApi = new SparteraApiSdk.CompaniesApi();

// Make API call (callback style)
companiesApi.companiesCompanyIdGet('your-company-id', (error, data, response) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Company:', data.company_name);
    }
});
```

## Environment Variables

```bash
export SPARTERA_API_KEY="your-api-key"
export SPARTERA_COMPANY_ID="your-company-id"
export SPARTERA_API_BASE_URL="https://api.spartera.com"
```

## Promise Pattern

```javascript
// Modern async/await approach
async function getCompany() {
    try {
        const company = await new Promise((resolve, reject) => {
            companiesApi.companiesCompanyIdGet(companyId, (error, data) => {
                if (error) reject(error);
                else resolve(data);
            });
        });
        console.log('Company:', company.company_name);
    } catch (error) {
        console.error('API Error:', error);
    }
}
```

## Package Manager
- **Platform**: npm
- **Install**: `npm install spartera-api-sdk`
- **Import**: `const SparteraApiSdk = require('spartera-api-sdk')`

## Publishing
1. Test: `npm pack --dry-run`
2. Publish: `npm publish`
3. Install: `npm install spartera-api-sdk`
