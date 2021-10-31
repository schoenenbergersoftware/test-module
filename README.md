# "Lorem Ipsum" Generator

## 1. - Including the Library is like the following

```js
const loremIpsum = require("@ssowa/loremipsum");
// or
import loremipsum from "@ssowa/loremipsum";
```

## 2. - Usage


```ts

// use parameters
let text = loremIpsum(20, 120, false)

// or
let text = loremIpsum({
    minWordCount: 40,
    maxWordCount: 120,
    paragraphs: <false|null|number>,
})

```