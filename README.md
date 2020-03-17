<div style="text-align:center;">
    <img src="./static/imgs/bg1.jpg">
</div>

### 使用 React 和 JSX

#### 快速上手JSX

**project**

```bash
react_playground/
|-- README.md
|-- add_component.html
`-- like_button.js
```

只依赖了浏览器原生支持的特性：

```js
return e(
    'button',
    { onClick: () => this.setState({ liked: true }) },
    'Like'
);
```

用 [JSX](https://zh-hans.reactjs.org/docs/introducing-jsx.html) 来代替实现：

```jsx
return (
    <Button onClick={() => this.setState({ liked: true })}>
        Like
    </Button>
);
```

JSX需要第三方库的支持:

```js
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

你可以在任何 `<script>`标签内使用 JSX，方法是在为其添加 `type="text/babel"` 属性。

 ```js
<script src="like_button.js" type="text/babel" crossorigin></script>
 ```

> 如果直接用浏览器打开`html`文件，将会报错。需要将示例放在静态服务器中。
>
> ![](D:\CodeIsMyLife\react_playground\static\imgs\Desktop screenshot.png)

> 造成以上现象的原因是：`script`标签的`type`属性值为`text/javascript`和`module`之外的值时，嵌入的内容被视为浏览器不会处理的数据块，src属性将被忽略。
>
> 换句话说，在以上示例中，浏览器不会加载或运行`like_button.js`。这是有道理的-如果这样做的话，会出现语法错误，因为浏览器无法理解JSX。
>
> 实际发生的是，babel独立脚本查看您的HTML，找到标记为`text/babel`的所有脚本标签，通过XMLHttpRequest加载它们，然后编译并运行它们。
>
> 通过浏览器的`DevTools`查看网络请求也能验证这点(like_button.js文件是通过XHR请求过来的)：
>
> ![](D:\CodeIsMyLife\react_playground\static\imgs\Snipaste_2020-03-11_11-34-29.png)



#### 将JSX添加到项目

上述的方式仅仅适合于简单的学习和创建简单的示例，但是，当要在真正的生产环境中使用，你会发现速度会非常的慢。更好的做法是删除`scipt`标签，转而使用JSX预处理器来自动转换**所有**`script`标签里的内容。

将 JSX 添加到项目中并不需要诸如打包工具或开发服务器那样复杂的工具。本质上，添加 JSX **就像添加 CSS 预处理器一样**。唯一的要求是你在计算机上安装了 [Node.js](https://nodejs.org/)。

在项目文件夹中，执行这两个命令：

1. `npm init -y`
2. `npm install babel-cli@6 babel-preset-react-app@3`

**package.json**

```diff
    {
      "name": "react_playground",
      "version": "1.0.0",
      "description": "<div style=\"text-align:center;\">\r     <img src=\"./static/imgs/bg1.jpg\">\r </div>",
      "main": "like_button.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
+     "dependencies": {
+       "babel-cli": "^6.26.0",
+       "babel-preset-react-app": "^3.1.2"
+     }
    }
```

> 我们**在这里使用 npm 只是用来安装 JSX 预处理器**，之后你不再需要它。React 和应用程序代码都可以继续使用 `script` 标签而不做任何更改。

现在，你已经为你的项目加入了一个**生产就绪（production-ready）的 JSX 配置环境**。

#### 运行JSX预处理器

创建一个名为`src`的文件夹并执行这个终端命令：

`npx babel --watch src --out-dir . --presets react-app/prod`

这个命令启动了一个对 JSX 的自动监听器。

此时你讲上面的`like_button.js`文件移动到`src`文件夹。
**project**

```diff
    react_playground/
    |-- README.md
    |-- add_component.html
-   |-- like_button.js
    |-- package-lock.json
    |-- package.json
    |-- src
+   |   `-- like_button.js
```

作用在`src`文件夹的监听器会创建马上一个预处理过的 `like_button.js` 文件，它包含了适用于浏览器的普通 JavaScript 代码。当你编辑带有 JSX 的源文件时，转换过程将自动重新执行。

**project**

```diff
    react_playground/
    |-- README.md
    |-- add_component.html
+   |-- like_button.js
    |-- package-lock.json
    |-- package.json
    |-- src
    |   `-- like_button.js
```

**转换后的like_button.js**

```js
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var LikeButton = function (_React$Component) {
    _inherits(LikeButton, _React$Component);

    function LikeButton(props) {
        _classCallCheck(this, LikeButton);

        var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(LikeButton, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            if (this.state.liked) {
                return "You liked this.";
            }

            // return e(
            //   'button',
            //   { onClick: () => this.setState({ liked: true }) },
            //   'Like'
            // );
            // 使用jsx
            return React.createElement(
                "button",
                { onClick: function onClick() {
                        return _this2.setState({ liked: true });
                    } },
                "Like"
            );
        }
    }]);

    return LikeButton;
}(React.Component);

var domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
```

