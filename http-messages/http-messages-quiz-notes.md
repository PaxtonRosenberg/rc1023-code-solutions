# http-messages-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  service or resource requester
- What is a server?
  service or resource provider
- Which HTTP method does a browser issue to a web server when you visit a URL?
  GET
- What three things are on the start-line of an HTTP **request** message?
  HTTP method (GET, PUT, POST etc..), request target (URL), HTTP version (defines structure)
- What three things are on the start-line of an HTTP **response** message?
  Protocol version (HTTP/1.1), status code (indicates success or failure of the request - a number like 200, 404 or 302), status text (textual description of status code for human readability)
- What are HTTP headers?
  they allow for clients and servers to pass additional information within an HTTP request or response.
- Where would you go if you wanted to learn more about a specific HTTP Header?
  MDN
- Is a body required for a valid HTTP request or response message?
  no, fetching resources like GET, HEAD, DELETE or OPTIONS dont need one

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
