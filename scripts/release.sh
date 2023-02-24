#! /bin/bash

#pnpm release <version> <notes>

CURRENT_BRANCH=`git rev-parse --abbrev-ref HEAD`

if [ $CURRENT_BRANCH = "main" ];then
  git add . &&
  git commit -m "$2"
  git push origin main &&
  git tag -a $1 -m "$2" && 
  git push origin $1 && 
  npx esno ./scripts/update-version `git tag -l | tail -n 1`
else
  echo -e "branch of \033[1;31m$CURRENT_BRANCH\033[0m can not release version!"
fi


