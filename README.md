#BUI - Beacon User Interface

To add BUI styles to bootstrap, just link to the bui-styles.css file in bui-css. The style overrides have been built using bootstrap 3.1.1.

If adding styles, use the Gruntfile.js in the root of the bui folder to compile less.

BUI is built to be modular. An application can load regular bootstrap, then when ready, adding classes to the ```<html>``` tag will activate the bui style overrides.



## Demo
 
[http://decipher-design.com/bui/]()

## Currently Available Overrides

```sh
bui bui-grid bui-typography bui-icons bui-buttons bui-modals
```

### Partially Available (Being Developed)
```sh
bui-inputs bui-tooltips
```

## Installation

To use:

```sh
bower install decipher-bui
```

## Installation (For Developers)

```sh
git clone git://github.com/decipherinc/bui.git && cd bui
npm install
```

The above command will install client-side dependencies.
 
From there, you can build the `.css` files by executing:

```sh
grunt
```

To automatically compile `.less` files as you work, execute:

```sh
grunt watch
```

## Notes

### NOTES TO YOU:

`.codekit-config`?  

Don't worry about the `.codekit-config` or `cache` folder, Brandon uses it only for running a local server and seeing results update in the browser. Nothing is compiled with it, compiling less and js is done by using `grunt`.

When editing: Make sure the style.less file references the bootstrap variables and mixens
    
## Copyright

2014 Decipher, Inc.

## License

MIT

## Author

[Brandon Reid](http://github.com/brandonreid)