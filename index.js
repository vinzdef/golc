const defaultOptions = require('./default-options')
const colorizer = require('chalk')

const methods = ['error', 'warn', 'info', 'log', 'debug', 'trace']
const LEVELS = {
  NONE: 0,
  ...Object.entries(methods).reduce((acc, curr) => {
    acc[curr[1].toUpperCase()] = Number(curr[0]) + 1
    return acc
  }, {})
}

function getChalk(styles) {
  let ch = colorizer
  styles.forEach(s => {
    ch = ch[s]
  })
  return ch
}

function logger(level, message) {
  const {styles, withNewline, withLabel, withKind} = this.options

  const badgeC = getChalk(styles[level].badge)
  let text = withLabel
    ? badgeC(` ${this.label} `)
    : ''

  text += withLabel && withKind
    ? badgeC(' - ')
    : ''

  text += withKind
    ? badgeC(` ${level.toUpperCase()} : `)
    : ''

  text += withNewline
    ? '\n'
    : ''

  text += getChalk(styles[level].message)(` ${message} `)

  if (console[level]) {
    console[level](text)
  } else {
    console.log(text)
  }
}

class Golc {
  constructor(label, options = {}) {
    this.label = label
    this.options = {...defaultOptions, ...options}
    this.level = process.env.NODE_ENV === 'production'
      ? LEVELS.INFO
      : LEVELS.TRACE

    Object.assign(this, LEVELS)

    methods.forEach(method => {
      this[method] = function(message) {
        if (this.level < LEVELS[method.toUpperCase()]) {
          return
        }

        logger.call(this, method, message)
      }
    })
  }

  set level(l) {
    if (isNaN(l) || l < LEVELS.NONE || l > LEVELS.TRACE) {
      throw new Error(`Setting illegal golc logging level: ${l}`)
    }

    this._level = Number(l)
  }

  get level() {
    return this._level
  }
}

module.exports = Golc
