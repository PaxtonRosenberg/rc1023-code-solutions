# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  when a component is output to the DOM
- What is a React Effect?
  a React Effect specifies some kind of side effect caused by React rendering rather than a specific event taking palce
- When should you use an Effect and when should you not use an Effect?
  A good place to use Effects is when fecthing data or dealing some kind of async code you are waiting on to perform other tasks. If the Effect only adjusts some kind of state based on a different local state, it may not be necessary to use an Effect
- When do Effects run?
  After each render
- What function is used to declare an Effect?
  useEffect hook
- What are Effect dependencies and how do you declare them?
  dependencies control when the effect will run, you pass them in using an array and they are the second arguement in the useEffect hook. The effect will only run if the dependencies passed into the array have changed.
- Why would you want to clean up from an Effect?
  to ensure that nothing is left "running" in the background after each render, example you may want to shut a server down after the effect runs
- How do you clean up from an Effect?
  by adding a return statement within the hook
- When does the cleanup function run?
  before the component is unmounted

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
