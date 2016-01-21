#!/bin/bash
set -e

git checkout gh-pages
git pull origin gh-pages

git checkout master examples

# http://askubuntu.com/questions/269775/mv-directory-not-empty
rsync -a examples/ ./
rm -rf examples

git add :
git commit -m 'Update gh-pages'
git push origin gh-pages

git checkout master
