
# JSPM/SystemJS Package Management

<div style="display: flex; align-items: center;">
  <a href="http://elegantcode.com/about">staxmanade.com/about</a>
  &nbsp;
  &nbsp;
  <img class='avatar' src='https://s.gravatar.com/avatar/b92a22c70f03a3218b358cfeeb566ac4?s=80'/>
</div>
---

# Frictionless Browser Package Management?

---

![](images/nothappy.gif)

---

Module

- AMD
- CommonJS
- UMD
- window/global
- other?

---

# AMD

    define(["exports", "jquery"], function (exports, $) {
        exports.getTestElement = function() { return $('.test'); }
    });

---

# CommonJS

```
const EventEmitter = require('events');

module.exports = new EventEmitter();
```

---

# DEMO!

- [CommonJS!](demo1-commonjs)
- [AMD!](demo2-amd)
- [Mixed ES6, CommonJS, AMD & Global!](demo3-commonjs-amd-global)

---

# Use the Future Today!

[whatwg.github.io/loader/](https://whatwg.github.io/loader/)

---

# NPM, GitHub, and Custom Regristries

---

# [JSPM Registry](https://github.com/jspm/registry/blob/master/registry.json)

> alias to common packages (lodash, jquery, react, etc)

---

# Module Formats

`commonjs`, `amd`, `esm`, `global`, `register`

---

# Load More than Just JavaScript

  - Images
  - CSS
  - JSON
  - Text
  - SASS
  - Audio
  - custom/plugins

---

```
import img from './images/nothappy.gif!image'

console.log('img:', img);
&gt;&gt; img: &lt;img src=​"http:​/​/​127.0.0.1:​8080/​images/​nothappy.gif"&gt;

console.log('img.constructor:', img.constructor);
&gt;&gt; img.constructor: HTMLImageElement() { [native code] }
```

---

# Development VS Production

---

# CLI tool

---

# ESNext

- Babeljs, TypeScript, Traceur

---

## Possible (slow startup)

- possible mitigations: https://github.com/capaj/systemjs-hot-reloader

---

# Easily Prototype NPM or GitHub Module

1. Google [site:staxmanade.com jspm plunker](https://www.google.com/search?q=site%3Astaxmanade.com+jspm+plunker)
2. Open blog post [JSMP/SystemJS Starter Plunker](http://staxmanade.com/2015/09/jsmp-systemjs-starter-plunker/)
3. Profit

---

# Prototype SMAZ Compression

```
import smaz from 'npm:smaz';

var value = "Hello World. The sun is shining";
var compressedValue = smaz.compress(value);

console.log("Value Length:" + value.length);
console.log("Smaz Length:" + compressedValue.length);
console.log("Compressed Value: " + compressedValue);
console.log("Decompressed Value: " + smaz.decompress(compressedValue));
console.log("Is it Correct? " + smaz.decompress(compressedValue) === value);

```

---
# Who's using it?

- [Aurelia](http://aurelia.io/)
- [Angular V2](https://angular.io/) - Getting Started Guide
- My Podcast App (BOOM)
