#### svg文件的书写

先建一个svg文件，叫做`test.svg`

```svg
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
        "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <circle cx="100" cy="50" r="40" stroke="black"
            stroke-width="2" fill="red" />
</svg>
```

##### 代码解析

第一行包含了xml的声明请注意 standalone 属性！该属性规定此 SVG 文件是否是"独立的"，或含有对外部文件的引用standalone="no" 意味着 SVG 文档会引用一个外部文件 - 在这里，是 DTD 文件。

第二和第三行引用了这个外部的 SVG DTD。该 DTD 位于 [http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd](http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd)该 DTD 位于 W3C，含有所有允许的 SVG 元素。

SVG代码以<svg>标签开始，可以使用width和height设置svg的宽度和高度

svg里面可以包含以下标签

- <rect>
- <circle>
- <ellipse>
- <line>
- <polyline>
- <polyine>
- <path>

这里的这个例子是画一个圆

