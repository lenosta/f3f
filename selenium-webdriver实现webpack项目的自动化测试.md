# selenium-webdriver实现webpack项目的自动化测试
## 环境要求
支持的node版本6.9+(包括6.9)
## 安装selenium-webdriver
在项目根目录下运行命令：npm install selenium-webdriver --save-dev
## 安装其它相关npm包
本例子中编写的测试用例是使用的mocha与chai,所以需要安装相关包:npm install mocha chai --save-dev。如果要直接运行mocha命令的话需要全局安装mocha:npm install mocha -g。本例中还用到了文件处理的包fs,用于保截屏图片，mochawesome包用于生成可视化的测试报告。

## 安装chromedriver
下载chromedriver,并将解压后的exe文件放到chrome的安装目录下，然后将目录添加到环境变量的path中。如图1、图2所示：
![chromedriver的安装][1]
图1

![chromedriver环境变量配置][2]
图2

chromedriver的下载地址https://sites.google.com/a/chromium.org/chromedriver/downloads或者 http://npm.taobao.org/mirrors/chromedriver/70.0.3538.16/
## 创建测试相关目录
接下来，我们在项目的test目录下创建图3所示的文件目录，其中selenium-webdriver目录下存放selenium-webdriver的自动化测试脚本文件，report/selenium-webdriver目录下用于存放测试报告，report/selenium-webdriver/screenshot目录用于存放测试中的截屏图片。
![测试目录][3]
图3
## 编写测试脚本文件
本例中的测试用例是使用mocha与chai来编写的。示例代码如下所示：
```
const {Builder, By, Key, until, Button} = require("selenium-webdriver");
const expect = require('chai').expect;
const fs = require("fs");
const addContext = require('mochawesome/addContext');
let broswer = new Builder().forBrowser('chrome').build();
const imgDir = './test/report/selenium-webdriver/screenshot/';

// broswer.manage().setTimeouts({implicit:0,pageLoad:300000,script:300000});
// 获取百度搜索按钮的 文本
describe('百度测试', () => {
    it('模拟输入提交', (done) => {
        broswer.get('http://www.baidu.com').then(async () => {
            //等待元素：
            let inputEl = await broswer.wait(until.elementLocated(By.id('kw')), 10000);
            await inputEl.sendKeys("selenium-webdriver自动化测试");
            await inputEl.sendKeys(Key.ENTER);
            await inputEl.submit();
            done();
        }).catch(err => {
            done();
        });

    });
    it('测试链接图片，不能用箭头函数', function (done) {
        const that = this;
        broswer.get('http://www.baidu.com').then(async function () {
            let btn = broswer.wait(until.elementLocated(By.id('su')), 10000);
            await btn.getAttribute("value").then(function (val) {
                expect(val).to.equal("百度一下按钮");
                done();
            }).catch(function (err) {
                let fileName = 'demo测试截屏—按钮文案错误.png';
                broswer.takeScreenshot().then(function (img, err) {
                    fs.writeFile(imgDir + fileName, img, 'base64', function (err) {
                    });
                });
                addContext(that, {
                    title: '错误图片',
                    value: './screenshot/' + fileName
                });
                done(err);
            });
        })
    });
    before(() => {
        // 在本describe区块的所有测试用例之前执行
    });

    after(() => {
        // 在本describe区块的所有测试用例之后执行
        setTimeout(() => {
            //测试执行完成后关闭浏览器
            broswer.quit();
        }, 5000)
    });

    beforeEach(() => {
        // 在本describe区块的每个测试用例之前执行
    });

    afterEach(() => {
        // 在本describe区块的每个测试用例之后执行
    });
});
```
selenium-webdriver js的api可参考https://seleniumhq.github.io/selenium/docs/api/javascript/index.html。 值得注意的是，如果想在报告中链接相应的图片，可使用addContext方法，详情参考https://www.npmjs.com/package/mochawesome，该方法不支持剪头函数，所以如果想在测试报告中链接相当图片，请使用es5而非es6编写测试脚本。
## 设置npm scripts
在package.json文件中的scripts配置中添加如下配置：
"test": "./node_modules/.bin/mocha test/selenium-webdriver/ --recursive -t 30000  --reporter mochawesome --reporter-options reportDir=test/report/selenium-webdriver" 
然后直接通过npm run test即可开启selenium-webdriver的自动化测试。
注意：Mocha默认每个测试用例最多执行2000毫秒，如果到时没有得到结果，就报错。对于涉及异步操作的测试用例，这个时间往往是不够的，需要用-t或--timeout参数指定超时门槛，这里我们设定的是30000ms，可根据实际情况做调整。
## 测试报告
测试用例执行完以后，在test/report/selenium-webdriver目录下会生成图4所示的文件夹与文件：
![测试报告输出目录][4]
图4

在浏览器中打开mochawesome.html可以看到测试的结果报告，如图5所示：
![测试报告][5]
图5

到此，selenium-webdriver的一个简单测试完成了。

参考文档：

1.https://blog.csdn.net/wang1472jian1110/article/details/79085913

2.https://www.npmjs.com/package/selenium-webdriver

3.https://seleniumhq.github.io/selenium/docs/api/javascript/index.html

4.https://www.jianshu.com/p/513e7fd3657c

5.https://www.npmjs.com/package/mochawesome



  [1]: https://raw.githubusercontent.com/UnicomBigData/test/master/static/readme/chromedriver_install.png
  [2]: https://raw.githubusercontent.com/UnicomBigData/test/master/static/readme/chromedriver_env_conf.png
  [3]: https://raw.githubusercontent.com/UnicomBigData/test/master/static/readme/test_dir.png
  [4]: https://raw.githubusercontent.com/UnicomBigData/test/master/static/readme/report_dir.png
  [5]: https://raw.githubusercontent.com/UnicomBigData/test/master/static/readme/report.png