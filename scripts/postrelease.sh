#!/bin/sh

git checkout master && \
  git checkout -b chore/update-package-lock && \
  npm install && \
  git add package-lock.json && \
  git commit -m 'chore(package-lock): Add new package version' && \
  git checkout master && \
  git merge --ff chore/update-package-lock && \
  git branch -D chore/update-package-lock && \
  git fetch -p
