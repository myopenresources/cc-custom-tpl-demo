# angular版 模版插座指令

## 安装
npm install cc-custom-tpl --save 或 yarn add cc-custom-tpl

## 使用
```javascript
//========string-template-outlet========
// 业务模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomTemplateModule } from 'cc-custom-tpl';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CustomTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




//header组件
<div style="text-align:center">
    <ng-container *ccStringTemplateOutlet="sysLogo">
        <img [src]="sysLogo">
    </ng-container>
</div>

import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input()
  sysLogo: string | TemplateRef<void>;

  constructor() { }

  ngOnInit() {
  }
}

//业务html
<app-header [sysLogo]="'这里是一个logo'"></app-header>


//========template-outlet========
// 业务模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomTemplateModule } from 'cc-custom-tpl';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CustomTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//header组件
<div style="text-align:center">
    <ng-container *ccTemplateOutlet="sysHtml">
    </ng-container>
</div>

import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input()
  sysHtml: TemplateRef<void>;

  constructor() { }

  ngOnInit() {
  }

}


<app-header  [sysHtml]="sysHtmlTpl">
  <ng-template #sysHtmlTpl>
    <div>这里是一个模版</div>
  </ng-template>
</app-header>


```

## 参数
1. *ccStringTemplateOutlet：字符串值或模版<br>

2. *ccTemplateOutlet：模版<br>
