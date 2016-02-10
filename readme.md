
# Pre-talk notes

- Load in a browser tab [jspm registry](https://github.com/jspm/registry/blob/master/registry.json)
- Open [some plunker's](http://staxmanade.com/2015/09/jsmp-systemjs-starter-plunker/)
- [Angular 2 Getting Started](https://angular.io/docs/ts/latest/quickstart.html)

---

# JSPM & SystemJS Package Management

<div style="display: flex; align-items: center;">
  <a href="http://elegantcode.com/about">staxmanade.com/about</a>
  &nbsp;
  &nbsp;
  <img class='avatar' src='https://s.gravatar.com/avatar/b92a22c70f03a3218b358cfeeb566ac4?s=80'/>
</div>
---

# _Frictionless_ Browser Package Management

---

![](images/nothappy.gif)

---

Modules Types (quick review)

- AMD
- CommonJS
- window/global
- UMD
- ES2015/ES6 import

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

# window

```
window.myObject = {
  othersDoThis: "But we all know you don't"
};
```

---

# UMD

```
meh - too much code for a slide
```

---

# ES2015/ES6 import

```
export { value1: value1 }
```
or
```
export default class Foo {}
```

---

# SystemJS is the Future!

[whatwg.github.io/loader/](https://whatwg.github.io/loader/)

---

# DEMO!

- [CommonJS!](demo-commonjs)
- [AMD!](demo-amd)
- [Mixed ES6, CommonJS, AMD & Global!](demo-commonjs-amd-global)

---

# Registries

- NPM
- GitHub
- Custom/Pluggable

---

# [JSPM Registry](https://github.com/jspm/registry/blob/master/registry.json)

> alias to common packages (lodash, jquery, react, etc)

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

# ESNext Transpilers

- Babeljs
- TypeScript
- Traceur

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

# Not all peaches and roses (yet)

#### Possible (slow startup)

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
