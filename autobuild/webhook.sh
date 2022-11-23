#!/bin/bash
WEB_PATH='/root/project/interview-blog'

echo "开始执行shell"
cd $WEB_PATH
echo "pulling source code..."
git pull &&
echo "changing permissions..."
#chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
echo " git pull 完成. 开始 build"
npm run build &&
echo "build 完成"
echo "开始重启docker-compose"
docker-compose down &&
docker-compose up -d
echo "docker-compose 重启完毕"