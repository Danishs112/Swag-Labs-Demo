module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'Google',
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
        'ecmaVersion': 8,
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'no-unused-vars': 'off',
    'require-jsdoc': 0,
    'linebreak-style': 0,
    'new-cap': 0,
    'max-len': ['error', {'code': 100}],
  },
};
