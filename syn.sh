#!/usr/bin/env sh

set -e

docker rmi `docker images -q`
echo "Get docker image"
docker pull $SOURCE_IMAGE

docker images
docker save `docker images | grep latest | grep -v grep | awk '{print $3}'` > ~/jd.tar
[ ! -e ~/scripts ] && mkdir ~/scripts && tar xvf ~/jd.tar -C ~/scripts

echo "Find layer"
for file in `ls ~/scripts`
do
  layer_size=`ls -l ~/scripts/$file 2> /dev/null | grep layer | grep -v grep | awk '{print $5}'`
  [ "$layer_size" -gt 52428800 ] && tar xvf ~/scripts/$file/layer.tar -C ~/scripts/ > /dev/null && break
done

cd ~/scripts/scripts/
SOURCE_BRANCH="master"
SOURCE_BRANCH=`git branch | awk '{print $2}'`

#REPO_URL="git@gitee.com:lxk0301/jd_scripts.git"

echo "Resetting origin to: https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY"
git remote set-url origin "https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY"
git remote --verbose

echo "Pushing changings from tmp_upstream to origin"
git push origin "refs/remotes/origin/${SOURCE_BRANCH}:refs/heads/${DESTINATION_BRANCH}" --force

git remote --verbose
