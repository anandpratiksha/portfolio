#! /bin/sh

git pull https://github.com/anandpratiksha/portfolio.git
git status 
git add .
git status 
git remote add origin https://github.com/anandpratiksha/portfolio.git
git commit -m "updates"
git push -u origin master 