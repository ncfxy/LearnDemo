# AngularJs

## 常用命令

    安装angular: npm install -g angular-cli
    创建新项目忽略install: ng new my-app --skip-install
    启动server: ng serve --open
    创建component: ng generate component heroes

## 常用标签

    <componentName></componentName>
    双向绑定: [(ngModel)]='variable'
    循环: *ngFor="let hero of heroes"
    条件: *ngIf="selectedHero"
    属性绑定: [hero]="selectedHero"