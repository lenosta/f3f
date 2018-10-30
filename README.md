# Travis CI自动化部署VUE项目到GitHub
## 一、什么是持续集成
Travis CI 提供的是持续集成服务（Continuous Integration，简称 CI）。它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到服务器。

持续集成指的是只要代码有变更，就自动运行构建和测试，反馈运行结果。确保符合预期以后，再将新代码"集成"到主干。

持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码。

## 二、使用准备
- 拥有 GitHub 帐号
- 该帐号下面有一个项目
- 该项目里面有可运行的代码
- 该项目还包含构建或测试脚本
- 已安装yarn

## 三、操作步骤

1、登陆GitHub，找到项目所在仓库，创建分支(例如gh-pages分支)并清空内容。

2、打开[travis官网](https://travis-ci.org/)，点击右上角利用github账号登陆，开启指定仓库并进行相关设置(一般默认)，Environment Variables需要进行设置，相关设置如下：
```
GH_REF: 存放build文件的github代码仓库的SSH(git@github.com:***/**.git 改为 github.com/***/**.git)
GH_TOKEN: github Access Count
U_NAME: github 用户名
U_EMAIL:github邮箱

```
*github Access Count设置步骤：Github>settings>Developer settings>Personal access tokens> Generate new token > 设置Token description>勾选repo>Generate token>copy token*

![travis settings 相关设置](https://github.com/UnicomBigData/test/blob/master/static/readme/settravis.png)

3、在vue项目根目录下创建.travis.yml
该文件的作用就是在代码提交的时候travis-ci会根据该配置文件执行配置的任务，其基本配置如下：
```
# 操作系统
os: osx

# 使用语言
language: node_js

# 使用node版本
node_js:
  - "10.10.0"

# 指定缓存模块，可选。缓存可加快编译速度。
cache:
  apt: true
  yarn: true
  directories:
    - node_modules


# Start: Build 生命周期

# install 阶段之前执行
before_install:
    # 由于使用了yarn，所以需要下载，如不用yarn可删除这两行
  - curl -o- -L https://yarnpkg.com/install.sh | bash
  - export PATH=$HOME/.yarn/bin:$PATH
  
# 安装依赖，设置为true跳过安装
install:
  - export DISPLAY=':99.0'
  - Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &
  - yarn
#  - npm install

# script 阶段之前执行
before_script:
  - git config user.name ${U_NAME}
  - git config user.email ${U_EMAIL}
  - git clone --branch gh-pages https://${GH_REF} dist

# 指定构建或测试脚本，设置为true,表示不执行任何脚本，状态直接设为成功
script: true

# script 阶段成功时执行
after_success:
  - npm run build
  - cd dist
  - git add -A
  - git commit -a -m "Update tools"
# build文件和源码在同一仓库
#  - git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" gh-pages:gh-pages 
# 针对本项目，build文件和源码不在同一仓库    
  - git push --force --quiet "https://${GH_TOKEN}@${GH_REF1}" gh-pages:master 
  

# End: Build 生命周期


# 指定分支，只有指定的分支提交时才会运行脚本
branches:
  only:
    - master
    
# 设置环境变量，或者在travis-ci.org的'Settings'设置
env:
  global:
#    - GH_REF: github.com/UnicomBigData/test.git        #存放build后文件的仓库地址
#    - GH_TOKEN: ***********                            #Github的Access Token


```
4、设置GitHub Pages source 为 gh-pages branch。

5、自动构建项目
修改完成，并推送到github后，就可以在travis-ci.org中看到项目开始构建了(以后每次推送代码到仓库后都将会自动构建项目)


![构建成功](https://github.com/UnicomBigData/test/blob/master/static/readme/result.png)


##参考地址

1、travis官网地址： https://travis-ci.org/

2、https://www.jianshu.com/p/7cd484bd6dc1

3、https://www.cnblogs.com/morang/p/7228488.html

4、https://docs.travis-ci.com/user/getting-started/
