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

# Install dependencies
echo "📚 Installing dependencies..."
npm install

# Check package with dry run
echo "🔍 Checking package..."
npm publish --dry-run

if [ $? -ne 0 ]; then
    echo "❌ Package check failed"
    exit 1
fi

# Show package info
echo "📋 Package info:"
PKG_NAME=$(node -p "require('./package.json').name")
PKG_VERSION=$(node -p "require('./package.json').version")
echo "   Name: $PKG_NAME"
echo "   Version: $PKG_VERSION"

echo ""

# Ask for confirmation
read -p "🚀 Publish to npm? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📡 Publishing to npm..."
    npm publish
    
    if [ $? -eq 0 ]; then
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
