#BUI - Beacon User Interface

To add BUI styles to bootstrap, just link to the bui-styles.css file in bui-css. The style overrides have been built using bootstrap 3.1.1.

BUI is built to be modular. An application can load regular bootstrap, then when ready, adding override classes will activate the bui style overrides. You can add these override classes to the ```<html>``` tag or localize them to a specific ```<div>```.


## Demo
 
[http://decipher-design.com/bui/]()

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

### Development Installation (for Non-[Decipher](http://decipherinc.com) Employees)

1.  Clone

    ```sh
    git clone git://github.com/decipherinc/bui.git && cd bui
    ```

    The above command will install client-side dependencies.  If you're having problems with `npm`, [install Node.js](http://nodejs.org/download/).
 
2.  From there, you can build the `.css` files by executing:

    ```sh
    npm run-script build
    ```

3.  To automatically compile `.less` files as you work, execute:

    ```sh
    npm run-script watch
    ```

### Development Installation (for Decipher Employees)

Ask [Christopher Hiller](https://github.com/boneskull) or [Dick DeLeon](https://github.com/dickdeleon) where to clone from, then follow steps #2 and #3 above as necessary.

## Notes

TDB
    
## Copyright

2014-2015 Decipher, Inc.

## License

MIT

## Author

[Dick DeLeon](https://github.com/dickdeleon)
