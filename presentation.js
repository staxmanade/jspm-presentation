import bespoke  from 'bespoke';
import markdown from 'bespoke-markdown';
import keys     from 'bespoke-keys';
import classes  from 'bespoke-classes';
import touch    from 'bespoke-touch';
import bullets  from 'bespoke-bullets';
import backdrop from 'bespoke-backdrop';
import scale    from 'bespoke-scale';
import hash     from 'bespoke-hash';
import progress from 'bespoke-progress';

// Bespoke.js
bespoke.from('#presentation', [
  markdown(),
  keys(),
  touch(),
//  bullets('li, .bullet'),
  backdrop(),
  classes(),
  scale(),
  hash(),
//  progress()
]);

// Prism syntax highlighting
import prism from 'prismjs';
import './jspm_packages/npm/prismjs@1.3.0/themes/prism-okaidia.css!';
prism.highlightAll();
