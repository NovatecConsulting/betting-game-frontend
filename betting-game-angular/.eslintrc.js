module.exports = {
  extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    errorOnUnknownASTType: true,
    errorOnTypeScriptSyntacticAndSemanticIssues: true
  },
  plugins: ['@typescript-eslint'],
  rules: {}
};
