- 新建一个项目`ng new myapp`
- 进入项目`cd myapp`
- 安装jQuery插件`npm install jquery --save`
- 安装ngx-fullpage插件`npm install ngx-fullpage --save`
- 修改`angular.json`文件，添加`./node_modules/fullpage.js/dist/fullpage.css`、`./node_modules/jquery/dist/jquery.js`、`./node_modules/fullpage.js/dist/fullpage.js`，位置在相面的代码的`32`，`36`，`37`,`94`,`98`, `99`行

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "myapp": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
      "prefix": "app",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        }
      },
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/myapp",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
                //这是添加的内容
              "./node_modules/fullpage.js/dist/fullpage.css"
            ],
            "scripts": [
                //这是添加的内容
              "./node_modules/jquery/dist/jquery.js",
              "./node_modules/fullpage.js/dist/fullpage.js"
            ]
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "aot": true,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true,
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "2mb",
                  "maximumError": "5mb"
                }
              ]
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "myapp:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "myapp:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "myapp:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.spec.json",
            "karmaConfig": "src/karma.conf.js",
            "styles": [
              "src/styles.scss",
              //这是添加的代码
              "./node_modules/fullpage.js/dist/fullpage.css"
            ],
             "scripts": [
                //这是添加的内容
              	"./node_modules/jquery/dist/jquery.js",
              	"./node_modules/fullpage.js/dist/fullpage.js"
              ],
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ]
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "src/tsconfig.app.json",
              "src/tsconfig.spec.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    },
    "myapp-e2e": {
      "root": "e2e/",
      "projectType": "application",
      "prefix": "",
      "architect": {
        "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
            "devServerTarget": "myapp:serve"
          },
          "configurations": {
            "production": {
              "devServerTarget": "myapp:serve:production"
            }
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": "e2e/tsconfig.e2e.json",
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  },
  "defaultProject": "myapp"
}

```

- 修改`app.component.html`

```html
<!--The content below is only a placeholder and can be replaced.-->
<div id="content-wrapper" [mnFullpage]="options"
     [mnFullpageNavigation]="true"
     [mnFullpageKeyboardScrolling]="true"
     [mnFullpageSlidesNavigation]="true"
     mnFullpageSlidesNavPosition="bottom">
  <div class="section welcome-section fp-section fp-table">
    <div class="fp-tableCell">
      1
    </div>
  </div>
  <div class="section welcome-section fp-section fp-table">
    <div class="fp-tableCell">
      2
    </div>
  </div>
  <div class="section welcome-section fp-section fp-table">
    <div class="fp-tableCell">
      3
    </div>
  </div>
</div>

<router-outlet></router-outlet>

```

- 修改`app.component.ts`

```typescript
import {Component, Input} from '@angular/core';
import {MnFullpageOptions} from 'ngx-fullpage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() public options: MnFullpageOptions = MnFullpageOptions.create({
    controlArrows: false,
    scrollingSpeed: 1000,
    css3: true,
  });
}

```

- 修改`app.module.ts`

```typescript
// ...
import {MnFullpageModule} from 'ngx-fullpage';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ...其他模块
    MnFullpageModule  //这是导入的模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

来源: [https://github.com/meiblorn/ngx-fullpage-scaffolding.git](https://github.com/meiblorn/ngx-fullpage-scaffolding.git)