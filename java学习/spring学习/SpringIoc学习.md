### SpringIOC学习

#### 依赖注入

##### 使用构造方法进行注入

在项目开发过程中，在service需要调用dao层的支持

在dao包中

`TestDIDao.java`

```java

```

TestDIDao的实现类,`TestDIDaoImpl.java`

```java
package dao;

public class TestDIDaoImpl implements TestDIDao {
    @Override
    public void sayHello() {
        System.out.println("TestDIDao say: Hello, Study hard!");
    }
}

```

在service包下

`TestDIService.java`

```java
package service;

public interface TestDIService {
    public void sayHello();
}

```

TestDIService的实现类---`TestDIService.java`

```java
package service;

import dao.TestDIDao;

public class TestDIServiceImpl implements TestDIService{

    private TestDIDao testDIDao;

    public TestDIServiceImpl(TestDIDao testDIDao) {
        super();
        this.testDIDao = testDIDao;
    }
    @Override
    public void sayHello() {
        //使用testDIDao调用Dao的方法
        testDIDao.sayHello();
        System.out.println("TestDIService构造方法注入 say: Hello, Study hard!");
    }
}

```

编写配置文件

`applicationContext.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!--将指定类TestDIDaoImpl配置给Spring,让Spring创建其实例-->
    <bean id="myTestDIDao" class="dao.TestDIDaoImpl"/>
    <!--使用构造方法进行注入-->
    <bean id="testDIService" class="service.TestDIServiceImpl">
        <!--将myTestDIDao注入到TestDIServiceImpl类的属性testDIDao上-->
        <constructor-arg index="0" ref="myTestDIDao"/>
    </bean>
</beans>
```

编写测试类`TestDI.java`

```java
package test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import service.TestDIService;

public class TestDI {
    public static void main(String[] args) {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TestDIService testDIService = (TestDIService) applicationContext.getBean("testDIService");
        testDIService.sayHello();
    }
}

```

##### 使用属性的setter方法注入

除了使用构造方法进行注入之外还可以使用setter方法注入，它是spring框架中最主流的注入方式

在service包下

TestDIService实现类---`TestDIService1.java`

```java
package service;

import dao.TestDIDao;

public class TestDIServiceImpl1 implements TestDIService {

    private TestDIDao testDIDao;
    
    public void setTestDIDao(TestDIDao testDIDao) {
        this.testDIDao = testDIDao;
    }

    @Override
    public void sayHello() {
        testDIDao.sayHello();
        System.out.println("TestDIService setter方法注入 say: Hello, Study hard!");
    }
}

```

在配置文件`applicationContext.xml`中添加下列内容

```xml
<bean id="testDIService1" class="service.TestDIServiceImpl1">
<!--调用TestServiceImpl1类的setter方法,将myTestDIDao注入到TestDIServiceImpl1类的属性testDIDao上-->
    <property name="testDIDao" ref="myTestDIDao"/>
</bean>
```

进行测试，在`Test.java`文件中添加下列内容

```java
TestDIService testDIService1 = (TestDIService) applicationContext.getBean("testDIService1");
testDIService1.sayHello();
```



#### 代码

代码地址[https://github.com/hzjanger/Java-EE-study/tree/master/ch2](https://github.com/hzjanger/Java-EE-study/tree/master/ch2)