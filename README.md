# unify-external-plugin-platform

# 目录说明
|-- unify-external-plugin-platform
    |-- node_modules 依赖包
    |-- packages 插件组件目录（插件组件大驼峰命名）
    |    |-- ZSEmpty 空组件（demo）
    |    |    |--src 插件内容
    |    |    |-- index.ts 单个插件导出文件，以便单个引入
    |    |-- ......
    |    |-- index.js 整体导出
    |-- public
    |-- src 业务代码



# 使用
1. npm i unify-external-plugin-platform
2. 在main.js中
    import unifyExternalPluginPlatform from 'unify-external-plugin-platform';
    Vue.use(unifyExternalPluginPlatform);
3. 业务组件中：<z-s-empty empty-tip="暂无数据组件"></z-s-empty>


