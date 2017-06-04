var childProcess = require('child_process')

var _spawns = []

process.on('exit', function () {
  _spawns.forEach(function (spawn) {
    try {
      spawn.kill()
    } catch (err) {}
  })
})

function exec (cmd, cwd) {
  var cmds = cmd.split(/\s+/g)
  var spawn = childProcess.spawn(cmds[0], cmds.slice(1), { cwd: cwd })
  _spawns.push(spawn)

  var _timeout = setTimeout(function () {
    console.log(' === ' + cwd + ' === ')
    console.log(_buffer)
    spawn.kill()
  }, 1000)

  var _buffer = ''
  function handler (chunk) {
    clearTimeout(_timeout)
    _buffer += chunk.toString('utf8')
    _timeout = setTimeout(function () {
      console.log(' === ' + cwd + ' === ')
      console.log(_buffer)
      spawn.kill()
    }, 1000)
  }

  spawn.stdout.on('data', handler)
  spawn.stderr.on('data', handler)
}

// exec('npm run build', 'v0.39.0')
exec('npm run build-wooster', 'v0.39.0')

// exec('npm run build', 'v0.40.0')
exec('npm run build-wooster', 'v0.40.0')

// exec('npm run build', 'v0.41.0')
exec('npm run build-wooster', 'v0.41.0')

// exec('npm run build', 'v0.42.0')
exec('npm run build-wooster', 'v0.42.0')
