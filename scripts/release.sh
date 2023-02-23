#! /bin/bash

git tag -a $1 -m $2 && 
npx esno ./scripts/update-version `git tag -l | tail -n 1`

