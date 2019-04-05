# This is `golc` 🌈📝
<sup><sup>(Since `clog` was taken)</sup></sup>

A *colorful* logging utility for **NodeJS** programs.

![Screenshot of golc](images/example.png)

## Installation 📦

```
npm i --save golc
```

## Features 🍕

+ 6 **log levels** + disabling

+ customizable **color schemes** (via [`chalk`](https://github.com/chalk/chalk) API)

+ optional log **badges** (with *label* and *kind*)

## Usage

Import it
```
const Golc = require('golc')
```

Make it
```
const L = new Golc('Logger', {...})
```

... Use it!
```
function doTheJob() {
  try {
    job()
  } catch (e) {
    L.error(e)
  }

  L.info('Job done! 👍')
}
```

(Make more!)

```
const BLog = new Golc('BeautifulLogger', {...})
const SLog = new Golc('ShyLogger', {...})
```

### Suppressing logs

You can suppress logs of a certain level just by setting the `level` on your logger.
```
L.level = L.ERROR
```

Possible values are: `NONE`, `ERROR`, `WARN`, `INFO`, `LOG`, `DEBUG`, `TRACE`.

They go in order, so if you set `L.level = L.LOG`, you will get: `ERROR`, `WARN`, `INFO` and `LOG`.

> Beware! If you're logging costly operations, wrap your logic in `if`s!

```
if (L.level >= L.INFO) {
  L.info(costlyOperation())
}
```

## Customization 🎛
The constructor accepts a label, which will be used to tag your logs, and an options object:

```
const L = new Golc('Logger', options)
```

Where possible options are:

```
{
  withLabel: true, // Label of the logger in the badge
  withKind: false, // Kind of log in the badge (Error, Warn, ...)
  withNewline: false, // Put a newline between the badge and the message
  styles: {
    error: {
      badge: ['bgRed', 'bold'], // Badge styles
      message: ['red', 'bgYellow'] // Message styles
    },
    warn: {...},
    info: {...},
    log: {...},
    debug: {...},
    trace: {...}
  }
}
```

A style object it's really just an array containing the [`chalk`](https://github.com/chalk/chalk) options that you want to combine, as strings.

You can check how that works [right here](https://github.com/bugged-reality/golc/blob/master/index.js#L13)! 🔍👀

### License

[MIT](LICENSE)

### Contributions / Suggestions


[Welcome](https://github.com/bugged-reality/golc/pulls), and [welcome](https://github.com/bugged-reality/golc/issues)! 🤗

### Inspiration

[ulog](https://github.com/download/ulog)
