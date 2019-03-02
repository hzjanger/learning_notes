

### Bean的生命周期

1. 执行类的构造方法
2. 执行类的set方法
3. 如果该类实现了BeanNameAware类，那么会执行setBeanName方法
4. 如果该类事项了ApplicationContextAware类，那么会执行setApplicationContext方法
5. 如果有一个类实现了BeanPostProcessor，那么会执行postProcessBeforeInitialization方法，并且对于所有的bean都会执行
6. 如果该类实现了InitializingBean类，那么会执行afterPropertiesSet方法
7. 如果applicationContext.xml中的bean设置了init-method属性，那么会执行init-method设置的方法
8. 如果有一个类实现了BeanPostProcessor，那么会执行postProcessAfterInitialization方法，并且对于所有的bean都会执行
9. 如果有自己的业务，那么会执行自己的方法，但是要自己去调用，自己不调用就不会执行
10. 如果该类实现了DisposableBean类，那么会执行destroy方法
11. 如果applicationContext.xml中的bean设置了destroy-method属性，那么会执行destroy-method这是的方法

### Bean的装配方式

#### 基于xml配置的装配

