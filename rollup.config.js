import copy from 'rollup-plugin-copy';

export default [{
  input: ['lib/bin/citgm.js', 'lib/bin/citgm-all.js'],
  output: {
    dir: 'lib-cjs',
    format: 'cjs',
    interop: false,
  },
  plugins: [
    copy({
      targets: [{ src: 'lib/lookup.json', dest: 'lib-cjs' }]
    })
  ],
}];
