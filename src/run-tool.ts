import {spawn}from "child_process"
export default function spawner(cmd, cb) {
  let opts: {
    stdio: any,
    env: any  | undefined
  } = {
    stdio: "inherit",
    env: {}
  }
  cb = cb || function(){}
  cmd = cmd.split(' ')
  opts.stdio = 'inherit'
  opts.env = Object.assign({}, process.env, opts.env || {})
  spawn(cmd[0], cmd.slice(1), opts)
    .on('error', console.log)
    .on('close', cb)

}
