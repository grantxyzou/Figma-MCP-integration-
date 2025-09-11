#!/bin/bash

# Deployment script for Fluent 2 Component Library
# This script helps deploy the app to various platforms

echo "🚀 Fluent 2 Component Library - Deployment Helper"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in project root directory"
    echo "Please run this script from the project root"
    exit 1
fi

echo "📦 Building the application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "🌐 Deployment Options:"
echo "1. GitHub Pages (automatic with workflow)"
echo "2. Vercel (run: vercel --prod)"
echo "3. Netlify (run: netlify deploy --prod --dir=dist)"
echo "4. Local preview (run: npm run preview)"
echo ""

# Ask user what they want to do
read -p "Would you like to preview locally? (y/n): " preview

if [ "$preview" = "y" ] || [ "$preview" = "Y" ]; then
    echo "🔍 Starting local preview..."
    npm run preview
else
    echo "📋 Deployment Instructions:"
    echo ""
    echo "For Vercel:"
    echo "  1. Install: npm i -g vercel"
    echo "  2. Deploy: vercel --prod"
    echo ""
    echo "For Netlify:"
    echo "  1. Install: npm install -g netlify-cli"
    echo "  2. Deploy: netlify deploy --prod --dir=dist"
    echo ""
    echo "For GitHub Pages:"
    echo "  1. Push changes to main branch"
    echo "  2. Enable GitHub Pages in repo settings"
    echo "  3. Workflow will auto-deploy"
    echo ""
    echo "Your app is built and ready in the 'dist' folder!"
fi
