# java面试知识点

- 23种设计模式知识要点
- ActiveMQ消息中间件面试专题
- BAT面试必问的20道高频数据库问题解析
- Dubbo面试题答案整理
- JVM面试专题
- Kafka面试专题
- MyBaits面试专题及答案整理
- Netty面试专题
- Nginx面试专题
- RabbitMQ面试专题及答案
- SpringBoot面试题答案整理
- SpringCloud面试题答案整理
- SpringMVC面试专题及答案整理
- SpringMVC面试专题及答案整理
- Tomcat面试专题
- zookeeper面试专题
- 并发编程高级面试专题
- 最全50道Redis高频面试题

1.数据一致性存在原因

2 数据一致性类型
3 追求强一致性还是最终一致性
4 分布式缓存和数据库数据一致性如何解决
5 基于分布式事务数据一致性解决方式
6 分布式事务业界常有解决方案( 2PC /TCC／基于 MQ)以及我们如何设计（同步场景，异步场景）

## 自检 2020.01.04

1. overload和override的区别
2. int和Integer的区别
    https://blog.csdn.net/Nan_Feng726/article/details/91439884
    Integer为包装类，new会生成对象的引用
    -128~127的Cache 
3. HashMap数据结构是怎样的
    Java中HashMap的分析 https://blog.csdn.net/woshimaxiao1/article/details/83661464
        实现：数组+链表 --> 链表中数据大于8时转化成红黑树
        initialCapacity, loadFactory确定何时扩容
        重写equals方法需同时重写hashCode方法
        线程安全：HashTable & CurrentHashMap
        CurrentHashMap: 分布在不同的Segment中
4. 抽象类和接口
    抽象类：extends, 只能继承一个
    接口：implements, 可以实现多个
5. syncronized(最常用)  ReentrantLock(使用更加灵活)
    方法上：锁定当前对象
    静态方法上： 锁定当前class
    锁方法块：锁定括号里的对象
    Java中的锁分类 (https://www.cnblogs.com/qifengshi/p/6831055.html)
        公平锁/非公平锁(默认): 是否按照申请顺序来分配
        可重入锁：内部访问同一方法块时自动获取锁
        独享锁/共享锁：ReadWriteLock读为共享，写为独享，其他一般为独享
        互斥锁/读写锁： ReentrantLock/ReadWriteLock
        乐观锁/悲观锁： 正常锁属于悲观锁，乐观锁（CAS算法，原子类）
        分段锁： Segment，主要是在CurrentHashMap中的应用
        偏向锁/轻量级锁/重量级锁：实际中只有一条线程使用时/有其他竞争，但只是在自旋/会阻塞线程
        自旋锁：线程不会立即阻塞，而是采用循环的方式去尝试获取锁
6. Java 异常体系
    Throwable, RuntimeException和Exception的区别
    Throwable： 所有异常的基类
    RuntimeException: 非受检异常，可以不用捕获；其他受检异常必须被捕获
7. JVM内存模型 （https://www.jianshu.com/p/76959115d486）
    程序计数器、虚拟机栈、本地方法栈、堆、方法区
    GC: 新生代、老年代
    判断对象是否存活：可达性分析
    垃圾收集算法：新生代(eden, from survivor, to survivor)复制算法
                    老年代 标记清除、标记整理
8. validate 保证可见性，不保证原子性
9. JVM class loader
    启动类加载器（Bootstrap ClassLoader）
    扩展类加载器（Extension ClassLoader）
    应用程序类加载器（Application ClassLoader）
    自定义类加载器（User ClassLoader）
10. Java线程池 Executors （https://www.cnblogs.com/CarpenterLee/p/9558026.html）
    newFixedThreadPool(int nThreads)	创建固定大小的线程池
    newSingleThreadExecutor()	创建只有一个线程的线程池
    newCachedThreadPool()	创建一个不限线程数上限的线程池，任何提交的任务都将立即执行
    new ThreadPoolExecutor的参数
        corePoolSize： 线程池长期维持的线程数
        maximumPoolSize： 线程数上限
        keepAliveTime： 动态线程的等待时间
        排队方式、新线程产生方式、拒绝策略
    提交方式
        Future<T> submit(Callable<T> task)	是
        void execute(Runnable command)	否
        Future<?> submit(Runnable task)	否，虽然返回Future，但是其get()方法总是返回null
11. Runnable 和 Callable
    Callable允许有返回值
12. Java线程间通信
    synchronized、wait、notify、volatile、BlockingQueue、ThreadLocal
13. StringBuffer(线程安全) StringBuilder(线程不安全)
14. Java实现多线程的方式
    继承Thread类，实现Runnable接口，实现callable接口
15. Java数据结构
    ArrayList、Vector(线程安全的ArrayList)、LinkedList
    Dequeue、ArrayDequeue、PriorityQueue、ConcurrentLinkedQueue
    BlockingQueue、ArrayBlockingQueue、LinkedBlockingQueue、PriorityBlockingQueue、DelayQueue、SynchronousQueue 
    Set、HashSet、LinkedHashSet、TreeSet
    Map、HashMap、TreeMap、CurrentHashMap
16. Java 流
    字节流：InputStream、OutputStream
    字符流：Reader、Writer
    NIO （https://blog.csdn.net/forezp/article/details/88414741）
    
17. Java 序列化
    继承Serializable接口
    ObjectOutputStream writeObject readObject
    序列化成JSON： Gson、Jackson



    