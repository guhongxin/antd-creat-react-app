本项目是antd create-react-app 创建的工程中使用 antd 组件，并自定义 webpack 的配置以满足各类工程化需求
## 安装和初始化
* 安装
> `yarn create react-app antd-demo`
* 然后我们进入项目并启动
>```cd antd-demo```
> ```初始化：yarn```
>```启动：yarn start```

##注意
>`<img src="../images/photo.png" />`引用本地图片无效问题
解决办法
import imgURL from '../../images/photo.png'; // 通过import倒入只支持在src路径
<img src={ imgURL }/>
>