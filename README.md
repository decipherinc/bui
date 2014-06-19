#BUI - Beacon User Interface
To add BUI styles to bootstrap, just add:
```css
@import "../../bui-less/style.less";
```
to the bottom of bootstrap/less/bootstrap.less

Use the grunt.js file in the bootstrap folder to compile less and js (read notes in the bootstrap folder README.md).

BUI is built to be modular. Ån application can load regular bootstrap, then when ready, adding classes to the <html> tag will activate the bui style overrides.


####Live preview at: http://decipher-design.com/bui/
