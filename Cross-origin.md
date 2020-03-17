<div style="text-align:center;">
    <img src="./static/imgs/cross-orign.png">
</div>

### 同源策略（Same-origin policy）

[同源策略](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)是一种重要的安全机制，它限制了从一个来源加载的文档或脚本如何与另一个来源的资源进行交互。

它有助于隔离潜在的恶意文档，减少可能的攻击媒介。

#### 什么是同源

如果两个URL的协议，端口（如果指定）和主机相同，则两个URL具有相同的来源。

> IE不将端口包含在同源检查中。因此，`https://company.com:81/index.html`和`https://company.com/index.html`被认为是相同的来源，没有任何限制。
>
> 如果两个域都位于高度受信任的区域（例如公司局域网）中，IE则同样不会应用同源限制。

以`https://github.com/react`为例：

| URL                           | 结果   | 原因       |
| ----------------------------- | ------ | ---------- |
| `https://github.com/vue`      | 同源   | 仅路径不同 |
| `https://github.com/VUE/VUE`  | 同源   | 仅路径不同 |
| `https://api.github.com/user` | 不同源 | 不同的主机 |
| `http://github.com/vue`       | 不同源 | 协议不同   |

#### 改变来源

页面可能会更改其自身来源，但有一些限制。脚本可以将`document.domain`的值设置为其当前域或当前域的超域。如果设置为当前域的超域，则较短的超域将用于同源检查。

例如，假定来自`http://store.company.com/dir/other.html`的文档中的脚本执行以下操作：

```js
document.domain = "company.com";
```

则`company.com`将被视为当前页面的主机被同源检查。

> 超域的页面不能将`document.domain`设置为子域。

对`document.domain`的任何调用（包括`document.domain = document.domain`）都会导致端口号被覆盖为null。因此，不能仅通过在以下第一个域的页面中设置`document.domain ="company.com"`来使`company.com:8080`与`company.com`进行通信。必须在两者中都设置它，以便它们的端口号都为空。

### 跨域网络访问(Cross-origin network access)

同源策略控制两个不同起源之间的交互，例如，当您使用`XMLHttpRequest`或`<img>`元素时。这些交互通常分为三类：

+ 通常允许跨域写入。例如链接，重定向和表单提交。某些HTTP请求需要进行预检。
+ 通常允许跨域嵌入。
+ 通常禁止跨域读取。但是读取访问经常因嵌入而泄漏。例如，可以通过<img>和`<script>`读取嵌入资源的内容。

以下是一些可以跨域嵌入的资源示例：

+ 带有`<script src =“ ...”> </ script>`的JavaScript。语法错误的错误详细信息仅适用于同源脚本。
+ 通过`<link rel =“ stylesheet” href =“ ...”>`引入的CSS。由于CSS的语法规则宽松，因此跨域CSS需要正确的`Content-Type`标头。
+ 由<img>显示的图像。
+ 由 `<video> `和 `<audio>`展示的媒体资源。
+ 嵌入了`<object>`和`<embed>`的外部资源。
+ 使用`@font-face`应用的字体。一些浏览器允许跨域字体，其他浏览器则需要同源字体。
+ `<iframe>`嵌入的任何内容。网站可以使用`X-Frame-Options`标头来防止跨域frame。

#### 如何允许跨域访问

使用[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)允许跨域访问。CORS是HTTP的一部分，它使服务器可以指定允许哪些主机从该服务器加载内容。

#### 如何阻止跨域访问

为防止跨域写入，请在请求中检查不可猜测的令牌-称为跨站点请求伪造（[CSRF](https://owasp.org/www-community/attacks/csrf)）令牌。您必须防止跨源读取需要此标记的页面。

为防止跨域读取资源，请确保该资源不可嵌入。通常需要防止嵌入，因为嵌入资源始终会泄漏有关该资源的某些信息。

为防止跨域嵌入，请确保您的资源不能被解释为上面列出的可嵌入格式之一。浏览器可能不遵守Content-Type标头。例如，如果将`<script>`标记指向HTML文档，浏览器将尝试将HTML解析为JavaScript。当您的资源不是站点的入口点时，您也可以使用CSRF令牌来防止嵌入。

### 跨域脚本API访问

JavaScript API（例如`iframe.contentWindow`，`window.parent`，`window.open`和`window.opener`）允许文档直接相互引用。当两个文档的来源不同时，这些引用将提供对Window和Location对象的非常有限的访问权限。

要在不同来源的文档之间进行通信，可以使用[window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)。

规范：[HTML Living Standard§跨域对象](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects)