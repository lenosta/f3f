const {Builder, By, Key, until, Button} = require("selenium-webdriver");
const expect = require('chai').expect;
let broswer = new Builder().forBrowser('chrome').build();

// broswer.manage().setTimeouts({implicit:0,pageLoad:300000,script:300000});

// 获取百度搜索按钮的 文本
describe('百度测试11', () => {
    it('首页title加载测试', (done) => {
        broswer.get('http://www.baidu.com').then(() => {
            broswer.getTitle().then(title => {
                expect(title).to.equal("百度一下，你就知道");
                done();
            });
        })
    });
    it('模拟输入提交', (done) => {
        broswer.get('http://www.baidu.com').then(async () => {
            //等待元素：
            let inputEl = await broswer.wait(until.elementLocated(By.id('kw')), 10000);
            await inputEl.sendKeys("selenium-webdriver");
            await inputEl.sendKeys(Key.ENTER);
            await inputEl.submit();
            done();
        }).catch(()=>{
            done();
        });

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

