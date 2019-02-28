### 在Angular7中使用d3

#### 安装d3

```
npm install --save d3
npm install --save-dev @types/d3
```

#### d3的使用

`test.component.ts`

```typescript
import { Component, OnInit } from '@angular/core';
//在这里导入d3就可以用了
import * as d3 from 'd3';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.showHello();
  }


  showHello() {
    d3.select('div')
      .selectAll('p')
      .text('hello world');
  }

}

```

`test.component.html`

```html
<p>
  test works!
</p>
<div>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
</div>
```

