# template

## 安装 [@vue/cli](https://cli.vuejs.org/zh/guide)

npm install -g @vue/cli

#### or

yarn global add @vue/cli（推荐）

## 远程 gitlab

        vue create --preset gitlab:http://git.xiaoyangedu.com:frontend/templetefrond --clone <my-project>

## 本地测试

        vue create --preset ./xy_project <my-project>

### 目录结构

```
├── README.md
├── generator.js # generator（可选）
├── preset.js 前置默认
├── template(模版文件)
├── prompts.js # prompt 文件（可选 主要是客户端交互）
└── default(. 文件)
```
