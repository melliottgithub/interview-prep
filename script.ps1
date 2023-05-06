# Prompt for branch name
$branch = Read-Host "Enter the branch name to push to"

# Check if the branch exists
if ((git branch --list $branch) -eq $null) {
  Write-Host "Error: Branch $branch does not exist."
  exit 1
}

# Check if there are any changes to commit
if ((git status -s).Length -eq 0) {
  Write-Host "Error: There are no changes to commit."
  exit 1
}

# Commit changes with a message
$message = Read-Host "Enter commit message"
git add .
git commit -m $message

# Push changes to the branch
$confirm = Read-Host "Enter 'yes' to confirm push to $branch"
if ($confirm -eq "yes") {
  git push origin $branch
} else {
  Write-Host "Push canceled."
  exit 1
}

Write-Host "Pushed changes to $branch."
