#!/bin/bash
set -e

rm -rf react-errors
git clone git@github.com:xcatliu/react-errors.git react-errors
cd react-errors

git checkout gh-pages
git checkout master examples

# http://askubuntu.com/questions/269775/mv-directory-not-empty
rsync -a examples/ ./
rm -rf examples

git add :
git commit -m 'Update gh-pages'
git push origin gh-pages

cd ..
rm -rf react-errors
