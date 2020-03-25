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
> <div style="text-align:center;">
>     <img src=".\static\imgs\Desktop screenshot.png">
> </div>

> 造成以上现象的原因是：`script`标签的`type`属性值为`text/javascript`和`module`之外的值时，嵌入的内容被视为浏览器不会处理的数据块，src属性将被忽略。
>
> 换句话说，在以上示例中，浏览器不会加载或运行`like_button.js`。这是有道理的-如果这样做的话，会出现语法错误，因为浏览器无法理解JSX。
>
> 实际发生的是，babel独立脚本查看您的HTML，找到标记为`text/babel`的所有脚本标签，通过XMLHttpRequest加载它们，然后编译并运行它们。
>
> 通过浏览器的`DevTools`查看网络请求也能验证这点(like_button.js文件是通过XHR请求过来的)：
>
> <div style="text-align:center;">
>     <img src=".\static\imgs\Snipaste_2020-03-11_11-34-29.png">
> </div>



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

### 核心概念

#### JSX

##### 为什么使用JSX？

React认为渲染逻辑和其他的UI逻辑内在耦合。

React没有采用传统的将标记和逻辑分离到不同文件的做法，而是将二者共同放在称之为“组件”的松散耦合单元之中，来实现[关注点分离]([https://baike.baidu.com/item/%E5%85%B3%E6%B3%A8%E7%82%B9%E5%88%86%E7%A6%BB](https://baike.baidu.com/item/关注点分离))。

如果还不能理解适应在 JS 中使用标记语言，以下这个[油管视频](https://www.youtube.com/embed/x7cQ3mrcKaY)应该可以说服你。

<div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/x7cQ3mrcKaY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

React [不强制要求](https://zh-hans.reactjs.org/docs/react-without-jsx.html)使用 JSX，但是大多数人发现，在 JavaScript 代码中将 JSX 和 UI 放在一起时，会在视觉上有辅助作用。它还可以使 React 显示更多有用的错误和警告消息。

##### 在 JSX 中嵌入表达式

在下面的例子中，我们声明了一个名为 `name` 的变量，然后在 JSX 中使用它，并将它包裹在大括号中：

```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

> babel怎么解析jsx，怎么识别出何处是jsx代码？

为了便于阅读，我们会将 JSX 拆分为多行。同时，我们建议将内容包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到[自动插入分号](http://stackoverflow.com/q/2846283)陷阱。

例如:

```jsx
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
// 将内容包裹在括号中
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

##### JSX 也是一个表达式

<span style="color:red;font-weight:bolder;">在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。</span>也就是说，你可以在 `if` 语句和 `for` 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX：

```jsx
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

##### JSX 特定属性

你可以通过使用引号，来将属性值指定为字符串字面量：

```jsx
const element = <div tabIndex="0"></div>;
```

也可以使用大括号，来在属性值中插入一个 JavaScript 表达式：

```jsx
const element = <img src={user.avatarUrl}></img>;
```

##### 使用 JSX 指定子元素

假如一个标签里面没有内容，你可以使用 `/>` 来闭合标签，就像 XML 语法一样：

```jsx
var img = <img src={config.backgroundImageSrc}></img>;
var img2 = <img src={config.backgroundImageSrc} />
```

##### JSX 防止[注入攻击]([https://baike.baidu.com/item/SQL%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB](https://baike.baidu.com/item/SQL注入攻击))

你可以安全地在 JSX 当中插入用户输入内容：

```
const title = response.potentiallyMaliciousInput;
// 直接使用是安全的：
const element = <h1>{title}</h1>;
```

React DOM 在渲染所有输入内容之前，默认会进行[转义](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html)。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 [XSS（cross-site-scripting, 跨站脚本）](https://en.wikipedia.org/wiki/Cross-site_scripting)攻击。

##### JSX 表示对象

Babel 会把 JSX 转译成一个名为 `React.createElement()` 函数调用。

以下两种示例代码完全等效：

```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```jsx
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

`React.createElement()` 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：

```jsx
// 注意：这是简化过的结构
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

这些对象被称为 <span style="color:red;font-weight:bolder;">“React 元素”</span>。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。

#### 元素渲染

> 元素是构成 React 应用的最小砖块。

元素描述了你在屏幕上想看到的内容。

```jsx
const element = <h1>Hello, world</h1>;
```

与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致。

##### 将元素渲染为DOM

一般中会存在一个"根"`DOM`点由`React DOM`管理。

```html
<div id="root"></div>
```

仅使用 React 构建的应用通常只有单一的根 DOM 节点。如果你在将 React 集成进一个已有应用，那么你可以在应用中包含任意多的独立根 DOM 节点。

想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 `ReactDOM.render()`：

```jsx
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

##### 更新已渲染的元素

React 元素是[不可变对象](https://en.wikipedia.org/wiki/Immutable_object)。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。

根据我们已有的知识，更新 UI 唯一的方式是创建一个全新的元素，并将其传入 `ReactDOM.render()`。

考虑一个计时器的例子：

```jsx
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

##### React 只更新它需要更新的部分

React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。

#### 组件 & Props

> 组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。本指南旨在介绍组件的相关理念。

组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 **React 元素**。

##### 函数组件与 class 组件

定义组件最简单的方式就是编写 JavaScript 函数：

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

你同时还可以使用 [ES6 的 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 来定义组件：

```
class 
```

##### 渲染组件

之前，我们遇到的 React 元素都只是 DOM 标签：

```jsx
const element = <div />;
```

<div>
    <p style="color:red;">
        不过，React 元素也可以是用户自定义的组件：
    </p>
</div>

```jsx
const element = <Welcome name="Sara" />;
```

```react
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<Welcome name="zjl"/>, domContainer);
```

当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及**子组件（children）**转换为单个对象传递给组件，这个对象被称之为 “props”。

> 组件如何嵌套？？？

回顾一下这个例子中发生了什么：

1. 我们调用 `ReactDOM.render()` 函数，并传入 `<Welcome name="zjl"/>` 作为参数。
2. React 调用 `Welcome` 组件，并将 `{name: 'zjl'}` 作为 props 传入。
3. `Welcome` 组件将 `Hello, zjl`元素作为返回值。
4. React DOM 将 DOM 高效地更新为 `Hello, zjl`。

> **注意：** 组件名称必须以大写字母开头。
>
> React 会将以小写字母开头的组件视为原生 DOM 标签。例如，`` 代表 HTML 的 div 标签，而 `` 则代表一个组件，并且需在作用域内使用 `Welcome`。
>
> 你可以在[深入 JSX](https://zh-hans.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)中了解更多关于此规范的原因。

##### 组合组件

组件可以在其输出中引用其他组件。

```react

function Timeer(props) {
    var now = new Date()
    return (
        <p>Now is  {now.getDate()}</p>
    )
}
function Welcome(props) {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <Timeer />
        </div>
    );
}
const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(
    <Welcome name="zjl" />,
    domContainer);
```

##### 拆分组件

将组件拆分为更小的组件。

提取组件可能是一件繁重的工作，但是，在大型应用中，构建可复用组件库是完全值得的。根据经验来看，如果 UI 中有一部分被多次使用（`Button`，`Panel`，`Avatar`），或者组件本身就足够复杂（`App`，`FeedStory`，`Comment`），那么它就是一个可复用组件的候选项。

##### Props 的只读性

组件无论是使用[函数声明还是通过 class 声明](https://zh-hans.reactjs.org/docs/components-and-props.html#function-and-class-components)，都决不能修改自身的 props。来看下这个 `sum` 函数：

```js
function sum(a, b) {
  return a + b;
}
```

这样的函数被称为[“纯函数”](https://en.wikipedia.org/wiki/Pure_function)，因为该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。

相反，下面这个函数则不是纯函数，因为它更改了自己的入参：

```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

React 非常灵活，但它也有一个严格的规则：

**所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。**

当然，应用程序的 UI 是动态的，并会伴随着时间的推移而变化。在下一章节中，我们将介绍一种新的概念，称之为 “state”。在不违反上述规则的情况下，state 允许 React 组件随用户操作、网络响应或者其他变化而动态更改输出内容。

> React 的Props 的只读性和Vue的父子组件间的传值类似，父组件传递给子组件的props同样无法在子组件更改，而是必须通过子组件emit一个事件通知父组件去更改。

#### state & 生命周期

通过封装一个真正可复用的 `Clock` 组件。它将设置自己的计时器并每秒更新一次。

````react
function Clock(props) {
    return (
        <div>
            <h1>Hello World!</h1>
            <h2>It is {props.date.toLocaleTimeString()}</h2>
        </div>
    )
}

function tick(){
    const domContainer = document.querySelector("#like_button_container");
    ReactDOM.render(<Clock date={new Date()}/>, domContainer);
}

setInterval(tick, 1000);
````

以上例子忽略了一个关键的技术细节：`Clock` 组件需要设置一个计时器，并且需要每秒更新 UI。

理想情况下，我们希望只编写一次代码，便可以让 `Clock` 组件自我更新：

我们需要在 `Clock` 组件中添加 “state” 来实现这个功能。

**State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。**

##### 将函数组件转换成 class 组件

通过以下五步将 `Clock` 的函数组件转成 class 组件：

1. 创建一个同名的 [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)，并且继承于 `React.Component`。
2. 添加一个空的 `render()` 方法。
3. 将函数体移动到 `render()` 方法之中。
4. 在 `render()` 方法中使用 `this.props` 替换 `props`。
5. 删除剩余的空函数声明。

```diff
- function Clock(props) {
-     return (
-         <div>
-             <h1>Hello World!</h1>
-             <h2>It is {props.date.toLocaleTimeString()}</h2>
-         </div>
-     )
- }
+ class Clock extends React.Component {
+     render() {
+         return (
+             <div>
+                 <h1>Hello World!</h1>
+                 <h2>It is {this.props.date.toLocaleTimeString()}</h2>
+             </div>
+         )
+     }
+ }

  function tick() {
      const domContainer = document.querySelector("#like_button_container");
      ReactDOM.render(<Clock date={new Date()} />, domContainer);
  }

  setInterval(tick, 1000);
```
现在 Clock 组件被定义为 class，而不是函数。

每次组件更新时 `render` 方法都会被调用，但只要在相同的 DOM 节点中渲染 <Clock /> ，就仅有一个 Clock 组件的 class 实例被创建使用。这就使得我们可以使用如 state 或生命周期方法等很多其他特性。
##### 向 class 组件中添加局部的 state
```diff
  class Clock extends React.Component {
+     constructor(props) {
+         super(props);
+         this.state = {date:new Date()};
+     }
      render() {
          return (
              <div>
                  <h1>Hello World!</h1>
+                 <h2>It is {this.state.date.toLocaleTimeString()}</h2>
-                 <h2>It is {this.props.date.toLocaleTimeString()}</h2>
              </div>
          )
      }
  }

  function tick() {
      const domContainer = document.querySelector("#like_button_container");
-     ReactDOM.render(<Clock date={new Date()} />, domContainer);
+     ReactDOM.render(<Clock  />, domContainer);
  }

  setInterval(tick, 1000);
```
##### 将生命周期方法添加到 Class 中
在具有许多组件的应用程序中，当组件被销毁时释放所占用的资源是非常重要的。

当 `Clock` 组件第一次被渲染到 DOM 中的时候，就为其设置一个计时器。这在 React 中被称为“挂载（mount）”。

同时，当 DOM 中 `Clock` 组件被删除的时候，应该[清除计时器](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval)。这在 React 中被称为“卸载（unmount）”。

我们可以为 class 组件声明一些特殊的方法，当组件挂载或卸载时就会去执行这些方法：

```diff
    class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {date:new Date()};
        }

+       componentDidMount() {
+           var _this = this;
+           var interval = setInterval(function() {
+               _this.state.date = new Date();
+           },1000)
+       }
+
+       componentWillUnmount() {
+           if (interval) {
+               console.log('interval exisiting')
+               clearInterval(interval)
+           }
+       }

        render() {
            return (
                <div>
                    <h1>Hello World!</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                </div>
            )
        }
    }

    function tick() {
        const domContainer = document.querySelector("#like_button_container");
        ReactDOM.render(<Clock  />, domContainer);
    }

    setInterval(tick, 1000);
```

这些方法叫“生命周期方法”。

`componentDidMount` 方法在组件被渲染到 `DOM` 后执行。

