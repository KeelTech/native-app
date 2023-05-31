module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    '@react-native-community',
    'plugin:react-native/all',
    'prettier',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parser: 'babel-eslint',
  globals: {
    fetch: false,
    __DEV__: true,
  },
  plugins: ['react', 'flowtype', 'import', 'react-native', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prefer-stateless-function': [
      2,
      {
        ignorePureComponents: true,
      },
    ],
    'react/forbid-prop-types': [
      0,
      {
        forbid: [],
      },
    ],
    'react/destructuring-assignment': [1],
    'react/no-typos': [1],
    'react-native/no-raw-text': [0],
    'react-native/sort-styles': [0],
    'react-native/no-inline-styles': [0],
    'import/extensions': [0, 'never'],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/no-unresolved': [
      0,
      {
        caseSensitive: false,
      },
    ],
    'no-console': 'off',
    'linebreak-style': 0,
    'prettier/prettier': 'error',
    'arrow-body-style': 0,
  },
  env: {
    jest: true,
  },
};
