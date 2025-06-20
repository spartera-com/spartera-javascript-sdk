#!/bin/bash
# Test script for JavaScript SDK

echo "🧪 Testing JavaScript SDK..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 14+ first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2)
echo "📋 Node.js version: $NODE_VERSION"

# Install dependencies
echo "📚 Installing dependencies..."
npm install --silent

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
    
    # Check if syntax is valid
    echo "🔍 Checking syntax..."
    node -c example.js
    
    if [ $? -eq 0 ]; then
        echo "✅ Syntax check passed"
        
        echo "📝 To test with real API calls:"
        echo "   export SPARTERA_API_KEY='your-api-key'"
        echo "   export SPARTERA_COMPANY_ID='your-company-id'"
        echo "   node example.js"
    else
        echo "❌ Syntax check failed"
        exit 1
    fi
else
    echo "❌ Dependencies installation failed"
    exit 1
fi
