# SEI Week 7 Quiz

## For this quiz, please slack your instructors the answers, in numbered order. Do not include the questions. For example:
    
```
1. Ashton Kutcher played Chewbacca
2. Yolo
```
<br>

## Python Control Flow

### (1) Is an empty list, e.g., `[]`, in Python truthy or falsy?

#### SOLUTION

```
falsy
```

### (2) What would be returned by the following Python expression?

  ```python
  {} and "I love coding in Python"
  ```

#### SOLUTION

```
{}
```

### (3) What value will printed out last by the following code?

  ```python
  cur_num = 10
  while True:
    if cur_num == 0:
      break
    print( cur_num )
    cur_num -= 1
  ```

#### SOLUTION

```
1
```

## Python Containers

### (4) What's the key difference between a list and a tuple?

#### SOLUTION

```
lists are mutable while tuples are immutable
```

### (5) Dictionaries in Python are similar to ________ in JavaScript

#### SOLUTION

```
objects
```

### (6) What does a list comprehension in Python always return?

#### SOLUTION

```
A new list
```

### (7) True or False: The following code's output will be as expected?

  ```python
  colors = ('purple', 'orange', 'red')
  for i, c in enumerate(colors):
    print( f'{i + 1} - {c.upper()}' )
  ```
  **Expected output:**
  ```
  1 - PURPLE
  2 - ORANGE
  3 - RED
  ```

#### SOLUTION

```
True
```

## Python Functions

### (8) Why won't the following code work as intended?

  ```Python
  def get_net_worth(cash, other_assets, *args, long_term_debt):
    short_term_debt = 0
    for arg in args:
      short_term_debt += arg
    print(f'Net Worth: {(cash + other_assets) - (short_term_debt + long_term_debt)}')
  ```

#### SOLUTION

```
The *args must be the last parameter (listed after long_term_debt)
```

## Python Classes

### (9) What method in a class is automatically called by Python when a new instance of a class is being created?

#### SOLUTION

```
The __init__() method
```

## Python Miscellaneous

### (10) What would be printed by the following Python code?

  ```python
  nums = list(range(0, 6, 2))
  print(nums)
  ```

#### SOLUTION

```
[0, 2, 4]
```