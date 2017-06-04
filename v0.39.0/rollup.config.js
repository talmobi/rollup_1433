import buble from 'rollup-plugin-buble'

export default {
  entry: 'index.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [
    buble()
  ]
}
