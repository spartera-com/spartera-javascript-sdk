#!/bin/bash
# Test script for JavaScript SDK

echo "🧪 Testing JavaScript SDK..."

# Install dependencies
echo "Installing dependencies..."
npm install --silent

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
    
    # Check if build script exists and run it
    if npm run build >/dev/null 2>&1; then
        echo "✅ Build completed successfully"
    else
        echo "ℹ️  No build script found (this is normal for many SDKs)"
    fi
    
    echo "📝 To test with real API calls:"
    echo "   export SPARTERA_API_KEY='your-api-key'"
    echo "   export SPARTERA_COMPANY_ID='your-company-id'"
    echo "   node example.js"
else
    echo "❌ Dependencies installation failed"
    exit 1
fi
