# This is `golc` 🌈📝
<sup><sup>(Since `clog` was taken)</sup></sup>

`gloc` is a logging utility for **NodeJS** programs.

![Screenshot of gloc](images/example.png)

### Installation 📦

```
npm i --save golc
```

### Features 🍕

+ 6 **log levels** + disabling
```
NONE, ERROR, WARN, INFO, LOG, DEBUG, TRACE
```
+ customizable **color schemes** (via `chalk` API)

+ optional log **badges** (with *name* and *kind*)

### Customization 🎛
The constructor accepts a label, which will be used to tag your logs, and an options object:

```
const L = new Golc('Logger', options)
```

Where options are:

```
{
  withLabel: true,
  withKind: false,
  withNewline: false,
  styles: {
    error: {
      badge: ['bgRed', 'bold'],
      message: ['red', 'bgYellow']
    },
    warn: {...},
    info: {...},
    log: {...},
    debug: {...},
    trace: {...}
  }
}
```

A style object it's really just an array containing the `chalk` options that you want to combine, as strings.

You can check how that works [right here]()! 🔍👀
