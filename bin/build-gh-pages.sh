#!/bin/bash
set -e

# clone react-errors repo
rm -rf react-errors
git clone git@github.com:xcatliu/react-errors.git react-errors

cd react-errors
git checkout gh-pages

mv ../examples/* ./
git add :
git commit -m 'Update gh-pages'
git push origin gh-pages
