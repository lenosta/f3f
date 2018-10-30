const {Builder, By, Key, until, Button} = require("selenium-webdriver");
const expect = require('chai').expect;
const fs = require("fs");
const addContext = require('mochawesome/addContext');
let broswer = new Builder().forBrowser('chrome').build();
const imgDir = './test/report/selenium-webdriver/screenshot/';

// broswer.manage().setTimeouts({implicit:0,pageLoad:300000,script:300000});
// 获取百度搜索按钮的 文本
describe('百度测试2', () => {
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

