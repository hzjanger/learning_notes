### Spring入门

#### 框架模块

Spring Framework由大约20个模块组成的功能组成,这些模块分为核心模块,数据访问/集成, web, AOC(面向对象),仪器,消息传递和测试,如下图所示

**Spring框架概述**

![](./img/1.png)

#### 核心容器

核心容器由以下几个部分组成,`spring-core`，`spring-beans`，`spring-context`，`spring-context-support`，`spring-expression`

#### 项目的创建

1. 创建一个gradle项目
2. 导入核心容器的jar包
   1. spring-core
   2. spring-beans
   3. spring-context
   4. spring-expression
3. 导入log4j的jar包

`build.gradle`

```
plugins {
    id 'java'
    id 'war'
}

group 'com.hzj'
version '1.0-SNAPSHOT'

sourceCompatibility = 1.8

repositories {
    mavenCentral()
    // and optionally...
    maven { url "http://repo.spring.io/release" }
}

dependencies {
    testCompile group: 'junit', name: 'junit', version: '4.11'
    testCompile group: 'junit', name: 'junit', version: '4.12'
    // https://mvnrepository.com/artifact/org.springframework/spring-core
    compile group: 'org.springframework', name: 'spring-core', version: '4.2.5.RELEASE'
    // https://mvnrepository.com/artifact/org.springframework/spring-beans
    compile group: 'org.springframework', name: 'spring-beans', version: '4.2.5.RELEASE'
    // https://mvnrepository.com/artifact/org.springframework/spring-context
    compile group: 'org.springframework', name: 'spring-context', version: '4.2.5.RELEASE'
    // https://mvnrepository.com/artifact/org.springframework/spring-expression
    compile group: 'org.springframework', name: 'spring-expression', version: '4.2.5.RELEASE'
    // https://mvnrepository.com/artifact/log4j/log4j
    compile group: 'log4j', name: 'log4j', version: '1.2.17'
    // https://mvnrepository.com/artifact/junit/junit
    compile group: 'junit', name: 'junit', version: '4.12'
}

```

#### 代码编写

在java目录下创建com.hzj.ioc的包，创建`UserService`接口

`UserService.java`

```java
package com.hzj.ioc;

public interface UserService {
    public void say();
}

```

创建`UserServiceImpl`实现`UserService`接口

`UserServiceImpl.java`

```java
package com.hzj.ioc;

public class UserServiceImpl implements UserService {

    private String name;
    public void say() {
        System.out.println("hello world " + name);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

```

在resource目录下创建`applicationContext.xml`文件

`applicationContext.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <bean id="userService" class="com.hzj.ioc.UserServiceImpl">
        <property name="name" value="李四"/>
    </bean>
</beans>
```

在com.hzj.ioc目录下创建测试文件

`Demo1.java`

```java
package com.hzj.ioc;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Demo1 {
    @Test
    public void demo1() {
        //创建ApplicationContext容器,
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        //通过bean的id值获取进行对象的实例化
        UserService userService = (UserService) applicationContext.getBean("userService");
        userService.say();
    }
}
```

[代码地址](https://github.com/hzjanger/Java-EE-study/tree/master/mych1)