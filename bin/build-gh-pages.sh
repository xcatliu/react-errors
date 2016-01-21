#!/bin/bash
set -e

# clone react-errors repo
rm -rf react-errors
git clone git@github.com:xcatliu/react-errors.git react-errors

cd react-errors
git checkout gh-pages

cp -r ../examples/* ./
git add :
git commit -m 'Update gh-pages'
git push origin gh-pages

cd ..
rm -rf react-errors
