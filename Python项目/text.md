## 基础知识点
### format的运用
> 字符串格式化的一种方式，在字符串中使用占位符，占位符可以填任何内容
```python
# 只有一个占位符
myName = '我的名字是{}'
print(myName.format('张三'))  # 我的名字是张三

# 有多个占位符
myName = '我叫{}，性别{}'
print(myName.format('张三', '男')) #我叫张三，性别男
```
### 列表推导式
> 快速的生成包含一堆数据的列表
```py
# 生成1-10的一个数组
list1 = [i for i in range(1, 11)]
print(list1)
# output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# 生成天数, 与format一起运用
mathDay = ['第{}天'.format(i) for i in range(1, 10)]
# output: ['第1天', '第2天', '第3天', '第4天', '第5天', '第6天', '第7天', '第8天', '第9天']
print(mathDay)
```

### 字典推导式
> 快速的生成包含一堆数据的字典
```python
dict01 = {i + 10: i for i in range(10)}
print(dict01)
# output： {10: 0, 11: 1, 12: 2, 13: 3, 14: 4, 15: 5, 16: 6, 17: 7, 18: 8, 19: 9}
dict02 = {"a{}".format(i): i + 11 for i in range(10)}
print(dict02)
# output： {'a0': 11, 'a1': 12, 'a2': 13, 'a3': 14, 'a4': 15, 'a5': 16, 'a6': 17, 'a7': 18, 'a8': 19, 'a9': 20}
```
### 三元运算符
> 如果if前面的条件成立，取if前面的值，if条件不成立，取else后面的值
```python
# if条件成立，取if前面的值，a = 10
a = 10 if 3 < 4 else 20
print(a)
# output: 10
# if条件不成立，取if后面的值，a = 20
a = 10 if 3 > 4 else 20
print(a)
# output: 20
```
## 函数学习笔记
### 将函数作为参数进行执行
```python
def sum_args(*args):
    # sum()是Python的一个内建函数,可以用来计算可迭代的数值参数的和
    return sum(args)
def run_with_position_args(func, *args):
    return func(*args)
# 将sum_args函数作为一个参数传进去
a = run_with_position_args(sum_args, 2, 3, 4, 5, 6, 7, 8, 9, 1)
print(a)
```
 ### 内部函数
```py
def outer(a, b):
    def inner(c, d):
        return c+d
    return inner(a, b)
print(outer(3, 4))
```

### 闭包
```py
def knights2(saying):
    def inner2():
        return "we are the knights who say: '%s' " % saying
    return inner2
a = knights2("bob")
print(a)
# <function knights2.<locals>.inner2 at 0x7fb3db4e0048>
print(a())
# we are the knights who say: 'bob' 
```

### lambda()函数
```py
def edit_stroy(words, func):
    for word in words:
        print(func(word))
def enliven(word):
    return word.capitalize() + '!'
stairs = ['thud', 'meow', 'thud', 'hiss']

edit_stroy(stairs, enliven)
print("=============================")
# 改为用 lambda代替
# lambda接收一个参数word,
edit_stroy(stairs, lambda word: word.capitalize() + '!')

def edit_stroy1(words, func):
    for word in words:
        a = word.capitalize() + "!"
        print(func(word, a))
print("============================")
# 使用lamdba接收两个参数
edit_stroy1(stairs, lambda word, word1: word + "  ---->  " + word1)


```

### 使用try和except处理错误
```py
short_list = [1, 2, 3, 4, 5]
while True:
    # 接受一个标准函数, 获取键盘输入的数据
    value = input('position [q to quit]? ')
    if (value == 'q'):
        break
    try:
        # 将输入的value强制转换位整形
        position = int(value)
        print(short_list[position])
    except IndexError as err:
        print("bad index: ", position)
    except Exception as other:
        print("somethint else broke: ", other)
    except:
        print("其他异常")
```