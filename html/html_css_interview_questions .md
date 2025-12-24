
# HTML & CSS Interview Questions and Answers

## 🟦 HTML Interview Questions

### 🔹 Basic Level

**1. What is HTML?**  
HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages.

**2. What are semantic HTML elements?**  
Semantic elements clearly describe their meaning:  
Examples: `<article>`, `<section>`, `<header>`, `<footer>`, `<nav>`, `<main>`

**3. What is the difference between `<div>` and `<span>`?**  
- `<div>`: block-level element, used for layout  
- `<span>`: inline-level element, used for styling small parts of text

**4. What is the difference between HTML and XHTML?**  
- HTML is more forgiving.  
- XHTML is stricter and must be well-formed.

**5. What are self-closing tags?**  
Tags that do not need a closing tag.  
Examples: `<img>`, `<br>`, `<hr>`, `<input>`

### 🔸 Intermediate Level

**6. How do you make a form in HTML?**
```html
<form action="/submit" method="post">
  <input type="text" name="username" />
  <input type="submit" value="Submit" />
</form>
```

**7. What is the use of the `data-*` attribute?**  
Used to store custom data private to the page or application.
```html
<div data-user-id="1234"></div>
```

**8. What is the difference between `<script>` and `<noscript>`?**  
- `<script>`: used to include JavaScript  
- `<noscript>`: content shown if JavaScript is disabled

### 🔺 Advanced Level

**9. What is lazy loading in HTML?**  
You can delay loading of images using the `loading="lazy"` attribute to improve performance.
```html
<img src="image.jpg" loading="lazy" />
```

**10. What is the purpose of the `meta` tag?**  
Used to define metadata such as charset, viewport, SEO info.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## 🟩 CSS Interview Questions

### 🔹 Basic Level

**1. What is CSS?**  
CSS (Cascading Style Sheets) is used to style and layout HTML content.

**2. What are the different types of CSS?**  
- Inline  
- Internal (`<style>`)  
- External (`.css` file)

**3. What is the difference between `id` and `class` in CSS?**  
- `id` is unique and used once: `#id`  
- `class` can be reused: `.class`

**4. What is the Box Model in CSS?**  
Every HTML element is a box with:
- `Content`
- `Padding`
- `Border`
- `Margin`

**5. What is specificity in CSS?**  
Specificity determines which CSS rule applies if multiple match the same element.  
**Inline > ID > Class > Tag**

### 🔸 Intermediate Level

**6. What is Flexbox?**  
A CSS layout mode that helps align items in rows or columns.
```css
display: flex;
justify-content: center;
align-items: center;
```

**7. Difference between `em`, `rem`, `%`, and `px`?**  
- `px`: fixed pixels  
- `%`: relative to parent  
- `em`: relative to parent font-size  
- `rem`: relative to root font-size

**8. What are pseudo-classes and pseudo-elements?**  
- **Pseudo-classes:** `:hover`, `:focus`, `:nth-child()`  
- **Pseudo-elements:** `::before`, `::after`, `::first-line`

### 🔺 Advanced Level

**9. What is the difference between `relative`, `absolute`, `fixed`, and `sticky` positioning?**  
- `relative`: relative to itself  
- `absolute`: relative to nearest positioned ancestor  
- `fixed`: relative to viewport  
- `sticky`: toggles between `relative` and `fixed` depending on scroll

**10. How to center a div both vertically and horizontally?**
```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**11. What is the difference between `visibility: hidden;` and `display: none;`?**  
- `visibility: hidden`: element is hidden but still takes up space  
- `display: none`: element is removed from the layout

**12. What are media queries in CSS?**
Used for responsive design based on screen size or device.
```css
@media (max-width: 600px) {
  body {
    background: lightblue;
  }
}
```

---

## ✅ Bonus: Real Interview Scenario Questions

- How would you implement a responsive navbar?  
- How would you handle browser compatibility in CSS?  
- How can you improve page performance using HTML/CSS?  
- What are accessibility (a11y) best practices in HTML/CSS?


---

## 🟦 Additional HTML Questions (Basic to Advanced)

### Basic

**11. What is the purpose of the `<title>` tag?**  
It defines the title of the document shown in the browser's title bar or tab.

**12. What are block-level and inline-level elements?**  
- **Block-level:** start on a new line and take full width (e.g., `<div>`, `<p>`)
- **Inline-level:** don't start on a new line (e.g., `<span>`, `<a>`)

**13. How do you add a comment in HTML?**  
```html
<!-- This is a comment -->
```

### Intermediate

**14. What is the difference between `<strong>` and `<b>`, or `<em>` and `<i>`?**  
- `<strong>` and `<em>` have semantic meaning (importance/emphasis).  
- `<b>` and `<i>` are purely stylistic (bold/italic).

**15. What is an iframe and how is it used?**  
An `<iframe>` embeds another HTML page within the current one.

```html
<iframe src="https://example.com" width="600" height="400"></iframe>
```

### Advanced

**16. How does the browser parse HTML?**  
Browsers use a parsing engine to build the DOM tree from top to bottom, parsing HTML tokens into elements.

**17. What is a contenteditable attribute?**  
It makes an element editable by the user.

```html
<div contenteditable="true">Edit me!</div>
```

**18. What is ARIA in HTML?**  
ARIA (Accessible Rich Internet Applications) attributes improve accessibility for screen readers and assistive tools.

---

## 🟩 Additional CSS Questions (Basic to Advanced)

### Basic

**13. What is the difference between `class` selector and `element` selector?**  
- `.class` targets elements with a specific class  
- `element` targets all elements of that type

**14. How do you add comments in CSS?**
```css
/* This is a comment */
```

### Intermediate

**15. What is the difference between `inline`, `block`, and `inline-block` display values?**  
- `inline`: does not respect width/height  
- `block`: starts on new line, full width  
- `inline-block`: behaves like inline, but respects width/height

**16. How do you apply styles to multiple elements?**  
Use comma-separated selectors:
```css
h1, h2, h3 {
  color: blue;
}
```

**17. What are transitions in CSS?**
Transitions create smooth animations between changes in CSS properties.
```css
button {
  transition: background 0.3s ease;
}
```

### Advanced

**18. What are keyframes in CSS animations?**
Used to define animations.
```css
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
```

**19. What is `z-index` in CSS?**
Controls the stacking order of overlapping elements. Higher values are on top.

**20. What are CSS variables?**
Custom properties you can reuse throughout your CSS.
```css
:root {
  --main-color: #3498db;
}
p {
  color: var(--main-color);
}
```

**21. What are `calc()`, `min()`, `max()` functions in CSS?**  
They allow dynamic calculations in CSS properties.
```css
width: calc(100% - 50px);
font-size: min(3vw, 20px);
```
