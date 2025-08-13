#!/bin/bash

# Basketball Data App - GitHub Repository Setup Script

echo "🏀 Basketball Data App - GitHub Repository Setup"
echo "==============================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git and try again."
    exit 1
fi

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized."
else
    echo "✅ Git repository already initialized."
fi

# Create .gitignore file
echo "📝 Creating .gitignore file..."
cat > .gitignore << EOL
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOL
echo "✅ .gitignore file created."

# Add all files to git
echo "📂 Adding files to Git..."
git add .
echo "✅ Files added to Git."

# Commit files
echo "💾 Creating initial commit..."
git commit -m "Initial commit - Basketball Data App"
echo "✅ Initial commit created."

# Prompt for GitHub repository URL
echo ""
echo "🌐 To connect to GitHub, create a new repository on GitHub first."
echo "   Then, enter the repository URL below (e.g., https://github.com/username/basketball-data-app.git):"
read -p "Repository URL: " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ No repository URL provided. You can add a remote later with:"
    echo "   git remote add origin YOUR_REPOSITORY_URL"
    echo "   git push -u origin main"
else
    # Add remote and push
    echo "🔗 Adding remote repository..."
    git remote add origin $repo_url
    echo "✅ Remote repository added."
    
    echo "🚀 Pushing code to GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo "✅ Code pushed to GitHub successfully!"
    else
        echo "❌ Failed to push to GitHub. You may need to:"
        echo "   1. Check your repository URL"
        echo "   2. Ensure you have the right permissions"
        echo "   3. Try pushing manually with: git push -u origin main"
    fi
fi

echo ""
echo "🎉 Setup complete! Next steps:"
echo "   1. Set up Vercel deployment by connecting your GitHub repository"
echo "   2. Configure environment variables if needed"
echo "   3. Deploy your application"
echo ""
echo "Happy coding! 🏀"