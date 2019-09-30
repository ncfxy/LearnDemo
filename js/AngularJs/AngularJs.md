# AngularJs

## 常用命令

| 用途                  | 命令                         |
|---------------------|------------------------------|
| 安装angular           | npm install -g angular-cli   |
| 创建新项目忽略install | ng new my-app --skip-install |
| 启动server            | ng serve --open              |
| 创建component         | ng generate component heroes |
| 创建service           | ng generate service hero     |

## 常用标签

| 用途          | 标签                                      |
|-------------|-------------------------------------------|
| 引用component | `<componentSelector></componentSelector>` |
| 双向绑定      | `<input [(ngModel)]='variable' />`        |
| 循环          | `<li *ngFor="let hero of heroes">`        |
| 条件          | `<div *ngIf="selectedHero">`              |
| 属性绑定      | `<selector [hero]="selectedHero"/>`       |
| 属性接收      | `@Input() hero: Hero;`                    |

## 依赖注入

* AngularJs 5 及以前

```javascript
    @Injectable({
        providedIn: 'root',
    })
    export class SampleService{
        constructor() { }
    }
```

* AngularJs 6 以后

```javascript
    @NgModule({
        providers: [HeroService]
    })
```
