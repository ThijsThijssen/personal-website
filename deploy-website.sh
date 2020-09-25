# build for production
echo "------------------------------"
echo "Local: Building for production..."
echo "------------------------------"
ng build --prod

# add production files
echo "------------------------------"
echo "Local: Adding production files to local git repository..."
echo "------------------------------"
git add .

# commit production files
echo "------------------------------"
echo "Local: Committing production files..."
echo "------------------------------"
currentDate=$(date)
git commit -m "Deployed website on: $currentDate"

# push production files to remote repository
echo "------------------------------"
echo "Local: Pushing production files to remote repository..."
echo "------------------------------"
git push

# update website contents
echo "------------------------------"
echo "Local: Updating website contents..."
echo "------------------------------"
ssh -t thijsthijssen.nl@ssh.strato.de "./update-website.sh"