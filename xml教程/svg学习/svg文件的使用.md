#### svg在html文件中的使用

```html
<!--
优势：所有主要浏览器都支持，并允许使用脚本
缺点：不推荐在HTML4和XHTML中使用（但在HTML5允许）
-->
<embed src="test.svg" type="image/svg+xml">
<!--
优势： 所有主要浏览器都支持，并支持HTML4，XHTML和HTML5标准
缺点：不允许使用脚本
-->
<object data="test.svg" type="image/svg+xml"></object>
<!--
优势：所有主要浏览器都支持，并允许使用脚本
缺点：不推荐在HTML4和XHTML中使用（但在HTML5允许）
-->
<iframe src="test.svg"></iframe>
<!--
直接在svg中使用
xmlns: svg的命名空间
cr, cy: 定义圆中心的x和y坐标, 如果没有这两个属性, 那么圆点会被设置为(0, 0), r属性定义圆的半径
stroke: 形状的轮廓的颜色, 相当于border-color
stroke-width:形状的轮廓, 相当于border
-->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>
```

#### 在css中使用

