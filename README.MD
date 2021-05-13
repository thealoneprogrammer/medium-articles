
##  **medium-articles**
> **Get Medium posts of an account in JSON format**

medium-articles is an unofficial package for getting medium posts of an account.

## **Install**
```sh 
$ npm install medium-articles
OR
$ yarn add medium-articles
```

This module uses [rss-parser](https://www.npmjs.com/package/rss-parser) under the hood to work.

## **Usage with ES6**

```js
import { getMediumPosts } from 'medium-articles'

const username = "your medium account username"
async () => {
    // This will give you all of your medium posts in JSON format.
    const articles = await getMediumPosts(username)
    ...
}
```

## **Node Js usage**
```js
const getMediumPosts = require('medium-articles')

const username = "your medium account username"
async () => {
    // This will give you all of your medium posts in JSON format.
    const articles = await getMediumPosts(username)
    ...
}
```

## **Allowed username format**
1. username //example - vue
2. @username //example - @vue

## **Development**
Install packages
```sh
$ npm install
```
Build
```sh
$ npm run build
```
Test
```sh
$ npm run test
```
