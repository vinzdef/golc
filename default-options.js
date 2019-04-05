module.exports = {
  withLabel: true,
  withKind: false,
  withNewline: false,
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
}
