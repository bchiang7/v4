---
title: Dark Mode Toggle
description: Dark mode without the flash of default theme
date: 2021-04-21
draft: false
slug: /pensieve/dark-mode-toggle
tags:
  - Theming
  - Dark Mode
---

Dark mode toggle without the flash of default theme. Important bits:

- CSS variables for color theming
- Put `data-theme` attribute on `<html>`, not `<body>`, so we can run the JS before the DOM finishes rendering
- Run local storage check in the `<head>`
- JS for toggle button click handler can come after render

## HTML

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ...
    <script>
      // If there's a theme stored in localStorage, use it on the <html>
      const localStorageTheme = localStorage.getItem('theme');
      if (localStorageTheme) {
        document.documentElement.setAttribute('data-theme', localStorageTheme);
      }
    </script>
  </head>
  <body>
    <div class="theme-toggle">
      <button
        class="theme-toggle-btn js-theme-toggle"
        aria-label="Activate dark mode"
        title="Activate dark mode"
      >
        <!--
        <svg class="light-mode">
          <use xlink:href="#sun"></use>
        </svg>
        <svg class="dark-mode">
          <use xlink:href="#moon"></use>
        </svg>
        -->
      </button>
    </div>

    <script src="app.js"></script>
  </body>
</html>
```

## CSS Variables

```css
:root {
  --bg: #ffffff;
  --text: #000000;
}

[data-theme='dark'] {
  --bg: #000000;
  --text: #ffffff;
}
```

## JavaScript

```js:title=app.js
const themeToggleBtn = document.querySelector('.js-theme-toggle');

themeToggleBtn.addEventListener('click', () => onToggleClick());

const onToggleClick = () => {
  const { theme } = document.documentElement.dataset;
  const themeTo = theme && theme === 'light' ? 'dark' : 'light';
  const label = `Activate ${theme} mode`;

  document.documentElement.setAttribute('data-theme', themeTo);
  localStorage.setItem('theme', themeTo);

  themeToggleBtn.setAttribute('aria-label', label);
  themeToggleBtn.setAttribute('title', label);
};
```

## Resources

- <https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/>
- <https://css-tricks.com/flash-of-inaccurate-color-theme-fart/>
- <https://mxb.dev/blog/color-theme-switcher/>
- <https://www.joshwcomeau.com/react/dark-mode/>
- <https://web.dev/prefers-color-scheme/>
