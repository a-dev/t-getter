# t-getter.js

The library t-getter.js has a simple purpose — to help JS-developer keeps text of components in one place, and this place isn't an html-code of component.

Usually developers use various i18n locale-libraries, which, in addition, help manage texts.
But what if you don't need any locales other than one? In this case you have to load complicated library just to use small parts of it. It's time for t-getter.js to get it right.

That's how it looks in code:

```jsx
return (
  <h1>{ t('any_component.title') }</h1>
  <div>{ t('any_component.description') }</div>
)
```

## Features

- Framework agnostic. You can use it with React, Vue, Angular, Svelte etc and even with vanilla javascript.
- No dependencies.
- Simple. It's just one initialize function return other.
- Same as i18n-libraries API if you stick to the convention, but you can choose other name too.
- Organize you texts as you want.
- Use cascade for changing defaults from backend.
- Size less than 1 kB unzipped.

## Demo

As far as possible to make [a visual demo for this type of library](https://a-dev.github.io/t-getter/). See [the source here](https://github.com/a-dev/t-getter/tree/main/examples/demo).

## Installation

```
$ npm install t-getter
or
$ yarn add t-getter
```

## Getting started

First of all you have to make javascript object(s) with texts.
As example:

```js
// ./texts/header.js
export default {
  logo_title: 'Company name',
  menu: {
    services: 'Our services',
    about: 'About us',
  }
}

// ./texts/blog_post.js
export default {
  published_at: (date) => `Published at ${date}`
  copyright: (name) => `© Copyright by ${name}`
}
```

Then you set it for project.

```js
// ./lib/t.js
import textsForHeader from '../texts/header.js'
import textsForBlogPost from '../texts/blog_post.js'
import GetText from 't-getter'
const texts = {
  header: textsForHeader,
  blog_post: textsForBlogPost
}

const t = GetText([texts])
export default t
```

Finally, inside any component you just call t

```js
// ./components/Header
import t from '../lib/t'
return(
  <svg id="company-logo">
    <title>{t('header.logo_title')}</title>
  </svg>
  <nav>
    <a href="#">{t('header.menu.services')}</a>
    <a href="#">{t('header.menu.about')}</a>
  </nav>
)

// ./component/BlogPost
import t from '../lib/t'
return(
  /* ... */
  <div>{t('blog_post.published_at', data.publishedAt)}</div>
  <div>{t('blog_post.copyright', data.username)}</div>
)

```

If you have a huge app with some async loaded chunks, I advice you to use more than one instance of GetText.

## Options

```js
{
  freeze: true,
  placeholder: undefined
}
```

By default all objects freeze to avoid mistakes. But if you need change objects dynamically with a new text you can use the property { freeze: false }.

When t-function is called with a non-existent object key by default it returns undefined. But you can change the behavior and set a string, number or function. Note, in the last case the function will be called.

## License

[MIT](https://github.com/a-dev/t-getter/blob/main/LICENSE)
