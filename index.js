const defaultOptions = require('./default-options')
const colorizer = require('chalk')

const methods = ['error', 'warn', 'info', 'log', 'debug', 'trace']
const LEVELS = {
  NONE: 0,
  ...Object.entries(methods).reduce((acc, curr) => {
    acc[curr[1].toUpperCase()] = curr[0] + 1
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
    ? badgeC(` ${this.name} `)
    : ''

  text += withLabel && withKind
    ? badgeC(' - ')
    : ''

  text += withKind
    ? badgeC(` ${level.toUpperCase()} : `)
    : ''

  text += getChalk(styles[level].message)(` ${withNewline ? '\n' : ''}${message} `)

  if (console[level]) {
    console[level](text)
  } else {
    console.log(text)
  }
}

class Golc {
  constructor(name, options) {
    this.name = name
    this.options = {...defaultOptions, ...options}
    this.currentLevel = 3

    Object.assign(this, LEVELS)

    methods.forEach(method => {
      this[method] = function(message) {
        if (this.currentLevel < LEVELS[method.toUpperCase()]) {
          return
        }

        logger.call(this, method, message)
      }
    })
  }

  setLevel(level) {
    this.currentLevel = level
  }
}

module.exports = Golc
