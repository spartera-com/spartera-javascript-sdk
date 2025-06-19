/**
 * Example usage of Spartera API JavaScript SDK
 * 
 * This example demonstrates how to:
 * 1. Configure authentication with X-API-Key
 * 2. Make basic API calls to get company and asset information
 * 3. Handle errors properly
 * 4. Use both callback and promise patterns
 */

const SparteraApiSdk = require('spartera-api-sdk');

// Configure the client
const defaultClient = SparteraApiSdk.ApiClient.instance;
defaultClient.basePath = process.env.SPARTERA_API_BASE_URL || 'https://api.spartera.com';

// IMPORTANT: Spartera uses X-API-Key header authentication
const apiKey = process.env.SPARTERA_API_KEY || 'your-api-key-here';
defaultClient.defaultHeaders = {
    'X-API-Key': apiKey
};

// Create API instances
const companiesApi = new SparteraApiSdk.CompaniesApi();
const assetsApi = new SparteraApiSdk.AssetsApi();
const usersApi = new SparteraApiSdk.UsersApi();

// Get company ID from environment or use placeholder
const companyId = process.env.SPARTERA_COMPANY_ID || 'your-company-id';

// Example using callback pattern
function demonstrateCallbackPattern() {
    console.log('🔄 Testing callback pattern...');
    
    companiesApi.companiesCompanyIdGet(companyId, (error, data, response) => {
        if (error) {
            console.error('❌ Company API Error:', error);
            return;
        }
        
        console.log(`✅ Company: ${data.company_name || 'N/A'}`);
        
        // Get assets after successful company call
        assetsApi.companiesCompanyIdAssetsGet(companyId, (error, assetsData, response) => {
            if (error) {
                console.error('❌ Assets API Error:', error);
                return;
            }
            
            const assets = assetsData.data || [];
            console.log(`✅ Found ${assets.length} assets`);
            
            // Show first few assets
            assets.slice(0, 3).forEach((asset, index) => {
                console.log(`   - ${asset.name || `Asset ${index + 1}`} (${asset.asset_type || 'Unknown'})`);
            });
        });
    });
}

// Example using Promise pattern (modern approach)
async function demonstratePromisePattern() {
    console.log('\n🔄 Testing promise pattern...');
    
    try {
        // Get company details
        console.log('🏢 Getting company details...');
        const company = await new Promise((resolve, reject) => {
            companiesApi.companiesCompanyIdGet(companyId, (error, data, response) => {
                if (error) reject(error);
                else resolve(data);
            });
        });
        console.log(`   Company: ${company.company_name || 'N/A'}`);
        
        // Get assets
        console.log('\n📊 Getting assets...');
        const assetsResponse = await new Promise((resolve, reject) => {
            assetsApi.companiesCompanyIdAssetsGet(companyId, (error, data, response) => {
                if (error) reject(error);
                else resolve(data);
            });
        });
        
        const assets = assetsResponse.data || [];
        console.log(`   Found ${assets.length} assets`);
        
        // Show first few assets
        assets.slice(0, 3).forEach((asset, index) => {
            console.log(`   - ${asset.name || `Asset ${index + 1}`} (${asset.asset_type || 'Unknown'})`);
        });
        
        // Get specific asset details if available
        if (assets.length > 0) {
            console.log('\n🔍 Getting details for first asset...');
            const firstAsset = assets[0];
            const assetDetail = await new Promise((resolve, reject) => {
                assetsApi.companiesCompanyIdAssetsAssetIdGet(companyId, firstAsset.asset_id, (error, data, response) => {
                    if (error) reject(error);
                    else resolve(data);
                });
            });
            console.log(`   Asset: ${assetDetail.name || 'N/A'}`);
            console.log(`   Description: ${assetDetail.description || 'N/A'}`);
        }
        
        // Get users
        console.log('\n👥 Getting users...');
        const usersResponse = await new Promise((resolve, reject) => {
            usersApi.companiesCompanyIdUsersGet(companyId, (error, data, response) => {
                if (error) reject(error);
                else resolve(data);
            });
        });
        
        const users = usersResponse.data || [];
        console.log(`   Found ${users.length} users`);
        
        console.log('\n✅ SDK test completed successfully!');
        
    } catch (error) {
        console.error('\n❌ API Error:', error);
        
        if (error.status) {
            console.log(`   Status: ${error.status}`);
            console.log(`   Message: ${error.message || error.response?.text || 'Unknown error'}`);
        }
        
        console.log('\n🔧 Troubleshooting:');
        if (error.status === 401) {
            console.log('   - Check your API key');
            console.log('   - Ensure API key is active');
        } else if (error.status === 403) {
            console.log('   - Check your permissions');
            console.log('   - Verify company access');
        } else if (error.status === 404) {
            console.log('   - Check your company ID');
            console.log('   - Verify the resource exists');
        } else {
            console.log('   - Check API endpoint URL');
            console.log('   - Verify request parameters');
            console.log('   - Check your internet connection');
        }
    }
}

// Main execution
async function main() {
    console.log('🚀 Spartera API JavaScript SDK Example');
    console.log('=' .repeat(45));
    
    // Check environment variables
    if (!process.env.SPARTERA_API_KEY || process.env.SPARTERA_API_KEY === 'your-api-key-here') {
        console.log('⚠️  Set SPARTERA_API_KEY environment variable with your actual API key');
    }
    if (!process.env.SPARTERA_COMPANY_ID || process.env.SPARTERA_COMPANY_ID === 'your-company-id') {
        console.log('⚠️  Set SPARTERA_COMPANY_ID environment variable with your company ID');
    }
    
    console.log('');
    
    // Run both patterns
    demonstrateCallbackPattern();
    
    // Wait a bit then run promise pattern
    setTimeout(async () => {
        await demonstratePromisePattern();
    }, 2000);
}

// Handle uncaught errors
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Run the demo
main().catch(console.error);
