---
title: JavaScript四则运算
conmment: true
customerLayoutList: true
---

> 在编写代码时我们有时候会碰到需要自己解析四则运算表达式的情况，本文简单的介绍使用JavaScript实现对简单四则运算表达式的解析

### 熟悉概念

#### 中缀表达式

中缀表示法（或中缀记法）是一个通用的算术或逻辑公式表示方法， 操作符是以中缀形式处于操作数的中间（例：3 + 4）。也就是我们最常用的算术表达式，中缀表达式对于人类来说比较容易理解，但是不易于计算机解析。

#### 逆波兰表达式

逆波兰表示法（Reverse Polish notation，RPN，或逆波兰记法），是一种是由波兰数学家扬·武卡谢维奇1920年引入的数学表达式方式，在逆波兰记法中，所有操作符置于操作数的后面，因此也被称为后缀表示法。逆波兰记法不需要括号来标识操作符的优先级。逆波兰表示法容易使用堆栈结构对表达式进行解析并计算，所以，这里我们解析四则元素表达式，是先从中缀表达式，转换为逆波兰表达式。然后再计算值。

### 中缀表达式转逆波兰

1. 将四则运算转换成数组arr，循环arr，判断每一项的值

2. 如果是数字，放到队列(queue)中

3. 如果是操作符(+-*/)，则
 - 判断当前操作符与栈(stack)顶操作符的优先级，如果当前操作符的优先级小于或者等于栈顶的操作符，那么将栈顶的操作符弹出栈，放入队列(queue)中，循环执行；
 - 如果当前操作符的优先级大于栈顶的操作符，则直接压栈(stack)。

4. 如果是左括号，直接入栈(stack)

5. 如果是右括号，从栈(stack)中不断弹出操作符，并加入队列中，直到栈顶的元素为左括号，弹出左括号，不加入队列，

6. 将栈中剩下的的操作符出栈入队（如果栈中还有操作符的话）

### 上代码

#### 将中缀表达式处理成逆波兰表达式
``` js

// 将中缀表达式处理成逆波兰表达式
function getQueue(exp) {
  const arr = []; // 字符串四则运算转换成数组
  const queue = []; // 队列
  const stack = []; // 栈

  for (let i=exp.length-1;i>=0;i--) {
    arr.push(exp[i])
  }

  while(arr.length) {
    let cur = arr.pop();

    if (isOparetor(cur)) {
      if (cur === '(') { // 左括号，直接入栈
        stack.push(cur);
      } else if (cur === ')') { // 右括号，弹出栈
        let po = stack.pop();

        while(po !== '(' && stack.length > 0) {
          queue.push(po);
          po = stack.pop();
        }
      } else { // +-*/ 比较优先级
        while(prioraty(cur, stack[stack.length - 1]) && stack.length > 0) {
          queue.push(stack.pop())
        }

        stack.push(cur);
      }
    } else { // 数字
      queue.push(Number(cur));
    }
  }

  // 如果栈中还有操作符，则依次出栈
  if (stack.length > 0) {
    while(stack.length) {
      queue.push(stack.pop())
    }
  }

  getOutstack(queue); // 将逆波兰表达式，依次弹出并做计算
}

// 判断是否是操作符
function isOparetor(value) {
  const oparetorStr = '()+-*/';
  return oparetorStr.indexOf(value) > -1;
}

// 判断优先级
function getPrioraty(op) {
  switch(op) {
    case '+':
    case '-':
      return 1;
    case '*':
    case '/':
      return 2;
    default:
      return 0;
  }
}

function prioraty(o1, o2) {
  return getPrioraty(o1) <= getPrioraty(o2);
}
```

#### 将逆波兰表达式，依次弹出并计算

``` js
function getOutstack(queue) {
  const outstack = [];

  while(queue.length) {
    const cur = queue.shift();

    if (!isOparetor(cur)) {
      outstack.push(cur);
    } else {
      const second = outstack.pop();
      const first = outstack.pop();

      outstack.push(getResult(first, second, cur));
    }
  }
}

function getResult(first, second, cur) {
  let result = 0;
  switch(cur) {
    case '+':
      result = first + second;
      break;
    case '-':
      result = first - second;
      break;
    case '*':
      result = first * second;
      break;
    case '/':
      result = first / second;
      break;
    default:
     return 0;
  }
}
```

