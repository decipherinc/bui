#BUI - Beacon User Interface

Not quite ready for implementation. Still nailing down how things will be compiled and added.

To add BUI styles to bootstrap, just add ```@import "../../bui-less/style.less";``` to the bottom of bootstrap/less/bootstrap.less file.

Use the grunt.js file in the bootstrap folder to compile less and js (read notes in the bootstrap folder's README.md).

BUI is built to be modular. An application can load regular bootstrap, then when ready, adding classes to the ```<html>``` tag will activate the bui style overrides.


####Live preview at: http://decipher-design.com/bui/
