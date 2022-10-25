/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom': "url('@/assets/bg.png')",
       }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), //  设置 line-clamp 后要显示的行数 例如：<div class="line-clamp-3">
  ],
}
