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
