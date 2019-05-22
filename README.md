本项目是antd create-react-app 创建的工程中使用 antd 组件，并自定义 webpack 的配置以满足各类工程化需求
## 安装和初始化
* 安装
> `yarn create react-app antd-demo`
* 然后我们进入项目并启动
>```cd antd-demo```
> ```初始化：yarn```
>```启动：yarn start```

#### create-react-app中img图片实现
场景：正常的情况下是这么引用图片，我的图片路径是 src/images/login-from-icon1.png
<img src="../images/login-from-icon1.png" alt=""/>
结果：不能现实图片

解决：

方案一：

可以把图片放到public文件中，这里的图片路径是 public/img/login-from-icon1.png

这里有说明

https://facebook.github.io/create-react-app/docs/using-the-public-folder

　　一种写法：

<img className="icon1" src={process.env.PUBLIC_URL + '/img/' + 'login-from-icon1' + '.png'} alt=""/>
　　另一种写法：

<img className="icon1" src="img/login-from-icon1.png" alt=""/>
 

方案二：

图片路径依然是 src/images/login-from-icon1.png

需要注意的只能通过绝对路径来引入图片
　　一种写法，图片引入：

import icon1 from '../images/login-from-icon1.png';

<img src={ icon1 } alt=""/>
　　

　　另一种写法，利用webpack：

<img src={require("../images/login-from-icon1.png")} />
　　注意：require中只能放字符串，不能放变量

 
总结，这里我用的是方案二，因为放在public下的图片是不被webpack处理的
