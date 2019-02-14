#### svg画矩形

```html

<div>
    <h4>案例一</h4>
</div>
<!--
<rect>: 矩形
width: 矩形的宽度
height: 矩形的高度
style: 用来定义css属性
stroke-width: 矩形边框的宽度, 相当与border
stroke: 矩形边框的颜色, 相当于border-color
-->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <rect width="300" height="100" style="fill:rgb(0, 0, 255);stroke-width: 1;stroke: rgb(0, 0, 0)"></rect>
</svg>
<div>
    <h4>案例二</h4>
</div>
<!--
x: 定义矩形的左侧位置
y: 定义矩形的顶端位置
file-opacity: 定义填充颜色的透明度
stroke-opacity: 定义轮廓颜色的透明度
fill: 填充颜色

-->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <rect x="50" y="20" width="150" height="150"
          style="fill: blue;stroke:pink;stroke-width: 5;fill-opacity:0.1;stroke-opacityL:0.9"></rect>
</svg>
<div>
    <h4>案例三</h4>
</div>
<!--
opacity: 定义整个元素的不透明度

-->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <rect x="50" y="20" width="150" height="150"
          style="fill: blue; stroke: pink; stroke-width: 5; opacity: 0.5;"></rect>
</svg>
<div>
    <h4>案例四</h4>
</div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
          style="fill:red; stroke: black; stroke-width: 5; opacity: 0.5;"></rect>
</svg>
```

