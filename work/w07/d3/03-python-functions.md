<img src="https://i.imgur.com/uz3kC2P.jpg">

# Python Functions 

## Learning Objectives

| Students Will Be Able To: |
|---|
| Compare Python to JavaScript functions |
| Define functions in Python |
| Invoke functions in Python |
| Use `*args` and `**kwargs` parameters |

## Setup

To experiment with the code in this lesson, please use a Python-based repl in [repl.it](https://repl.it)

## Review the Use Case of Functions - What & Why?

<details><summary>What is a function?</summary>
<p><strong>
A function is a block of statements that can be called with inputs and optionally returns an output.
</strong></p>
</details>

<details><summary>Why are there functions?</summary>
<p><strong>
Functions provide:

- Code organization/modularization
- Code reusability
- Readability (when functions are appropriately named)
</strong></p>
</details>
<br>

Functions are the building blocks of programming and all programming languages have them, including Python...

## Defining Functions in Python

Here's how we define a basic function in Python:

<img src="https://i.imgur.com/pixhxbF.png">

As you can see:

- The first line starts with the `def` keyword. This defines a function.
- The next word is the name (identifier) of the function.
- Following that is a parameter list inside parentheses.
- The first line ends with a colon.
- The first line is followed by an indented code block that we have become familiar with.
- Python functions, like JS, optionally return a value using a `return` statement.

## A Minimal Function in Python

In JavaScript, we often would create an "empty" function temporarily.

In a Python repl, let's "stub up" a function Python:

```python
def first_function():
  pass
```

The `pass` statement is simply a "do nothing" statement and is useful here to create a function that has at least one statement in its block, which is a requirement. 

<details><summary> What does a JS function return by default if it doesn't include a return statement?</summary>
<p><code>undefined</code></p>
</details>

Let's see what a Python function returns by default:

```python
def first_function():
  pass

# Assign value returned by default
result = first_function()
print(result)
``` 

Good guess!

## Key Differences Between Python & JS Functions

Besides the obvious syntactical differences, here are a few other things to be aware of:

#### Function expressions do not exist in Python

Functions in Python are defined using the `def` keyword. However, unlike in JavaScript, you cannot define a function in Python by assigning it to a variable:

```python
# This will not work
my_function = def my_function():
  pass
```

#### Python has a different sort of anonymous/inline function

Python does have a the concept of anonymous and/or inline functions - called `lambda` functions.

`lambda` functions are very much like _Arrow Functions_ in JavaScript:  

- They implicitly return a single expression's result.
- They can be assigned to a variable.

However, they cannot have any code block - only a single expression that has its result implicitly returned.

For example:

```js
// JavaScript
const nums = [1, 3, 2, 6, 5];
let odds = nums.filter(num => num % 2);
```
	
```python
# Python
nums = [1, 3, 2, 6, 5]
odds = list( filter(lambda num: num % 2, nums) )
```

Lambda functions are nifty when using Python functions such as `map()` - just like how arrow functions are nifty when using array iterator methods.

#### Python does not "hoist" functions

The last key difference between Python and JavaScript functions is that you cannot invoke a Python function before the code that defines it:

```python
# Not allowed until after the code below
add(5, 10)

def add(a, b):
  return a + b
```

## Calling Functions

In Python, calling functions is the same as it is in JavaScript:

```python
def add(a, b):
  return a + b
  
def sub(a, b):
  return a - b

def compute(a, b, op):
  return op(a, b)

print( compute(1, 2, add) )
```

Yup, functions in Python can be passed to other functions - **callbacks** exist in Python!

Let's learn more about Python's **parameters** & **arguments**...

## Parameters & Arguments

Just like in JS, **parameters** are the placeholders for passing input to a function.

```python
# a & b are parameters
def add(a, b):
  return a + b
```

Also like JS, the values/expressions passed in to a function when calling it are known as **arguments**:

```python
num = 5

# num & 10 are arguments
add(num, 10)
```

However, unlike JavaScript, Python requires that the correct number of arguments be provided when calling a function. For example:

```python
def add(a, b):
  return a + b
  
add()
  
# Generates the following error:
# TypeError: add() missing 2 required positional arguments: 'a' and 'b'
```

### Accepting a varying number of arguments

In JavaScript, we were able to access "extra" arguments being passed in to a function by using the special `arguments`:

```js
// Using the arguments special variable
function sum() {
  let total = 0;
  for (arg of arguments) total += arg;
  return total;
}

console.log( sum(1, 5, 10) );  // -> 16
```

Or preferably by using ES2015's _rest parameters_:

```js
function sum(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}

console.log( sum(1, 5, 10) );  // -> 16
```

#### Python's `*` Parameter Specifier (`*args`)

Using the `*` ("star") specifier in a parameter list allows us to pass in a varying number of **positional** arguments into a function:

```python
def fn(*args):
  print( type(args) )
  for arg in args:
    print(arg)

fn(1, 2, 'SEI')
''' Output:
<class 'tuple'>
1
2
SEI
'''
```

The identifier used with `*`, i.e., `args`, can be anything, however **by convention, use `args`**.

Always use the `*args` parameter **after** any **required** positional parameters. For example:

```python
def dev_skills(dev_name, *args):
  dev = {'name': dev_name, 'skills': []}
  # args will be a tuple
  for skill in args:
    dev['skills'].append(skill)
  return dev

print(dev_skills('Alex', 'HTML', 'CSS', 'JavaScript', 'Python'))
# -> {'name': 'Alex', 'skills': ['HTML', 'CSS', 'JavaScript', 'Python']}
```

Or, why not use the `list()` function to convert the args tuple into a list...

```python
def dev_skills(dev_name, *args):
  dev = {'name': dev_name, 'skills': list(args)}
  return dev
```

#### Python's `**` Parameter Specifier (`**kwargs`)

First, the reason we name the parameter `kwargs` is because it stands for **keyword arguments**.

A **keyword argument** is an argument with a _name_, and this is why keyword arguments are also referred to as **named arguments**.

For example, assume the following function:

```python
def divide(a, b):
  return f'{a} divided by {b} is {a / b}'
```

Not that it's recommended, but knowing how the function is defined above, we could invoke the function using keyword arguments where the order of the arguments doesn't matter:

```python
divide(b=25, a=100) # returns '100 divided by 25 is 4.0'
```

However, more commonly, the concept of keyword arguments is combined with the `**` specifier when defining a parameter, conventionally named `**kwargs`.

By adding `**kwargs` at the **end of the parameter list**, we can access a varying number of keyword arguments. For example:

```python
def dev_skills(dev_name, **kwargs):
  # kwargs will be a dictionary!
  dev = {'name': dev_name, 'skills': kwargs}
  return dev

print(dev_skills('Jackie', HTML=5, CSS=3, JavaScript=4, Python=2))
```

#### Combining Required Positional, Optional Positional (`*args`) & Keyword (`**kwargs`) Arguments

You can define all three types of parameters in a function, but you have to do it in this order:

```python
def arg_demo(pos1, pos2, *args, **kwargs):
  print(f'Positional params: {pos1}, {pos2}')
  print('*args:')
  for arg in args:
    print(' ', arg)
  print('**kwargs:')
  for keyword, value in kwargs.items():
    print(f'  {keyword}: {value}')

arg_demo('A', 'B', 1, 2, 3, color='purple', shape='circle')

'''Output:
Positional params: A, B
*args:
  1
  2
  3
**kwargs:
  color: purple
  shape: circle
'''
```

## ❓ Review Questions

Take a moment to review the following questions:

1. **In the following, which line number of code will be the last to execute?**

	<img src="https://i.imgur.com/M6AGssz.png">

2. **Assuming the following function:**

	```python
	def add(a, b):
	  return a + b
	```
	**Which of the following statements will result in an error?<br> (there could be more than one)**
	
	A) `add(10, 100.)` <br>
	B) `add(10, '10')` <br>
	C) `add(100)` <br>
	D) `add('abc', 'def')` <br>
	E) `add(10, 20, 30)` <br>

3. **What "feature" in Python would allow the `add` function above to accept any number of numbers to add together?**

## References

[*args and **kwargs in python explained](https://pythontips.com/2013/08/04/args-and-kwargs-in-python-explained/)

