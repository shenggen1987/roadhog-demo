# dva-example-user-dashboard

详见[《12 步 30 分钟，完成用户管理的 CURD 应用 (react+dva+antd)》](https://github.com/sorrycc/blog/issues/18)。

---

<p align="center">
  <img src="https://zos.alipayobjects.com/rmsportal/bmkNCEoluwGaeGjYjInf.png" />
</p>

## Getting Started
Install dependencies.

```bash
$ npm install
```

Start server.

```bash
$ npm start
```

If success, app will be open in your default browser automatically.


"proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },

=======

  sudo docker build --tag="hub.qjdchina.com/hanhao/dva-node:v0.0.1" ./
  sudo docker push hub.qjdchina.com/hanhao/dva-node:v0.0.1

  ===========

  sudo docker run -d -p 5300:80 hub.qjdchina.com/hanhao/dva-node:v0.0.1


 ========
 访问地址  http://10.1.31.35:5300/orders