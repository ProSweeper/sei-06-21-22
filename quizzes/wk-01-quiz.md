# SEI Week 1 Quiz - Answer Key

### Bash/Zsh (Terminal)

#### For EACH and EVERY question in this section, assume you are in the `~/fridge` directory, and send the correct commands:

## Bash/Zsh (Terminal)

#### For EACH question in this section, assume you are in the `~/fridge` directory and answer with what terminal commands(s) will perform the following...

1. Make a `vegetables` and a `cakes` directories inside of `~/fridge`.

    ### Solution

    **Accept all answers that perform the desired result, for example:**

    ```
    mkdir vegetables cakes
    ```

2. Create two files, `onion.txt` and `lettuce.txt`, within the new `vegetables` directory.

    ### Solution

    **Accept all answers that perform the desired result, for example:**

    ```
    touch vegetables/onion.txt vegetables/lettuce.txt
    ```

3. Delete the `vegetables` directory (and everything inside it).

    ### Solution

    **Accept all answers that perform the desired result, for example:**

    ```
    rm -rf vegetables
    ```
    or
    ```
    rm -r vegetables
    ```

## JS Variables

4. Assign the string "SEI" to a variable named `course`.

    ### Solution

    ```js
    let course = 'SEI';
    ```

## Data Structures - JS Arrays

5. Define an array named `weekend` with just the string 'Saturday' in it.

    ### Solution

    ```js
    const weekend = ['Saturday'];
    ```

6. Write the line of code that will add the string 'Sunday' to the end of the `weekend` array.

    ### Solution

    ```js
    weekend.push('Sunday');
    ```

7. Knowing that the `weekend` array now contains the string 'Saturday' followed by the string 'Sunday', write the line of code that will access the string of 'Saturday' in `weekend` and assign it to a variable named `day`.

    ### Solution

    ```js
    let day = weekend[0];
    ```

## Data Structures - JS Objects

8. Assign an object literal to a variable named `brain` having a property with a key of `energyLevel` and a numeric value of `10`.

    ### Solution

    ```js
    const brain = {energyLevel: 10};
    ```

## JS Functions

9. Write a function declaration named `computeArea` that has two parameters, `length` & `width`, and **returns** the area of a rectangle (the `length` multiplied by the `width`).

    ### Solution

    ```js
    function computeArea(length, width) {
      return length * width;
    }
    ```

## JS Control Flow

```js
// Car and trip data
let milesPerGallon = 25;
let gallonsLeft = 3;
let milesToGo = 100;
```

10. Write an `if` statement that uses all three of the above variables in its conditional expression and will `console.log('SOS!')` if the "car" does not have enough gallons of gas to travel at least the number of `milesToGo` (no need to write a function, just the `if` statement please).

    ### Solution

    ```js
    if (milesPerGallon * gallonsLeft < milesToGo) console.log('SOS!');
    ```