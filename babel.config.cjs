
const plugins = []
if (process.env.NODE_ENV === 'production') {
  // 利用 exclude 保留错误和警告信息
  plugins.push(['transform-remove-console', {
    'exclude': ['error', 'warn']
  }])
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  'env': {
    'development': {
      'plugins': ['dynamic-import-node', [
        './lib/index.js',
          {
            catchFn: function(e) {
              console.log('自定义catch------------->', e)
            },
            exclude: ['build', 'node_modules'],
            include: []
        }
      ]
    ]
    },
    'production': {
      'plugins': ['dynamic-import-node', ...plugins]
    }
  }
}
