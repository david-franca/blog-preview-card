# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./public/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind](https://styled-components.com/) - For styles

### What I learned

I learned how to create reusable components using Tailwind classes. This was very useful to better organize the classes and minimize the amount of classes that are listed in the HTML tags.

See the example below to learn how to set up class components.

It is placed inside the global css where the global tailwind imports are.

```css
@layer components {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: theme("spacing.200");
    border: 1px solid theme("colors.gray.950");
    box-shadow: theme("boxShadow.card");
    background-color: #ffffff;
    padding: 1.5rem;
    max-width: 24rem;
    border-radius: 1.25rem;
  }
}
```

### Continued development

I still need to improve a lot in terms of knowing the tools I use and knowing what to use and when to use them.

### Useful resources

- [Adding component classes](https://tailwindcss.com/docs/adding-custom-styles#adding-component-classes) - This helped me for configure tailwind for component classes.
- [Tailwind Configuration Customization](https://tailwindcss.com/docs/configuration) - This is a documentation about configuration file for tailwind.

## Author

- Website - [David Franca](https://davidfranca.vercel.app/)
- Frontend Mentor - [@david-franca](https://www.frontendmentor.io/profile/david-franca)
