import Vue from "vue";
import Index from '../../../src/pages/index';
// 测试脚本里面应该包括一个或多个describe块，称为测试套件（test suite）
describe('Index.vue', () => {
    // 每个describe块应该包括一个或多个it块，称为测试用例（test case）
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Index) // 获得Index组件实例
        const vm = new Constructor().$mount() // 将组件挂在到DOM上
        //断言：DOM中class为hello的元素中的h1元素的文本内容为Welcome to Your Vue.js App
        expect(vm.$el.querySelector('#tech-subside').querySelector('h1').textContent)
            .to.equal('技术沉淀')

    });
    it('设置index.vue的testMg', () => {
        const vm = new Vue(Index).$mount();
        let msg = "自动化测试karma+mocha";
        vm.testDemo(msg);
        expect(vm.testMsg).to.equal(msg);
    });
    it("测试方法initTechCategories", () => {
        const vm = new Vue(Index).$mount();
        vm.initTechCategories();
        expect(vm.techCategories[0].standards.length).to.equal(2);
    });
    // it('测试initTeam方法', () => {
    //     const vm = new Vue(Index).$mount();
    //     vm.initTeam();
    //     expect(vm.teamAllArr.length).to.equal(61);
    // });
})
