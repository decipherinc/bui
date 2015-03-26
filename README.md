#BUI - Beacon User Interface

To add BUI styles to bootstrap, just link to the bui-styles.css file in bui-css. The style overrides have been built using bootstrap 3.2.0.

BUI is built to be modular. An application can load regular bootstrap, then when ready, adding override classes will activate the bui style overrides. You can add these override classes to the ```<html>``` tag or localize them to a specific ```<div>```.


## Demo
 
[http://decipherinc.github.io/bui](http://decipherinc.github.io/bui)

## Currently Available Overrides

```sh
bui-grid bui-typography bui-icons bui-buttons bui-modals
```

## Installation

1. To install:

    ```sh
    bower install bui
    ```

2. If you do not have [Bower](http://bower.io/) installed, install it via `npm`:

    ```sh
    npm install -g bower
    ```

3. If that didn't work, you probably don't have [Node.js](http://nodejs.org) installed, so [download and install it](http://nodejs.org/download/), then repeat step #2, then repeat step #1.  Fun!

### Development Installation (for Non-[FocusVision](http://www.focusvision.com) Employees)

1.  Clone

    ```sh
    $ git clone git://github.com/decipherinc/bui.git && cd bui
    ```
    
2.  Install development dependencies

    ```sh
    $ npm install
    ```
 
3.  Build the `.css` files by executing:

    ```sh
    $ grunt
    ```

4.  To automatically compile `.less` files as you work, execute:

    ```sh
    $ grunt watch:main
    ```

### Development Installation (for FocusVision Employees)

Ask [Christopher Hiller](https://github.com/boneskull) or [Dick DeLeon](https://github.com/dickdeleon) where to clone from, then follow above steps #2-onward.

## Notes

TDB
    
## Copyright

2014-2015 FocusVision Worldwide

## License

MIT

## Author

[Dick DeLeon](https://github.com/dickdeleon)
