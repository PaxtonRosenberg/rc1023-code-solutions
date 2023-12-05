# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  the logical && operator will return the first operand if it's falsey otherwise it will return the second operand
  the logical || will return the first operand if it's truthy otherwise it will return the second operand
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  the expression using && or || will only evauluate the second operand if needed
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  it only considered null and undefined rather than all falsey statements
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  a ternary evaluates a specific condition and return one value if truthy and another if falsey, it is a more concise way to write if/else statements
- What is the `?.` (optional chaining) operator? When would you use it?
  ?. evaluates whether a property in a object has a value
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  either at the beginning or end of an object or array, will return the value of that array or object in addition to whatever is added
- What data types can be spread into an array? Into an object?
  key value pairs
- How does spread syntax differ from rest syntax?
  spread expands while rest condenses

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
