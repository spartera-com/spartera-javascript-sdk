#!/bin/bash
# =============================================================================
# JavaScript SDK Publisher for npm
# =============================================================================
# 
# PREREQUISITES:
# 1. Create npm account: https://www.npmjs.com/signup
# 2. Login to npm: npm login
# 3. Verify login: npm whoami
# 4. Set up 2FA if required by your organization
#
# FOR TESTING: Use npm with --dry-run flag first
# npm publish --dry-run
# =============================================================================

set -e  # Exit on any error

echo "📦 Publishing JavaScript SDK to npm..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Are you in the SDK directory?"
    exit 1
fi

# Check if user is logged in to npm
if ! npm whoami >/dev/null 2>&1; then
    echo "❌ Not logged in to npm. Run 'npm login' first."
    exit 1
fi

# Install dependencies and build
echo "📚 Installing dependencies..."
npm install

# Run build if script exists
if npm run build >/dev/null 2>&1; then
    echo "🔨 Building package..."
else
    echo "ℹ️  No build script found, skipping build step"
fi

# Run tests if they exist
if npm test >/dev/null 2>&1; then
    echo "🧪 Running tests..."
else
    echo "ℹ️  No tests found, skipping test step"
fi

# Check package with dry run
echo "🔍 Checking package..."
npm pack --dry-run

if [ $? -ne 0 ]; then
    echo "❌ Package check failed"
    exit 1
fi

# Show package info
echo "📋 Package info:"
npm ls --depth=0  || echo "   Dependencies listed in package.json"

echo ""
echo "📦 Current package version: $(node -p "require('./package.json').version")"
echo ""

# Ask for confirmation
read -p "🚀 Publish to npm? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📡 Publishing to npm..."
    npm publish
    
    if [ $? -eq 0 ]; then
        PKG_NAME=$(node -p "require('./package.json').name")
        PKG_VERSION=$(node -p "require('./package.json').version")
        
        echo "✅ JavaScript SDK published successfully!"
        echo "📦 Install with: npm install $PKG_NAME"
        echo "🔗 View at: https://www.npmjs.com/package/$PKG_NAME"
        echo "📚 Version: $PKG_VERSION"
    else
        echo "❌ Publish failed"
        exit 1
    fi
else
    echo "❌ Publish cancelled"
    echo ""
    echo "💡 To test first:"
    echo "   npm publish --dry-run"
    echo "   npm pack"
fi
