React-Electron
云同步桌面端
===================

## 1 项目描述
    1 已经做了接口统一
    3 修改登录功---未涉及

## 2 项目运行
    开发环境 node v12.16.2
    npm install   (模块依赖安装)
    npm start     (项目启动)
    npm run build (项目打包，打包地址为dist目录。打包注意事项：注意打包地址的变化、打包环境、打包压缩)
    npm run dev (桌面端---未能成功启动)
    npm run  dev-ele (桌面端)

## 3 业务介绍
+ dist  --- 项目打包后存放地址
+ login --- 后台登录页面--有设计未开放
+ src 
    +   ---  app 主目录结构
        +       --- components                            公共部分(包括样式、头部、底部、二次封装组件)
        +       --- reducers                              数据存储
        +       --- routers                               路由部分
        +       --- scenes                                应用场景
            +       --- home                              首页  
            +  
        +   --- services                              接口服务部分（包括url配置）
            +       --- config.js                         打包地址文件 
            +       --- system.js                         环境地址文件
            +       --- urls.js                           接口文件
            +       --- ajax.js                           接口请求文件
        +   --- main                                  入口文件
        +   --- store
    +   ---  index.html 模板页面
    
   
  ## 4.部署地址 
