# This is `golc` 🌈
<sup><sup>(Since `clog` was taken)</sup></sup>

`gloc` is a logging utility for **NodeJS** programs, which supports:

+ 6 **log levels** and disabling
```
NONE, ERROR, WARN, INFO, LOG, DEBUG, TRACE
```
+ customizable **color schemes** (via `chalk` API)
```
const L = new Golc('Logger', {
  styles: {
    error: {
      badge: ['bgRed', 'bold'],
      message: ['red', 'bgYellow']
    },
    warn: {
      badge: ['bgYellow', 'black'],
      message: ['yellow', 'bgBlack']
    },
    info: {
      badge: ['bgBlue', 'bold'],
      message: ['blue', 'bgWhite']
    },
    log: {
      badge: ['bgBlack', 'bold'],
      message: ['white']
    },
    debug: {
      badge: ['bgGreen', 'white', 'bold'],
      message: ['green', 'bgBlack']
    },
    trace: {
      badge: ['bgMagenta', 'bold'],
      message: ['magenta', 'bgWhite']
    }
  }
})
```

+ optional log **badges** (with *name* and *kind*)

