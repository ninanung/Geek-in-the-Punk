echo '----------------------'
echo 'Running Validate Nginx'
echo '----------------------'
result=$(service nginx status)
echo 'Check Nginx'
echo $result