# Spring

## Spring Boot

### 常用注解

| 注解                       | 作用                                                                   |
| -------------------------- | ---------------------------------------------------------------------- |
| `@SpringBootApplication`   | 相当于`@Configuration`+`@EnableAutoConfiguration` + `@ComponentScan`   |
| `@RestController`          | 相当于`@Controller` + `@ResponseBody`                                  |
| `@GetMapping`              | 映射 get 请求到该方法                                                  |
| `@RequestParam`            | 映射 query parameters, form data, parts in multipart requests 到参数   |
| `@RequestBody`             | 通过 HttpMessageConverter 解析 body 中的参数                           |
| `@Configuration`           | 标记一个类中定义的 Bean 可以用于上下文                                 |
| `@EnableAutoConfiguration` | 启用自动配置，根据依赖自动启用功能                                     |
| `@ComponentScan`           | 允许 Spring 在这个 package 中寻找 components, configurations, services |

- SpingMVC: `@Controller` `@Service` `@Repository` `@Component` 
  - 前三个可以作为`@Component`的特殊化
  - `@Component`: 该类可以被自动检测到（annotation配置|classpath扫描）
- @Bean: 方法返回的对象将被Spring容器管理
  - name默认使用方法名
  - 需要用注解配置：Profile, Scope, Lazy, DependsOn, Primary, Order
- Mapping: `@RequestMapping` `@GetMapping` `@PostMapping` `@PutMapping` `@DeleteMapping`
- Request&Response: `@RequestParam` `@RequestBody` `@ResponseBody` 

## Spring 事务

- Spring并不直接管理事务，而是提供了多种事务管理器, 具体由框架实现(JDBC,Hibernate,JPA,JTA)
- 事务属性：传播行为、隔离规则、回滚规则、事务超时、是否只读
- 传播行为：required, supports, mandatory(强制), required_new, not_supported, never, nested
- 隔离级别：未提交读、已提交读、可重复读、串行化 | 脏读、不可重复读、幻读
- 回滚：默认在遇到运行时异常会回滚
- spring使用AOP来支持声明式事务
- <https://blog.csdn.net/trigl/article/details/50968079>

## Spring 懒加载

- 懒加载：对象使用的时候才去创建。节省资源,但是不利于提前发现错误
- 非懒加载：容器启动时立马创建。消耗资源,有利于提前发现错误
- spring 默认是单例

## Spring 加载过程

- BeanFactory: IOC容器, 实例化、定位、配置应用程序中的对象及建立这些对象间的依赖
- FactoryBean: 通过反射机制实例化Bean

## Spring AOP(面向切面编程)

- 在不改变原有的逻辑的基础上，增加一些额外的功能
- 静态代理：通过实现同样的接口来进行包装
- 动态代理：
  - JDK Proxy: 通过Proxy类代理target中已实现的方法
  - Cglib: 在运行期动态的在内存中构建一个子类
  - 装饰器模式关注于在一个对象上动态的添加方法(target传入)，然而代理模式关注于控制对对象的访问(target自己创建)
