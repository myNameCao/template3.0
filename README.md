# template 3.0

## 安装 [@vue/cli](https://cli.vuejs.org/zh/guide)

npm install -g @vue/cli

#### or

yarn global add @vue/cli（推荐）

## 远程 gitlab

       vue create --preset myNameCao/template3.0  run

## 本地测试

        vue create --preset ./xy_project <my-project>


### 目录结构

```
├── README.md
├── generator.js # generator（可选）
├── preset.js 前置默认
├── default(模版文件)
├── prompts.js # prompt 文件（可选 主要是客户端交互）
└── default(. 文件)
```
