import ZSEmpty from './src/index.vue';

// 组件的install方法用于按需引入
// @ts-ignore
ZSEmpty.install = (Vue) => {
    Vue.component(ZSEmpty.name, ZSEmpty)
};

export default ZSEmpty;
