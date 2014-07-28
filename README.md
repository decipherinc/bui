#BUI - Beacon User Interface

To add BUI styles to bootstrap, just link to the bui-styles.css file in bui-css. The style overrides have been built using bootstrap 3.1.1.

If adding styles, use the Gruntfile.js in the root of the bui folder to compile less.

BUI is built to be modular. An application can load regular bootstrap, then when ready, adding classes to the ```<html>``` tag will activate the bui style overrides.

## Demo
 
[http://decipher-design.com/bui/]()

## Installation

To use:

```sh
bower install bui
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

### TODO

- Tooltips 
  - Define header+details pattern for instant tooltips
- Make bui-instant-tooltip instantiation allow for html
- Define adding tooltips usinb angular `tooltip-html-unsafe`
- Add warning about anything other than static content in html enabled tooltips
- Get Seth's help - extend the bs tooltip and popover functions to allow for `data-learn-more="http://learnMoreLink"`
- Inputs 
  - add hover effect
- Buttons 
  - add btn-flush to strip all margins - audit margins (instead of button flush, how about button w/margins? btn-margins class or something?)
    
## Copyright

2014 Decipher, Inc.

## License

MIT

## Author

[Brandon Reid](http://github.com/brandonreid)