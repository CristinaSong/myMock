// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint' // 将不能被常规linter解析的代码转换为能被常规解析的代码
  },
  env: { // 指定要启用的环境
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    'eslint:recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 将规则视为一个警告
  // "error" 或 2 - 将规则视为一个错误
  rules: {
    // allow async-await
    'generator-star-spacing': '0',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句，不能用=或==，直接用===
    "no-const-assign": 2,//禁止修改const声明的变量
  }
}
