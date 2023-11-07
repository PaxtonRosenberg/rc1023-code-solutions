# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  debugging
- What is the purpose of events and event handling?
  to specify what we want to happen at a specific event
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  event listener
- What is a callback function?
  a function that is passed as an agrument to another function and is executed after something else has been completed
- What object is passed into an event listener callback when the event fires?
  the event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  the event target is the element that the event is being performed on, console.log the event.target will show in the console.
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  the parenthesis evoke the function before the event takes place, it will run immediately.

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
