#!/bin/bash
echo "=======开始======="
WEB_PATH='/root/project/interview-blog'
DOCKER_COMPOSE_PATH='/root/tool/docker/nginx'

echo "开始执行shell"
cd $WEB_PATH
echo "pulling source code..."
git pull &&
echo "changing permissions..."
#chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
echo " git pull 完成. 开始 build"
npm run docs:build &&
echo "build 完成"
cd $DOCKER_COMPOSE_PATH
echo "开始重启docker-compose"
docker-compose down &&
docker-compose up -d
echo "docker-compose 重启完毕"