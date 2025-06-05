#!/bin/bash
# Wedding Website Deployment Script

echo "🎉 Deploying Wedding Website..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "Adding files to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy wedding website - $(date)"

# Push to GitHub (you need to set up remote first)
echo "Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo ""
echo "Your website will be available at:"
echo "https://yourusername.github.io/your-repository-name"
echo ""
echo "Note: It may take a few minutes for GitHub Pages to update."
echo ""
echo "Next steps:"
echo "1. Wait 5-10 minutes for deployment"
echo "2. Test your website URL"
echo "3. Generate QR codes for wedding cards"
echo "4. Share with your guests!"
