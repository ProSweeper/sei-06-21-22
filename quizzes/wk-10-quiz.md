# SEI Week 10 Quiz

## For this quiz, please slack your instructors the answers, in numbered order. Do not include the questions. For example:
    
```
1. Ashton Kutcher played Chewbacca
2. Yolo
```
<br>

## React JSX and Props

### (1) What JSX would render a `<Person>` component, passing to it a `name` prop with a value of "Fred"?

#### SOLUTION

```jsx
<Person name="Fred" />
```

### (2) In the code below, what would you replace the `<...>` with in order to pass the entire `person` object as the value for the `person` prop?: 

```jsx
import Person from './Person';

const person = {
  first: "Sammy",
  last: "Hagar",
  company: "Cabo Wabo Cantina"
};

export default function App() {
  return (
    <>
      <h1>Person Page</h1>
      <Person person=<...> />
    </>
  );
}
```

#### SOLUTION

```jsx
{person}
Like this: <Person person={person} />
```

### (3) Assuming the `<App>` component above and the `<Person>` component below, re-write the single line of code so that the `<Person>` component will render as intended.

```jsx
export default function Person() {
  return (
    <article>
      <h5>{props.first} {props.last}</h5>
      <p>Company: {props.company}</p>
    </article>
  );
}
```

#### SOLUTION

```jsx
export default function Person(props) {
```

### (4) Assuming the `<Info>` component below, what text will be displayed in the browser by rendering the `<Info>` component?

```jsx
export default function Info() {
  const title = 'Tesla';
  const engineType = 'Electric';
  const isFast = true;
  return (
    <article>
      <p>{title}</p>
      <p>Type: {engineType}</p>
      <p>Fast: {isFast}</p>
    </article>
  );
}
```

#### SOLUTION

```
Tesla
Type: Electric
Fast:

Note: Booleans don't render any text
```

## React State and Hooks

### (5) Given the code below, what will the data type of the variable `resultOfCallingUseState` be?

```js 
const resultOfCallingUseState = useState(null);
```

#### SOLUTION

```
Array/Object
```
 
### (6) Assuming the code below within a component, what is `setTodo` used for?

```js
const [todo, setTodo] = useState(null);
```

#### SOLUTION

```
It's a setter function used to update the value of the `todo` state
```

### (7) Given the `<Person>` component below, what would be logged in the console when the `<button>` is clicked for the first time?

```jsx
export default function Person() {
  const [name, setName] = useState('Jenny');

  function changeName() {
    setName('Jorge');
    console.log(name);
  }

  return (
    <article>
      <h5>{name}</h5>
      <button onClick={changeName}>Change Name to Jorge</button>
    </article>
  );
}
```

#### SOLUTION

```
Jenny
```

## React Event Handling

## (8) What change to the code below is necessary to make it work as intended when the `<button>` is clicked?

```jsx
export default function Person() {
  const [name, setName] = useState('Jenny');

  return (
    <article>
      <h5>{name}</h5>
      <button onClick={setName('Jorge')}>Change name to Jorge</button>
    </article>
  );
}
```

#### SOLUTION

```
onClick={() => setName('Jorge')}
Wrap the call to setName with a function
```

## Array Iterator Methods

### (9) What is the best array iterator method for converting an array of objects into an array of components to be rendered?

#### SOLUTION

```
map
```

### (10) What is the best array **iterator method** for returning a new array that no longer contains a certain object?

#### SOLUTION

```
filter
```