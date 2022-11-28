module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      './lib/index.js',
        {
          catchFn: function(e) {
            console.log('catchFn------------->', e)
          },
          exclude: ['build', 'node_modules'],
          include: []
      }
    ],
    // [
    //   require('babel-plugin-await-add-trycatch'),
    //   {
    //     exclude: ['build', 'node_modules'],
    //     include: []
    //   }
    // ]
  ]
}
