const Golc = require('../')
const L = new Golc('Logger')

function logAll() {
  L.error('This is how `error` looks like!')
  L.warn('This is how `warn` looks like!')
  L.info('This is how `info` looks like!')
  L.log('This is how `log` looks like!')
  L.debug('This is how `debug` looks like!')
  L.trace('This is how `trace` looks like!')
}

function logLevel(LEVEL) {
  console.log(`\n\nSetting Level: ${LEVEL}\n`)
  L.level = L[LEVEL]
  logAll()
  console.log('\n-------------------------\n')
}

const levels = ['NONE', 'ERROR', 'WARN', 'INFO', 'LOG', 'DEBUG', 'TRACE'].reverse()
levels.forEach(logLevel)

