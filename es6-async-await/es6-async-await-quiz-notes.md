# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  async is used to define an asynchronous function and the await keyword pauses execution of the function until the Promise is resolved or rejected
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async and await keep the code block more linear, more synchronous, rather than .then/.catch
- When do you use `async`?
  before a function to indicate that the function will be able to handle asynchronous operations
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  within an async function, if you await a synchronous function, the result will be immediately available
- How do you handle errors with `await`?
  .catch
- What do `try`, `catch` and `throw` do? When do you use them?
  try returns a successful Promise, catch and throw will return error messages
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the function wont wait for the promise to be resolved and errors can go uncaught and potentially returned
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  for now callbacks, because i am most familiar with that syntax

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
