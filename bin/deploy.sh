#!/usr/bin/env sh

set -e
set -o allexport
source .env.local
set +o allexport

npm run build

cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:${GH_ACCOUNT}/${GH_ACCOUNT}.github.io.git main

cd -