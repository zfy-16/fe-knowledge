# 概念：

相对于传统的编程思路来说，他的关注点是函数，不是过程。函数式编程是关注怎么通过一个个的函数的组合、变换来解决问题，而不是我写什么语句可以解决问题。

# 为什么叫函数式

函数关注点是一个输入就会有唯一一个输出。数据（输入）=>关系（根据关系得出输出）。核心就是关系，只要我们找到映射关系，只要让数据经过关系得出结果就可以了。

# 函数式特点

    - 函数是一等公民：并不意味着函数特殊，而是和其他数据类型一样处于平等地位，可以赋值给其他变量，可以以参数形式传给别的函数等。
    - 声明式编程：重点在我想做什么，而不是我怎么做，可读性变高。比如 sql 语句和 react jsx。
    - 惰性执行：没用到的时候不会执行，几乎不会产生中间变量。

## 无状态和数据不可变：这是函数式的核心概念，

### 无状态：不依赖外部状态，给定同一个输入就会产生同样的输出。不会因为外部某个变量改变而输出改变。

### 数据不可变：想要修改一个变量，应该新建一个对象来修改，而不修改原来的对象。

实现这个目标，就对函数有两个要求 没有副作用（无状态）和纯函数（数据不可变），所以纯函数才是真正的函数，相同的输入，都会得到相同的输出。

# 好处：

- 代码富有阅读性，通过不同的函数组合，可以组合出很多常用的函数，代码更具表现力。大型的程序都可以通过组合功能单一的简单函数来实现，我们所要做的就是积累足够多的功能函数。
- 代码简洁，开发快速
  接近自然语言易于理解（声明式代码）没有副作用
  每个函数都很小，易于测试和更小的出错概率

# 缺点

性能。上下文切换。比如 map 比纯循环要慢 8 倍资源占用，强调 immutable 会一直产生新对象
递归陷阱